<template>
  <section class="banner-bar min-h-[200vh]">
    <div class="text-center flex flex-col items-center justify-center">
      <h1
        class="mt-[100px] text-[40px] w-[570px] text-[#22242C] font-medium z-5 text-center"
        data-aos="fade-up"
      >
        <strong class="text-[#00BC53] z-5">ChatX</strong>
        全球化翻译与智能营销的终极解决方案
      </h1>

      <!-- 应用介绍 -->
      <h3 class="mt-[16px] w-[1024px] text-[#676C76]" data-aos="fade-up">
        致⼒为企业提供跨境翻译与私域营销的全⾯解决⽅案。覆盖WhatsApp、Telegram、Facebook等海外主流平台，⽀持⼀站式多账号管理和⾼效便捷的粉丝运营。同时，ChatX内置的SCRM客户管理功能与AI技术深度融合，显著提升企业沟通效率，推动可持续增⻓。通过精准的跨境翻译与营销策略，帮助企业拓展更有价值的全球客户，实现⽆缝的出海全流程营销。
      </h3>

      <!-- 下载按钮 -->
      <div class="flex gap-[16px]">
        <button
          class="cx-btn w-[240px] h-[48px] mt-[32px]"
          data-aos="fade-up"
          title="下载客户端"
          id="indexDownload"
        >
          下载客户端
        </button>
        <img
          data-aos="zoom-in-left"
          src="/ipx/index-btn-icon.webp"
          alt="二维码"
          class="w-[36px] h-[36px] mt-[32px]"
        />
      </div>

      <!-- // 应用界面展示 -->
      <div class="" data-aos="fade-up" data-aos-delay="600">
        <img
          src="/ipx/index-banner-bottom.webp"
          width="1200"
          height="578"
          class="mt-[68px]"
        />
      </div>

      <!-- // 统计数据展示 -->
      <section
        class="h-[376px] w-[1200px] flex justify-between gap-[18px] items-center"
      >
        <article
          v-for="item in dataStatistics"
          :key="item.id"
          class="flex flex-col justify-center flex-1 h-[188px] bg-gradient-to-b from-[#d9ffd7] to-white border-[1px] border-gray-200 rounded-[8px]"
        >
          <span class="text-[#00BC53] text-[50px] font-medium">
            <AnimatedNumber
              :target="item.number"
              :duration="1000"
              :suffix="item.suffix"
            />
          </span>
          <span class="text-[#676c76] text-[24px]">{{ item.description }}</span>
        </article>
      </section>

      <!-- 这些是不是你的问题 -->
      <h2
        class="text-[32px] h-[48px] flex items-center justify-center font-medium"
        data-aos="fade-up"
      >
        这些是不是您工作中遇到过的问题
      </h2>

      <section class="cx-index-q-bar">
        <div class="cx-index-q">
          <article
            class="cx-index-q-list"
            data-aos="fade-up"
            v-for="(item, index) in listProblems"
            :key="index"
          >
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
          <ScrollList
            :items="brandList"
            direction="left"
            :speed="2.5"
            class=""
          >
            <template #default="{ item }">
              <div class="mx- bg-[#FAFAFA] text-white rounded min-h-[56px] w-[180px] flex items-center gap-2 justify-center"> 
                <img :src="item.icon" :alt="item.text" class="w-[32px] h-[32px]" />
                <p class="text-gray-700 font-[600] text-[16px]"> {{ item.text }} </p>
              </div>
            </template>
          </ScrollList>
         <ScrollList
            :items="brandList"
            direction="right"
            :speed="2.5"
            class=""
          >
            <template #default="{ item }">
              <div class="mx- bg-[#FAFAFA] text-white rounded min-h-[56px] w-[180px] flex items-center gap-2 justify-center"> 
                <img :src="item.icon" :alt="item.text" class="w-[32px] h-[32px]" />
                <p class="text-gray-700 font-[600] text-[16px]"> {{ item.text }} </p>
              </div>
            </template>
          </ScrollList>
        </article>
      </section>
      <section class="h-[100px]"></section>
    </div>
  </section>
</template>

<script setup>
import AnimatedNumber from "../components/AnimatedNumber.vue";
import ScrollList from "../components/ScrollList.vue";
import { dataStatistics, listProblems,brandList } from "../assets/mockData/index.js";
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
