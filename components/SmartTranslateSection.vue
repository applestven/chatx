<template>
  <div class="flex justify-center items-center flex-wrap">
    <div class="flex justify-between items-center w-[1200px] flex-wrap">
      <!-- 根据 direction 决定顺序 -->
      <template v-if="direction === 'left'">
        <!-- 图片区 -->
        <img :src="imageSrc" data-aos="fade-right" class="w-[670px] h-[470px]" />
        <!-- 内容区 -->
        <div class="h-[470px] w-[490px] text-left" data-aos="fade-left">
          <ContentBlock :content="content" />
        </div>
      </template>
      <template v-else>
        <!-- 内容区 -->
        <div class="h-[470px] w-[490px] text-left" data-aos="fade-left">
          <ContentBlock :content="content" />
        </div>
        <!-- 图片区 -->
        <img :src="imageSrc" data-aos="fade-right" class="w-[670px] h-[470px]" />
      </template>
    </div>
    <img v-if="lineImageSrc" :src="lineImageSrc" width="598" class="my-[8px]" />
  </div>
</template>

<script setup>
defineProps({
  direction: {
    type: String,
    default: 'right', // 内容在左，图片在右
    validator: (val) => ['left', 'right'].includes(val),
  },
  imageSrc: {
    type: String,
    required: true,
  },
  lineImageSrc: {
    type: String,
    default: '',
  },
  content: {
    type: Object,
    required: true,
    validator: (val) => {
      return val.title && Array.isArray(val.sections)
    },
  },
})
</script>


<!-- 使用示例： -->
<!-- <SmartTranslateSection
  direction="left"
  imageSrc="/ipx/produtctDesc/cx-index-d-1.webp"
  lineImageSrc="/ipx/line-left.webp"
  :content="{
    title: '实时翻译 · 智能多语⾔识别',
    sections: [
      {
        subtitle: '多线路，多语言',
        text: '集成超过10条顶级翻译线路，⽀持全球200+语⾔，⽆需切换，智能识别语⾔类型，确保全球⽤户⽆缝沟通，实现真正的全球互联。',
      },
      {
        subtitle: '发送接收实时翻译',
        text: '⽆论何时何地，⽀持多语⾔在线实时翻译，快速响应，⾼效沟通，打破语⾔障碍，让您的业务遍布全球。',
      },
    ],
  }"
/> -->
