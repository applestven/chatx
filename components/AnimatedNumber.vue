<template>
  <span ref="el">{{ dealNumber(displayValue) + props.suffix }}</span>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";

const props = defineProps({
  target: { type: Number, required: true },
  duration: { type: Number, default: 1500 },
  suffix: { type: String, default: "" },
  locale: { type: String, default: "en-US" },
});

const dealNumber = (num) => {
  return num.toLocaleString(props.locale);
};

const displayValue = ref(0);
const hasAnimated = ref(false);
const el = ref(null);

function animate() {
  const start = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / props.duration, 1);
    const current = Math.floor(progress * props.target);
    displayValue.value = current;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      displayValue.value = props.target;
    }
  }

  requestAnimationFrame(update);
}

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !hasAnimated.value) {
        hasAnimated.value = true;
        animate();
        observer.disconnect(); // 如果只需要触发一次动画
      }
    },
    {
      threshold: 0.5, // 可见区域达到50%时触发
    }
  );

  if (el.value) {
    observer.observe(el.value);
  }
});

watch(() => props.target, (newVal) => {
  if (hasAnimated.value) {
    animate(); // 如果目标值变化，并且已经进入视口过，则重新动画
  }
});
</script>
