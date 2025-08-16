<template>
  <div>
    <h2 class="text-primary-light text-[40px] mb-[32px] font-[600]">{{ content.title }}</h2>
    <template v-for="(section, index) in content.sections" :key="index">
      <h3 class="text-[24px] font-[600] mb-2">{{ section.subtitle }}</h3>
      <p class="font-medium text-[#676c76] mb-[24px]">{{ section.text }}</p>
    </template>
  </div>
</template>

<script setup>
defineProps({
  content: {
    type: Object,
    required: true,
  },
})
</script>
