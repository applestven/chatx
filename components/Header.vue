<template>
  <header class="w-full backdrop-blur-md bg-gray-200/50  px-6 fixed top-0 z-50 h-[55px] flex justify-center">
    <div class="flex items-center justify-between h-[55px] w-[1200px] m-auto">
      <div class="flex">
        <!-- Logo & Title -->
        <div class="flex items-center space-x-2 mr-6">
          <img src="/ipx/logo.png" alt="ChatX 出海翻译器" class="h-[36px] w-[110px]" />
        </div>

        <!-- 导航菜单  使用nuxt跳转-->
        <nav class="nav w-[468px] flex items-center justify-between font-small">
          <!-- <nuxt-link to="features" class="hover:text-blue-500 transition nav-list">产品功能</nuxt-link>
          <nuxt-link to="download" class="hover:text-blue-500 transition">下载中心</nuxt-link>
          <nuxt-link to="contact" class="hover:text-blue-500 transition">联系我们</nuxt-link>
          <nuxt-link to="pricing" class="hover:text-blue-500 transition">套餐价格</nuxt-link>
          <nuxt-link to="support" class="hover:text-blue-500 transition">客户支持</nuxt-link>
          <nuxt-link to="tutorials" class="hover:text-blue-500 transition">教程资源</nuxt-link> -->
          <!-- <a href="#features" class="hover:text-blue-500 transition nav-list">产品功能</a> -->
          <div class="relative group"> <!-- 移除了鼠标事件 -->
            <span class="flex items-center product-feature">
              <a href="#features" class="hover:text-blue-500 transition nav-list">产品功能</a>
            </span>
            <ul class="absolute mt-2 py-2 bg-white border rounded shadow dropdown-menu">
              <li><NuxtLink href="#" class="block px-4 py-2 hover:bg-[#F5FFF6]" to="/product/productTranslate">实时翻译 · 智能多语言识别</NuxtLink></li>
              <li><NuxtLink href="#" class="block px-4 py-2 hover:bg-[#F5FFF6]" to="/product/productPlatform">多平台多账号聚合管理</NuxtLink></li>
              <li><NuxtLink href="#" class="block px-4 py-2 hover:bg-[#F5FFF6]" to="/product/productCallback">快捷回复 · 一键触达</NuxtLink></li>
              <li><NuxtLink href="#" class="block px-4 py-2 hover:bg-[#F5FFF6]" to="/product/productAccount">智能指纹保护 · 安全护航</NuxtLink></li>
            </ul>
          </div>

          <NuxtLink href="#download" class="hover:text-blue-500 transition" to="/download">下载中心</NuxtLink>
          <NuxtLink href="#contact" class="hover:text-blue-500 transition" to="/contact">联系我们</NuxtLink>
          <NuxtLink href="#pricing" class="hover:text-blue-500 transition" to="/packageList">套餐价格</NuxtLink>
          <a href="#support" class="hover:text-blue-500 transition">客户支持</a>
          <a href="#tutorials" class="hover:text-blue-500 transition">教程资源</a>
        </nav>
      </div>

      <!-- 登录 & 语言 -->
      <div class="flex items-center justify-between text-sm w-[184px]">
        <a href="/login"
          class="px-[20px] py-[8px] bg-[#22242C] text-white rounded hover:bg-gray-600 transition leading-[20px]">登录</a>
        <a href="/trial" class="px-5 py-2 bg-[#00BC53] text-white rounded transition">免费试用</a>
      </div>

      <div class="px-[20px] py-[8px] ml-2 text-gray-700 flex items-center cursor-pointer gap-[10px]">
        简体中文
        <img src="/ipx/language-icon.png" class="w-5 h-5" alt="">
      </div>
    </div>
  </header>
</template>


<script setup>
import { NuxtLink } from '#components';


</script>

<style scoped>
/* 下拉菜单样式 */
.dropdown-menu {
  min-width: 225px;
  list-style-type: none;
  opacity: 0; /* 初始不可见 */
  visibility: hidden; /* 初始不可见 */
  transform: translateY(-10px); /* 初始位置偏上 */
  transition: 
    opacity 0.3s ease, 
    visibility 0.3s ease, 
    transform 0.3s ease; /* 平滑过渡效果 */
  border: none !important; /* 移除边框 */
  padding: 8px 0; /* 统一上下间距 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), /* 底部周围阴影 */
              0 0 8px rgba(0, 0, 0, 0.05); /* 柔和内阴影 */
  border-radius: 4px; /* 圆角 */
}

/* 菜单项样式 - 统一间距 */
.dropdown-menu li a {
  display: block;
  padding: 10px 16px; /* 上下10px，左右16px */
  transition: background-color 0.2s ease;
}

/* 菜单项悬停底色 */
.dropdown-menu li a:hover {
  background-color: #F5FFF6;
}

/* 当悬停在产品功能或下拉菜单上时显示 */
.group:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* 产品功能右边的三角形 */
.product-feature {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.product-feature::after {
  content: "";
  display: inline-block;
  margin-left: 6px; /* 文字与三角形之间的间距 */
  border: 4px solid transparent;
  border-top-color: #000; /* 默认三角形颜色 */
  transition: all 0.2s ease;
}

/* 悬停时三角形翻转和变色 */
.group:hover .product-feature::after {
  transform: rotate(180deg);
  border-top-color: #00BC53; /* 悬停时颜色 */
}

/* 确保下拉菜单在悬停时不会消失 */
.dropdown-menu:hover {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
</style>
