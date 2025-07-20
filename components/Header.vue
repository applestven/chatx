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
          <nuxt-link to="features" class="hover:text-blue-500 transition nav-list">产品功能</nuxt-link>
          <nuxt-link to="download" class="hover:text-blue-500 transition">下载中心</nuxt-link>
          <nuxt-link to="contact" class="hover:text-blue-500 transition">联系我们</nuxt-link>
          <nuxt-link to="pricing" class="hover:text-blue-500 transition">套餐价格</nuxt-link>
          <nuxt-link to="support" class="hover:text-blue-500 transition">客户支持</nuxt-link>
          <nuxt-link to="tutorials" class="hover:text-blue-500 transition">教程资源</nuxt-link>
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
