<template>
  <section class="text-center flex flex-col items-center justify-center download-page-bg">

    <div class="flex justify-between min-h-[630px] w-[1200px]">
      <div class="pt-[190px] w-[490px]">
        <h1 class="text-[#22242c] text-[40px] font-semibold leading-[56px] min-h-[112px] text-left" data-aos="fade-up"><strong class="text-[#00bc53]">多平台聚合管理 · 轻松全球触达</strong></h1>
        <h3 class="text-[#22242c] text-[16px] font-semibold leading-[22px] text-left pt-[16px]" data-aos="fade-up">全⾯⽀持WhatsApp、Telegram、Line等多款全球主流社交软件，助您实现多渠道精准获客，轻松拓展全球市场。</h3>
        <div class="mt-[50px] relative">
          <div class="absolute left-0" data-aos="fade-up"><NuxtLink class="text-[#22242c] text-[14px] font-medium text-left" to="/download"><button class="min-h-[48px] w-[240px] bg-[#22242c] rounded text-white text-sm leading-5 px-5 py-2 transition-all duration-300 cursor-pointer">下载客户端</button></NuxtLink></div>
          <img src="/ipx/index-btn-icon-3.webp" widh="18" height="18" class="absolute right-[203px] top-0" data-aos="zoom-in-left"/>
        </div>
      </div>
      <div class="mt-[80px]" data-aos="fade-left">
        <img src="/ipx/product-platform-img-1.webp" widh="670" height="470" />
      </div>
    </div>

    <div class="flex items-center justify-center gap-[40px] min-h-[630px] w-[100%]">
      <img src="/ipx/product-platform-img-2.webp" class="w-[670px] h-[470px]" data-aos="fade-right"/>
      <article class="flex flex-col items-start" data-aos="fade-left">
        <h2 class="text-[#00bc53] text-[40px] font-semibold leading-[56px] mt-[12px] min-h-[56px] text-left">账号多开，同时工作</h2>
        <p class="text-[#676c76] text-base font-medium leading-6 mb-2 pl-[14px] text-left w-[476px] bg-[url('/ipx/image.webp')] bg-[position:left_7px] bg-no-repeat bg-[length:10px]">支持所有平台账号同时在线，能登录在一个窗口内并切换使用，帮你高效管理大量营销账号，低成本高效转化客户；</p>
      </article>
    </div>

    <div class="flex items-center justify-center gap-[40px] min-h-[630px] w-[100%]">
      <article class="flex flex-col items-start" data-aos="fade-left">
        <h2 class="text-[#00bc53] text-[40px] font-semibold leading-[56px] mt-[12px] min-h-[56px] text-left">账号配置指纹环境，自定义IP登录</h2>
        <p class="text-[#676c76] text-base font-medium leading-6 mb-2 pl-[14px] text-left w-[476px] bg-[url('/ipx/image.webp')] bg-[position:left_7px] bg-no-repeat bg-[length:10px]">担心使用多账号会导致封号？推荐先配置独立的账号指纹环境！您可以为每个平台的账号单独配置隔离、干净、私密的指纹环境，风险降低，安全升级！</p>
        <p class="text-[#676c76] text-base font-medium leading-6 mb-2 pl-[14px] text-left w-[476px] bg-[url('/ipx/image.webp')] bg-[position:left_7px] bg-no-repeat bg-[length:10px]">每一个通过ChatX系统登录的社交媒体账号，都可以设置独立的登录IP，彼此之间互不影响，保证各个账号安全；</p>
      </article>
      <img src="/ipx/product-platform-img-3.webp" class="w-[670px] h-[470px]" data-aos="fade-right"/>
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