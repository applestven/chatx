<template>
  <header class="w-full backdrop-blur-md bg-gray-200/50 fixed top-0 z-50 min-h-[60px] flex justify-center md:min-w-[1200px]">
    <div class="flex items-center justify-between h-[60px] w-[1200px]">
      <div class="flex justify-start items-center">
        <!-- Logo & Title -->
        <div class="flex items-center space-x-2 mr-6">
          <img src="/ipx/logo.png" alt="ChatX 出海翻译器" class="h-[36px] w-[110px] cursor-pointer" @click="goHome()"  />
        </div>

        <!-- 导航菜单  使用nuxt跳转-->
        <nav class="nav w-[469px] flex items-center justify-between font-small hidden md:flex">
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

      <div class="w-[320px] flex items-center max-md:hidden">

        <!-- 登录 & 语言 -->
        <!-- <div class="flex items-center justify-between text-sm w-[184px] hidden md:flex">
          <a href="/login"
            class="px-[20px] py-[8px] bg-[#22242C] text-white rounded hover:bg-gray-600 transition leading-[20px]">登录</a>
          <a href="/trial" class="px-5 py-2 bg-[#00BC53] text-white rounded transition">免费试用</a>
        </div> -->
        <button class="w-[68px] bg-[#22242c] rounded-[4px] text-white text-[14px] leading-[20px] mr-[20px] px-[20px] py-[8px] transition-all duration-300 max-md:hidden">登录</button>
        <button class="w-[96px] bg-[#00bc53] rounded-[4px] text-white text-[14px] leading-[20px] px-[20px] py-[8px] transition-all duration-300 max-md:hidden">免费试用</button>

        <!-- <div class="px-[20px] py-[8px] ml-2 text-gray-700 flex items-center cursor-pointer gap-[10px] hidden md:flex">
            简体中文
          <img src="/ipx/language-icon.png" class="w-5 h-5" alt="">
        </div> -->

        <div class="inline-block mr-0">
          <p class="flex items-center text-[14px] gap-[10px] justify-start w-[132px] px-[16px] py-[8px] text-left">
              简体中文
            <img src="/ipx/language-icon.png" class="w-5 h-5" alt="">
          </p>
        </div>
      </div>
      
      <!-- 汉堡菜单按钮 - 移动端显示 -->
      <button 
        class="md:hidden flex flex-col justify-center items-center w-10 h-10"
        @click="toggleMobileMenu"
      >
        <span class="block w-6 h-0.5 bg-black mb-1 transition-transform duration-300 ease-in-out" 
              :class="{'rotate-45 translate-y-1.5': isMobileMenuOpen}"></span>
        <span class="block w-6 h-0.5 bg-black mb-1 transition-opacity duration-300 ease-in-out" 
              :class="{'opacity-0': isMobileMenuOpen}"></span>
        <span class="block w-6 h-0.5 bg-black transition-transform duration-300 ease-in-out" 
              :class="{'-rotate-45 -translate-y-1.5': isMobileMenuOpen}"></span>
      </button>

      <!-- 移动端菜单遮罩 -->
      <div 
        v-if="isMobileMenuOpen" 
        class="fixed inset-0 bg-transparent z-40 md:hidden transition-opacity duration-300"
        @click="closeMobileMenu"
      ></div>
      
      <!-- 侧边弹出菜单 -->
      <div 
        v-if="isMobileMenuOpen"
        class="fixed top-0 left-0 h-screen w-2/3 bg-white z-50 md:hidden shadow-lg transition-transform duration-300 ease-in-out"
        :class="{'-translate-x-full': !isMobileMenuOpen, 'translate-x-0': isMobileMenuOpen}"
      >
        <nav class="flex flex-col py-4 h-full">
          <div class="relative group">
            <div class="flex items-center space-x-2 ml-4 py-5">
              <img src="/ipx/logo.png" alt="ChatX 出海翻译器" class="h-[36px] w-[110px] cursor-pointer" @click="goHome()"  />
            </div>
            <div 
              class="flex justify-between items-center px-6 py-3"
              @click="toggleProductMenu"
            >
              <NuxtLink 
                href="#features" 
                class="hover:text-blue-500 transition nav-list"
                @click="closeMobileMenu"
              >
                产品功能
              </NuxtLink>
              <span 
                class="transform transition-transform"
                :class="{'rotate-90': isProductMenuOpen}"
              >
                >
              </span>
            </div>
            
            <ul 
              v-show="isProductMenuOpen" 
              class="bg-gray-50 pl-8 pr-4 py-2"
            >
              <li>
                <NuxtLink 
                  href="#" 
                  class="block py-2 hover:text-blue-500" 
                  to="/product/productTranslate"
                  @click="closeMobileMenu"
                >
                  实时翻译 · 智能多语言识别
                </NuxtLink>
              </li>
              <li>
                <NuxtLink 
                  href="#" 
                  class="block py-2 hover:text-blue-500" 
                  to="/product/productPlatform"
                  @click="closeMobileMenu"
                >
                  多平台多账号聚合管理
                </NuxtLink>
              </li>
              <li>
                <NuxtLink 
                  href="#" 
                  class="block py-2 hover:text-blue-500" 
                  to="/product/productCallback"
                  @click="closeMobileMenu"
                >
                  快捷回复 · 一键触达
                </NuxtLink>
              </li>
              <li>
                <NuxtLink 
                  href="#" 
                  class="block py-2 hover:text-blue-500" 
                  to="/product/productAccount"
                  @click="closeMobileMenu"
                >
                  智能指纹保护 · 安全护航
                </NuxtLink>
              </li>
            </ul>
          </div>

          <NuxtLink 
            href="#download" 
            class="px-6 py-3 hover:text-blue-500 transition flex justify-between items-center" 
            to="/download"
            @click="closeMobileMenu"
          >
            <span>下载中心</span>
            <span>&gt;</span>
          </NuxtLink>
          <NuxtLink 
            href="#contact" 
            class="px-6 py-3 hover:text-blue-500 transition flex justify-between items-center" 
            to="/contact"
            @click="closeMobileMenu"
          >
            <span>联系我们</span>
            <span>&gt;</span>
          </NuxtLink>
          <NuxtLink 
            href="#pricing" 
            class="px-6 py-3 hover:text-blue-500 transition flex justify-between items-center" 
            to="/packageList"
            @click="closeMobileMenu"
          >
            <span>套餐价格</span>
            <span>&gt;</span>
          </NuxtLink>
          <a 
            href="#support" 
            class="px-6 py-3 hover:text-blue-500 transition flex justify-between items-center"
            @click="closeMobileMenu"
          >
            <span>客户支持</span>
            <span>&gt;</span>
          </a>
          <a 
            href="#tutorials" 
            class="px-6 py-3 hover:text-blue-500 transition flex justify-between items-center"
            @click="closeMobileMenu"
          >
            <span>教程资源</span>
            <span>&gt;</span>
          </a>
          
        </nav>
      </div>
    </div>
  </header>
</template>


<script setup>
import { NuxtLink } from '#components';
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);
const isProductMenuOpen = ref(false);

const goHome =()=> {
  // nuxt跳转主页
  navigateTo('/')
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  if (!isMobileMenuOpen.value) {
    isProductMenuOpen.value = false;
  }
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  isProductMenuOpen.value = false;
};

const toggleProductMenu = (e) => {
  // 防止链接点击时触发
  if (e.target.tagName !== 'A') {
    isProductMenuOpen.value = !isProductMenuOpen.value;
  }
};
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