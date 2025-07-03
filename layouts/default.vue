<template>
  <div id="chatXContent">
    <Header />
    <main class="cx-content">
      <slot />              <!-- 页面内容插槽 -->
    </main>
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
</script>
