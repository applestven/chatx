<template>
  <section class="flex flex-col items-center bg-position-top bg-no-repeat bg-size-[100% 630px] pt-[60px] w-[100%] download-page-bg">

    <div class="min-h-[630px] w-[1200px] flex flex-col items-center">
      <h1 class="text-[#00bc53] text-[40px] font-semibold leading-[56px] mt-[100px] text-left">欢迎 联系我们</h1>
      <h3 class="text-[#22242c] text-[16px] font-semibold leading-[22px] pt-[16px] text-left">我们致力于为您提供个性化的服务。任何问题请联系</h3>

      <div class="flex items-center justify-center gap-[40px] min-h-[400px] pt-[80px] w-[1200px]">
        <div class="flex flex-col gap-[30px] min-h-[400px]">
          <article class="min-h-[182px] w-[580px] bg-white border border-gray-100 rounded-lg shadow-custom p-8 box-border relative">
            <h4 class="text-[#22242c] text-[20px] font-semibold leading-[28px] text-left">在线客服</h4>
            <p class="text-[#747983] text-[16px] font-normal leading-[22px] mt-[12px] text-left">为您提供及时的帮助、反馈以及业务咨询</p>
            <a class="text-[#00bc53] cursor-pointer block text-[20px] font-medium leading-[28px] mt-[26px] text-left">@ChatX788</a>
            <img src="/ipx/contact-us-arr.webp" class="absolute bottom-[32px] right-[32px]"/>
          </article>
          <article class="min-h-[182px] w-[580px] bg-white border border-gray-100 rounded-lg shadow-custom p-8 box-border relative">
            <h4 class="text-[#22242c] text-[20px] font-semibold leading-[28px] text-left">官方频道</h4>
            <p class="text-[#747983] text-[16px] font-normal leading-[22px] mt-[12px] text-left">关注我们 了解最近动态</p>
            <a class="text-[#00bc53] cursor-pointer block text-[20px] font-medium leading-[28px] mt-[26px] text-left">@Chatx_news</a>
            <img src="/ipx/contact-us-arr.webp" class="absolute bottom-[32px] right-[32px]"/>
          </article>
        </div>
        <div>
          <div class="min-h-[390px] w-[580px] bg-white border border-gray-100 rounded-lg shadow-custom p-8 box-border relative">
            <h4 class="text-[#22242c] text-[20px] font-semibold leading-[28px] text-left">官方邮箱</h4>
            <p class="text-[#747983] text-[16px] font-normal leading-[22px] mt-[12px] text-left">24小时工作人员会与您联系</p>
            <div class="bg-[url('/ipx/contact-us-email-bg.webp')] bg-[50%] bg-no-repeat bg-size-[100%] box-border mt-[16px] min-h-[252px] p-[24px] w-[100%]">
              <a class="text-[#fff] text-[28px] font-semibold leading-[40px] text-left">329426387@qq.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="mt-[120px]">
      <h2 class="text-[#22242c] text-[32px] font-semibold leading-[45px] mb-[52px] text-center w-[100%]">ChatX 常见问题</h2>
      <div class="border-2 border-gray-100 rounded-lg box-border mb-5 px-8 transition-height duration-300 w-[1200px]" :style="{height: openState.panel1 ? 'auto' : '98px'}">
        <div class="flex items-center justify-between text-left h-[97px]" @click='togglePanel("panel1")'>
          <h2 class="text-[#22242c] cursor-pointer text-[24px] font-medium leading-[33px] transition-colors duration-300" :class="openState.panel1 ? 'text-emerald-500' : 'text-[#22242c]'">ChatX 能帮助你做以下这些</h2>
          <img src="/ipx/cx-collapse-arr.webp" width="24" height="24" class="transition-transform duration-300 rotate-0" :class="{'rotate-180': openState.panel1}" />
        </div>
        <div v-show="openState.panel1" class="pb-4" :class="{'opacity-100': openState.panel1, 'opacity-0': !openState.panel1}">
          <h3 title="ChatX是一款功能丰富的跨境出海SCRM系统，帮助用户打破语言壁垒，实现全球范围内的无障碍交流。它能帮你解决以下问题" class="text-[#747983] text-[16px] font-normal leading-[24px] text-left">ChatX是一款功能丰富的跨境出海SCRM系统，帮助用户打破语言壁垒，实现全球范围内的无障碍交流。它能帮你解决以下问题</h3>
          <p class="text-[#747983] text-[16px] font-normal leading-[24px] mt-[12px] mb-0">1.提供一体化管理平台，能够实时管理团队成员，监控数据等管理工具；<br />
            1.提供一体化管理平台，能够实时管理团队成员，监控数据等管理工具；<br />
            2.高效运营平台，实现粉丝客户精细化，帮助推广拓客，直连客户；<br />
            3.提供智能营销工具，实现快速成交，精准成交，提升业绩增长；<br />
            4.实时翻译，提升10+翻译线路，200+语言翻译，让沟通变得更简单；<br />
            5.多平台多账号同时管理，提升工作效率，触达全球市场。
          </p>
        </div>
      </div>
      <div class="border-2 border-gray-100 rounded-lg box-border mb-5 px-8 transition-height duration-300 w-[1200px]" :style="{height: openState.panel2 ? 'auto' : '98px'}">
        <div class="flex items-center justify-between text-left h-[97px]" @click='togglePanel("panel2")'>
          <h2 class="text-[#22242c] cursor-pointer text-[24px] font-medium leading-[33px] transition-colors duration-300" :class="openState.panel2 ? 'text-emerald-500' : 'text-[#22242c]'">通过 ChatX 赚钱 零门槛即可成为ChatX的推荐官</h2>
          <img src="/ipx/cx-collapse-arr.webp" width="24" height="24" class="transition-transform duration-300 rotate-0" :class="{'rotate-180': openState.panel2}" />
        </div>
        <div v-show="openState.panel2" class="pb-4" :class="{'opacity-100': openState.panel2, 'opacity-0': !openState.panel2}">
          <h3 title="ChatX是一款功能丰富的跨境出海SCRM系统，帮助用户打破语言壁垒，实现全球范围内的无障碍交流。它能帮你解决以下问题" class="text-[#747983] text-[16px] font-normal leading-[24px] text-left">ChatX是一款功能丰富的跨境出海SCRM系统，帮助用户打破语言壁垒，实现全球范围内的无障碍交流。它能帮你解决以下问题</h3>
          <p class="text-[#747983] text-[16px] font-normal leading-[24px] mt-[12px] mb-0">1.提供一体化管理平台，能够实时管理团队成员，监控数据等管理工具；<br />
            1.注册ChatX的会员；<br />
            2.分享邀请链接，邀请好友、新客户注册ChatX会员；<br />
            3.付费成功即可获得奖励；
          </p>
        </div>
      </div>
    </div>

    <StartUse />
    <Footer />
  </section>
</template>

<script setup>
import {reactive} from 'vue';
import Footer from '@/components/Footer.vue';
import StartUse from '@/components/StartUse.vue';

const openState = reactive({
  panel1: false,
  panel2: false,
});
const togglePanel = (panelName) => {
  openState[panelName] = !openState[panelName];
};
</script>

<style scoped>

</style>