<template>
  <section class="text-center flex flex-col items-center justify-center download-page-bg">

    <div class="flex justify-between min-h-[630px] w-[1200px]">
      <div class="pt-[190px] w-[490px]">
        <h1 class="text-[#22242c] text-[40px] font-semibold leading-[56px] min-h-[112px] text-left" data-aos="fade-up"><strong class="text-[#00bc53]">ChatX实时翻译·智能多语言识别</strong></h1>
        <h3 class="text-[#22242c] text-[16px] font-semibold leading-[22px] text-left pt-[16px]" data-aos="fade-up">自动检测+实时翻译+多语言+多线路，无障碍通达全球</h3>
        <div class="mt-[50px] relative">
          <div class="absolute left-0" data-aos="fade-up"><NuxtLink class="text-[#22242c] text-[14px] font-medium text-left" to="/download"><button class="min-h-[48px] w-[240px] bg-[#22242c] rounded text-white text-sm leading-5 px-5 py-2 transition-all duration-300 cursor-pointer">下载客户端</button></NuxtLink></div>
          <img src="/ipx/index-btn-icon-3.webp" widh="18" height="18" class="absolute right-[203px] top-0" data-aos="zoom-in-left"/>
        </div>
      </div>
      <div class="mt-[80px]" data-aos="fade-left">
        <img src="/ipx/product-translate-img-1.webp" widh="670" height="470" />
      </div>
    </div>

    <div class="flex items-center justify-center gap-[40px] min-h-[630px] w-[100%]">
      <img src="/ipx/product-translate-img-2.webp" class="w-[670px] h-[470px]" data-aos="fade-right"/>
      <article class="flex flex-col items-start" data-aos="fade-left">
        <h2 class="text-[#00bc53] text-[40px] font-semibold leading-[56px] mt-[12px] min-h-[56px] text-left">语言自动检测，实时翻译</h2>
        <p class="text-[#676c76] text-base font-medium leading-6 mb-2 pl-[14px] text-left w-[476px] bg-[url('/ipx/image.webp')] bg-[position:left_7px] bg-no-repeat bg-[length:10px]">支持全球200+语言互译，全面覆盖小语种；</p>
        <p class="text-[#676c76] text-base font-medium leading-6 mb-2 pl-[14px] text-left w-[476px] bg-[url('/ipx/image.webp')] bg-[position:left_7px] bg-no-repeat bg-[length:10px]">双向实时翻译，聊天消息全自动翻译，无需人工复制粘贴；</p>
        <p class="text-[#676c76] text-base font-medium leading-6 mb-2 pl-[14px] text-left w-[476px] bg-[url('/ipx/image.webp')] bg-[position:left_7px] bg-no-repeat bg-[length:10px]">提供谷歌、微软、DeepL等多条国际翻译线路；</p>
        <p class="text-[#676c76] text-base font-medium leading-6 mb-2 pl-[14px] text-left w-[476px] bg-[url('/ipx/image.webp')] bg-[position:left_7px] bg-no-repeat bg-[length:10px]">提供ChatGPT翻译，文字翻译更准确；</p>
      </article>
    </div>

    <div class="flex items-center justify-center gap-[40px] min-h-[630px] w-[100%]">
      <article class="flex flex-col items-start" data-aos="fade-left">
        <h2 class="text-[#00bc53] text-[40px] font-semibold leading-[56px] mt-[12px] min-h-[56px] text-left">多翻译线路对照</h2>
        <p class="text-[#676c76] text-base font-medium leading-6 mb-2 pl-[14px] text-left w-[476px] bg-[url('/ipx/image.webp')] bg-[position:left_7px] bg-no-repeat bg-[length:10px]">输入内容，所有翻译线路一起翻译，找到最合适业务的翻译线路；</p>
        <p class="text-[#676c76] text-base font-medium leading-6 mb-2 pl-[14px] text-left w-[476px] bg-[url('/ipx/image.webp')] bg-[position:left_7px] bg-no-repeat bg-[length:10px]">将翻译后的内容，按原文语种再次翻译，对比原文是否一致，找出更准确的译文；</p>
        <p class="text-[#676c76] text-base font-medium leading-6 mb-2 pl-[14px] text-left w-[476px] bg-[url('/ipx/image.webp')] bg-[position:left_7px] bg-no-repeat bg-[length:10px]">可单独作为精准翻译软件使用；</p>
      </article>
      <img src="/ipx/product-translate-img-3.webp" class="w-[670px] h-[470px]" data-aos="fade-right"/>
    </div>

    <StartUse />

    <Footer />

  </section>
</template>

<script setup>
import { NuxtLink } from '#components';
import Footer from "@/components/Footer.vue";
import StartUse from "@/components/StartUse.vue";</script>

<style scoped>
/* 这里写样式 */
</style>