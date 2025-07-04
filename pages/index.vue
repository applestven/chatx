<template>
    <section class="banner-bar min-h-[200vh]">
      <div class="mt-[160px] text-center flex flex-col items-center justify-center">
        <h1 class="text-[40px] w-[570px] text-[#22242C] font-medium z-5 text-center " data-aos="fade-up">
          <strong class="text-[#00BC53] z-5">ChatX</strong>
          全球化翻译与智能营销的终极解决方案
        </h1>
        
        <h3 class="mt-[16px] w-[1024px] text-[#676C76]" data-aos="fade-up">
          致⼒为企业提供跨境翻译与私域营销的全⾯解决⽅案。覆盖WhatsApp、Telegram、Facebook等海外主流平台，⽀持⼀站式多账号管理和⾼效便捷的粉丝运营。同时，ChatX内置的SCRM客户管理功能与AI技术深度融合，显著提升企业沟通效率，推动可持续增⻓。通过精准的跨境翻译与营销策略，帮助企业拓展更有价值的全球客户，实现⽆缝的出海全流程营销。
        </h3>
      </div>
    </section>
</template>

<script setup>
onMounted(() => {
  // 确保 AOS 被初始化（在浏览器环境中）
  if (process.client && window.AOS) {
    window.AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    })
  }
})
</script>