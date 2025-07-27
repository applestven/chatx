<template>
  <section class="flex flex-col justify-center items-center">
    <!-- title-banner -->
    <div class="bg-[#00bc53] rounded-[4px] mt-[60px] min-h-[184px] relative w-[1200px]">
      <img src="/ipx/download-title-img.webp" alt="" class="absolute left-[30px] top-[20px]">
      <img src="/ipx/download-title-img.webp" alt="" class="absolute left-[183px] top-[74px]">
      <img src="/ipx/download-title-img.webp" alt="" class="absolute left-[408px] top-[15px]">
      <img src="/ipx/download-title-img.webp" alt="" class="absolute left-[693px] top-[74px]">
      <img src="/ipx/download-title-img.webp" alt="" class="absolute left-[907px] top-[20px]">
      <img src="/ipx/download-title-img.webp" alt="" class="absolute left-[1060px] top-[74px]">
      <h1 class="text-[#fff] text-[40px] font-semibold left-[307px] leading-[56px] min-h-[56px] absolute text-left top-[70px]">Windows 下载安装常见问题汇总</h1>
    </div>

    <div class="bg-gradient-to-b from-[#eaf8ee] to-white rounded-lg box-border flex flex-wrap gap-6 mt-14 pl-6 pt-12 w-[1200px]">
      <h2 class="text-[#22242c] font-medium text-[24px] leading-[33px] mb-[16px] w-[100%] text-center">方法一：解决 Windows 已保护你的电脑</h2>
      <article class=""> 
        <img src="/ipx/download-windows-img-1-1.webp" />
        <p class="text-[20px] leading-[28px] mt-[14px] text-left w-[556px]">1.点击“更多信息”</p>
      </article>
      <article class=""> 
        <img src="/ipx/download-windows-img-1-2.webp" />
        <p class="text-[20px] leading-[28px] mt-[14px] text-left w-[556px]">1.点击“更多信息”</p>
      </article>
    </div>

    <div class="mb-[20px] mt-[48px] bg-gradient-to-b from-[#eaf8ee] to-white rounded-lg box-border flex flex-wrap gap-6 pl-6 pt-12 w-[1200px]">
      <h2 class="text-[#22242c] font-medium text-[24px] leading-[33px] mb-[16px] w-[100%] text-center">方法二：解决 Windows 已保护你的电脑</h2>
      <article class=""> 
        <img src="/ipx/download-windows-img-1-1.webp" />
        <p class="text-[20px] leading-[28px] mt-[14px] text-left w-[556px]">1.右键单击电脑桌面上的“此电脑”图标，点击“属性”，进入“设置”页面</p>
      </article>
      <article class=""> 
        <img src="/ipx/download-windows-img-1-1.webp" />
        <p class="text-[20px] leading-[28px] mt-[14px] text-left w-[556px]">2.点击“主页”进入“Windows设置”页面</p>
      </article>
      <article class=""> 
        <img src="/ipx/download-windows-img-1-1.webp" />
        <p class="text-[20px] leading-[28px] mt-[14px] text-left w-[556px]">3.点击“更新和安全”</p>
      </article>
      <article class=""> 
        <img src="/ipx/download-windows-img-1-1.webp" />
        <p class="text-[20px] leading-[28px] mt-[14px] text-left w-[556px]">4.进入“Windows安全中心”，点击“应用和浏览器控制”</p>
      </article>
      <article class=""> 
        <img src="/ipx/download-windows-img-1-1.webp" />
        <p class="text-[20px] leading-[28px] mt-[14px] text-left w-[556px]">5.将3个“SmartScreen”全部设置为关闭状态</p>
      </article>
    </div>

    <StartUse />

    <Footer />
  </section>
</template>

<script setup>
import Footer from "@/components/Footer.vue";
import StartUse from "@/components/StartUse.vue";
</script>

<style scoped>
/* 这里写样式 */
</style>