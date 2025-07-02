<template>
  <header class="h-[55px] w-full backdrop-blur-md bg-gray-200/50 flex items-center justify-between px-6 fixed top-0 z-50">
    <!-- Logo & Title -->
    <div class="flex items-center space-x-2">
      <!-- <img src="/logo.png" alt="ChatX Logo" class="h-6 w-6" /> -->
      <span class="font-bold text-gray-800 text-lg">ChatX 出海翻译器</span>
      
    </div>

    <!-- 导航菜单 -->
    <nav class="hidden md:flex items-center space-x-6 text-gray-700 text-sm font-medium">
      <a href="#features" class="hover:text-blue-500 transition">产品功能</a>
      <a href="#download" class="hover:text-blue-500 transition">下载中心</a>
      <a href="#contact" class="hover:text-blue-500 transition">联系我们</a>
      <a href="#pricing" class="hover:text-blue-500 transition">套餐价格</a>
      <a href="#support" class="hover:text-blue-500 transition">客户支持</a>
      <a href="#tutorials" class="hover:text-blue-500 transition">教程资源</a>
    </nav>

    <!-- 登录 & 语言 -->
    <div class="flex items-center space-x-4 text-sm">
      <a href="/login" class="text-gray-700 hover:text-blue-500 transition">登录</a>
      <a href="/trial" class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">免费试用</a>
      <div class="ml-2 text-gray-700">简体中文</div>
    </div>
  </header>
</template>
