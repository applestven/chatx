<template>
  <section class="banner-bar min-h-[200vh]">
    <div class="text-center flex flex-col items-center justify-center">
      <h1 class="mt-[100px] text-[40px] w-[570px] text-[#22242C] font-medium z-5 text-center" data-aos="fade-up">
        <strong class="text-[#00BC53] z-5">ChatX</strong>
        全球化翻译与智能营销的终极解决方案
      </h1>

      <!-- 应用介绍 -->
      <h3 class="mt-[16px] w-[1024px] text-[#676C76]" data-aos="fade-up">
        致⼒为企业提供跨境翻译与私域营销的全⾯解决⽅案。覆盖WhatsApp、Telegram、Facebook等海外主流平台，⽀持⼀站式多账号管理和⾼效便捷的粉丝运营。同时，ChatX内置的SCRM客户管理功能与AI技术深度融合，显著提升企业沟通效率，推动可持续增⻓。通过精准的跨境翻译与营销策略，帮助企业拓展更有价值的全球客户，实现⽆缝的出海全流程营销。
      </h3>

      <!-- 下载按钮 -->
      <div class="flex gap-[16px]">
        <button class="cx-btn w-[240px] h-[48px] mt-[32px]" data-aos="fade-up" title="下载客户端" id="indexDownload">
          下载客户端
        </button>
        <img data-aos="zoom-in-left" src="/ipx/index-btn-icon.webp" alt="二维码" class="w-[36px] h-[36px] mt-[32px]" />
      </div>

      <!-- // 应用界面展示 -->
      <div class="" data-aos="fade-up" data-aos-delay="600">
        <img src="/ipx/index-banner-bottom.webp" width="1200" height="578" class="mt-[68px]" />
      </div>

      <!-- // 统计数据展示 -->
      <section class="h-[376px] w-[1200px] flex justify-between gap-[18px] items-center">
        <article v-for="item in dataStatistics" :key="item.id"
          class="flex flex-col justify-center flex-1 h-[188px] bg-gradient-to-b from-[#d9ffd7] to-white border-[1px] border-gray-200 rounded-[8px]">
          <span class="text-[#00BC53] text-[50px] font-medium">
            <AnimatedNumber :target="item.number" :duration="1000" :suffix="item.suffix" />
          </span>
          <span class="text-[#676c76] text-[24px]">{{ item.description }}</span>
        </article>
      </section>

      <!-- 这些是不是你的问题 -->
      <h2 class="text-[32px] h-[48px] flex items-center justify-center font-medium" data-aos="fade-up">
        这些是不是您工作中遇到过的问题
      </h2>

      <section class="cx-index-q-bar">
        <div class="cx-index-q">
          <article class="cx-index-q-list" data-aos="fade-up" v-for="(item, index) in listProblems" :key="index">
            <h3>{{ item.question }}</h3>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </section>

      <!-- 覆盖社交 -->
      <section class="w-[1200px] pb-[162px]">
        <h2 class="text-[32px] font-[600]">我们已有的和陆续涵盖的社交平台</h2>
        <article class="cx-index-app">
          <!-- <h2>向左循环移动</h2> -->
          <ScrollList :items="brandList" direction="left" :speed="2.5" class="">
            <template #default="{ item }">
              <div
                class="mx- bg-[#FAFAFA] text-white rounded min-h-[56px] w-[180px] flex items-center gap-2 justify-center">
                <img :src="item.icon" :alt="item.text" class="w-[32px] h-[32px]" />
                <p class="text-gray-700 font-[600] text-[16px]"> {{ item.text }} </p>
              </div>
            </template>
          </ScrollList>
          <ScrollList :items="brandList" direction="right" :speed="2.5" class="">
            <template #default="{ item }">
              <div
                class="mx- bg-[#FAFAFA] text-white rounded min-h-[56px] w-[180px] flex items-center gap-2 justify-center">
                <img :src="item.icon" :alt="item.text" class="w-[32px] h-[32px]" />
                <p class="text-gray-700 font-[600] text-[16px]"> {{ item.text }} </p>
              </div>
            </template>
          </ScrollList>
        </article>
      </section>

      <!-- 产品介绍 -->
      <section class="w-full bg-[#E8FCE9] flex justify-center items-center flex-wrap pt-[130px]">
        <SmartTranslateSection v-for="item in funcSectionList" :key="item.content.title" :direction="item.direction"
          :imageSrc="item.imageSrc" :lineImageSrc="item.lineImageSrc" :content="item.content" />
      </section>
      <img src="/ipx/line-right.webp" width="598" class="my-[8px]" />

      <!--  这是我们的努力的回馈  -->
      <section class="w-[1200px] flex justify-between items-center flex-col flex-wrap mt-[140px]">
        <h2 class="text-[32px] font-[600]">这是我们的努力的回馈</h2>
        <h3 class="mt-[12px]">ChatX 服务于全球的跨国创业者们，助您精准表达，无缝沟通</h3>

        <div class="cx-index-use-box flex justify-between items-center">
          <article class="cx-index-use-list px-[20px]" v-for="user in userFeedbackList" :key="user.id"
            data-aos="fade-up">
            <img :src="user.avatar" width="100" height="100" class="mt-[54px]" />
            <h4 class="font-[600]">{{ user.name }}</h4>
            <h3 class="text-[16px]">{{ user.title }}</h3>
            <p class="mt-[24px]">{{ user.description }}</p>
          </article>
        </div>
      </section>

      <!-- 开始使用 -->
      <div class="cx-index-end mt-[80px]">
        <div class="mt-[54px] flex-1">
          <h1 class="text-[#00BC53] text-[36px] font-medium" data-aos="fade-up">ChatX 服务于全球的跨国创业者们，助您精准表达，无缝沟通。</h1>
          <p class="text-[16px] mt-[16px]" data-aos="fade-up">无论您对于ChatX的产品定价、方案定制或其他任何方面的问题 都可以随时联系我们</p>
        </div>
        <div class="flex-1 gap-[16px] relative mr-[20px]" data-aos="fade-up"> 
          <div class="flex items-center justify-center absolute right-0 bottom-[48px]">
            <img data-aos="zoom-in-left" src="/ipx/index-btn-icon-2.webp" alt="ChatX出海翻译器,ChatX-banner" class="w-[48px] h-[48px] mt-[32px] mr-[24px] " />
            <button class="cx-btn w-[240px] h-[48px] min-h-[64px] mt-[32px]" data-aos="fade-up" title="下载客户端" id="indexDownload">
              开始使用
            </button>
          </div>
        </div>
      </div>

      <!-- 联系我们 -->
      <div class="cx-footer-bar pt-[120px]">
        <footer>
          <div class="">
            <router-link to="/" class="text-[#00BC53] text-[16px] font-medium">
              <img src="/ipx/logo2.webp" alt="ChatX Logo" class="w-[72px] h-[72px] inline-block mr-[8px]" />
            </router-link>
            <router-link to="/" class="text-[#00BC53] text-[16px] font-medium">
              <img src="/ipx/logo3.webp" alt="ChatX Logo" class="w-[126px] ] inline-block mr-[8px]" />
            </router-link>
          </div>
        </footer>
      </div>

    </div>
  </section>
</template>

<script setup>
import AnimatedNumber from "../components/AnimatedNumber.vue";
import ScrollList from "../components/ScrollList.vue";
import { dataStatistics, listProblems, brandList, funcSectionList, userFeedbackList } from "../assets/mockData/index.js";




onMounted(() => {
  // 确保 AOS 被初始化（在浏览器环境中）
  if (process.client && window.AOS) {
    window.AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }
});
</script>
