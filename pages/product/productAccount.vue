<template>
  <section class="text-center flex flex-col items-center justify-center download-page-bg">

    <div class="flex justify-between min-h-[630px] w-[1200px]">
      <div class="pt-[190px] w-[490px]">
        <h1 class="text-[#22242c] text-[40px] font-semibold leading-[56px] min-h-[112px] text-left" data-aos="fade-up"><strong class="text-primary-light">账号配置指纹环境，自定义IP登录</strong></h1>
        <h3 class="text-[#22242c] text-[16px] font-semibold leading-[22px] text-left pt-[16px]" data-aos="fade-up">担心使用多账号会导致封号？推荐先配置独立的账号指纹环境！您可以为每个平台的账号单独配置隔离、干净、私密的指纹环境，风险降低，安全升级！</h3>
        <div class="mt-[50px] relative">
          <div class="absolute left-0" data-aos="fade-up"><NuxtLink class="text-[#22242c] text-[14px] font-medium text-left" to="/download"><button class="min-h-[48px] w-[240px] bg-[#22242c] rounded text-white text-sm leading-5 px-5 py-2 transition-all duration-300 cursor-pointer">下载客户端</button></NuxtLink></div>
          <img src="/ipx/index-btn-icon-3.webp" widh="18" height="18" class="absolute right-[203px] top-0" data-aos="zoom-in-left"/>
        </div>
      </div>
      <div class="mt-[80px]" data-aos="fade-left">
        <img src="/ipx/product-account-img-1.webp" widh="670" height="470" />
      </div>
    </div>

    <div class="flex items-center justify-center gap-[40px] min-h-[630px] w-[100%]">
      <img src="/ipx/product-account-img-2.webp" class="w-[670px] h-[470px]" data-aos="fade-right"/>
      <article class="flex flex-col items-start" data-aos="fade-left">
        <h2 class="text-primary-light text-[40px] font-semibold leading-[56px] mt-[12px] min-h-[56px] text-left">智能指纹保护 · 安全护航您的账号</h2>
        <p class="text-[#676c76] text-base font-medium leading-6 mb-2 pl-[14px] text-left w-[476px] bg-[url('/ipx/image.webp')] bg-[position:left_7px] bg-no-repeat bg-[length:10px]">每一个通过ChatX系统登录的社交媒体账号，都可以设置独立的登录IP，彼此之间互不影响，保证各个账号安全；</p>
        <p class="text-[#676c76] text-base font-medium leading-6 mb-2 pl-[14px] text-left w-[476px] bg-[url('/ipx/image.webp')] bg-[position:left_7px] bg-no-repeat bg-[length:10px]">智能指纹模拟 · 隐私保护升级</p>
        <p class="text-[#676c76] text-base font-medium leading-6 mb-2 pl-[14px] text-left w-[476px] bg-[url('/ipx/image.webp')] bg-[position:left_7px] bg-no-repeat bg-[length:10px]">多环境隔离 · 防⽌封号⻛险</p>
      </article>
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