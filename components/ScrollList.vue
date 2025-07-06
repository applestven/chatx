<template>
  <div class="scroll-container relative overflow-hidden h-[56px] w-full mb-[32px]">
    <ul
      ref="listContainer"
      class="flex absolute top-0 left-0"
      :style="{ transform: `translateX(${currentPosition}px)` }"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <li
        v-for="(item, index) in tripleItems"
        :key="`${item.id}-${index}`"
        class="flex-shrink-0 w-[180px] h-[56px] flex items-center justify-center mx-[16px]"
        :class="itemClass"
      >
        <slot :item="item">
          {{ item.text }}
        </slot>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  },
  direction: {
    type: String,
    default: 'left',
    validator: val => ['left', 'right'].includes(val)
  },
  speed: {
    type: Number,
    default: 1
  },
  itemClass: {
    type: String,
    default: ''
  },
  pauseOnHover: {
    type: Boolean,
    default: true
  }
})

const listContainer = ref(null)
const currentPosition = ref(0)
const animationFrame = ref(null)
const isHovering = ref(false)

const tripleItems = computed(() => {
  return [...props.items, ...props.items, ...props.items]
})

const itemsWidth = computed(() => props.items.length * 180)

const initPosition = () => {
  // 左：-itemsWidth，右：-itemsWidth
  currentPosition.value = -itemsWidth.value
}

const animate = () => {
  if (isHovering.value && props.pauseOnHover) {
    animationFrame.value = requestAnimationFrame(animate)
    return
  }

  if (props.direction === 'left') {
    currentPosition.value -= props.speed
    if (currentPosition.value <= -itemsWidth.value * 2) {
      // 回到中间
      currentPosition.value += itemsWidth.value
    }
  } else {
  
    currentPosition.value += Number(props.speed)
    if (currentPosition.value >= 0) {
      // 回到中间
      currentPosition.value -= itemsWidth.value
    }
  }

  animationFrame.value = requestAnimationFrame(animate)
}

const handleMouseEnter = () => {
  isHovering.value = true
}
const handleMouseLeave = () => {
  isHovering.value = false
}

const startAnimation = () => {
  stopAnimation()
  animate()
}
const stopAnimation = () => {
  if (animationFrame.value) {
    cancelAnimationFrame(animationFrame.value)
    animationFrame.value = null
  }
}

onMounted(() => {
  initPosition()
  startAnimation()
})
onBeforeUnmount(() => {
  stopAnimation()
})

// 监听items和direction变化，重置位置
watch(
  () => [props.items, props.direction],
  () => {
    initPosition()
  }
)
</script>

<style scoped>
.scroll-container {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scroll-container::-webkit-scrollbar {
  display: none;
}
</style>
