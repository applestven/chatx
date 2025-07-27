<template>
  <div class="pt-[100px] pb-[60px]">
    <div class="container mx-auto px-4">
      <!-- 页面标题 -->
      <div class="text-center mb-[60px]">
        <h1 class="text-3xl md:text-4xl font-bold text-[#22242C] mb-4">
          选择适合您团队套餐
        </h1>
        <h3 class="text-lg text-[#676c76] max-w-2xl mx-auto">
          不同版本会员 享受权益不同，充值金额达到门槛后，自动解锁该会员权益
        </h3>
      </div>

      <!-- 套餐选项 -->
      <div class="flex flex-col lg:flex-row gap-6 mb-16">
        <!-- 免费版 -->
        <div class="flex-1 bg-white rounded-lg shadow-[0_10px_15px_#6b6b6b0a,0_5px_20px_#e3e3e30d] border border-[#f3f3f3] p-6">
          <div class="mb-6">
            <h4 class="text-xl font-semibold text-[#22242c] mb-2">
              免费版 <span class="text-[#00BC53] text-sm font-normal">免费体验</span>
            </h4>
            <div class="flex items-end mb-4">
              <span class="text-3xl font-bold text-[#22242c]">$0</span>
              <span class="text-[#676c76] ml-2">/ 5000字符</span>
            </div>
            <p class="text-[#676c76] text-sm mb-6">按次数计算</p>
            <button class="w-full bg-[#22242c] text-white py-3 rounded-lg hover:bg-gray-700 transition mb-4">
              免费试用
            </button>
            <p class="text-[#676c76] text-sm">免费体验</p>
          </div>
          
          <ul class="space-y-3">
            <li class="flex items-center">
              <svg class="w-5 h-5 text-[#00BC53] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-[#22242c]">每天免费翻译5000字符</span>
            </li>
          </ul>
        </div>

        <!-- 字符版 -->
        <div class="flex-1 bg-white rounded-lg shadow-[0_10px_15px_#6b6b6b0a,0_5px_20px_#e3e3e30d] border border-[#f3f3f3] p-6">
          <div class="mb-6">
            <h4 class="text-xl font-semibold text-[#22242c] mb-2">字符版</h4>
            <div class="flex items-end mb-4">
              <span class="text-3xl font-bold text-[#22242c]">$28</span>
              <span class="text-[#676c76] ml-2">/ 150W字符</span>
            </div>
            <p class="text-[#676c76] text-sm mb-6">按字符数计算</p>
            <button class="w-full bg-[#00BC53] text-white py-3 rounded-lg hover:bg-[#009d45] transition mb-4">
              充值
            </button>
            <p class="text-[#676c76] text-sm">适用于个人出海</p>
          </div>
          
          <ul class="space-y-3">
            <li class="flex items-center">
              <svg class="w-5 h-5 text-[#00BC53] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-[#22242c]">不限使用时长</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-[#00BC53] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-[#22242c]">不限子账号</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-[#00BC53] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-[#22242c]">每个子账号端口数量不限</span>
            </li>
          </ul>
        </div>

        <!-- 标准版 -->
        <div class="flex-1 bg-gradient-to-b from-[#edf9fe] to-[#f4fbfe] rounded-lg shadow-[0_10px_15px_#6b6b6b0a,0_5px_20px_#e3e3e30d] border border-[#f3f3f3] p-6 relative border-2 border-[#00BC53]">
          <div class="absolute top-0 right-0 bg-[#00BC53] text-white text-xs font-bold px-4 py-1 rounded-bl-lg rounded-tr-lg">
            推荐
          </div>
          <div class="mb-6">
            <h4 class="text-xl font-semibold text-[#22242c] mb-2">标准版</h4>
            <div class="flex items-end mb-4">
              <span class="text-3xl font-bold text-[#22242c]">$36</span>
              <span class="text-[#676c76] ml-2">/ 4个端口/月</span>
            </div>
            <p class="text-[#676c76] text-sm mb-6">按月计算</p>
            <button class="w-full bg-[#00BC53] text-white py-3 rounded-lg hover:bg-[#009d45] transition mb-4">
              充值
            </button>
            <p class="text-[#676c76] text-sm">适用于个人或团队出海</p>
          </div>
          
          <ul class="space-y-3">
            <li class="flex items-center">
              <svg class="w-5 h-5 text-[#00BC53] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-[#22242c]">不限字符</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-[#00BC53] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-[#22242c]">享受平台 基础功能</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-[#00BC53] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-[#22242c]">可自定义选择套餐</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-[#00BC53] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-[#22242c]">可叠加购买，买多折扣越多</span>
            </li>
          </ul>
          
          <div class="mt-6 pt-4 border-t border-[#e3e3e3]">
            <p class="text-[#22242c] text-sm mb-2">购买90天 $7.2/端口/月</p>
            <p class="text-[#22242c] text-sm mb-2">购买180天 $5.42/端口/月</p>
            <p class="text-[#22242c] text-sm">购买365天 $4.89/端口/月</p>
          </div>
        </div>
      </div>

      <!-- 功能对比表 -->
      <div class="mb-16">
        <h2 class="text-2xl font-bold text-[#22242c] mb-8 text-center">会员套餐版本功能对比</h2>
        
        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="bg-gray-50">
                <th class="border border-[#e3e3e3] p-4 text-left text-[#22242c] font-semibold">功能模块</th>
                <th class="border border-[#e3e3e3] p-4 text-center text-[#22242c] font-semibold">免费版</th>
                <th class="border border-[#e3e3e3] p-4 text-center text-[#22242c] font-semibold">字符版</th>
                <th class="border border-[#e3e3e3] p-4 text-center text-[#22242c] font-semibold">标准版</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-[#e3e3e3] p-4 font-semibold text-[#22242c]">翻译</td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-[#e3e3e3] p-4 text-[#22242c]">文本翻译</td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="border border-[#e3e3e3] p-4 font-semibold text-[#22242c]">翻译路线</td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-[#e3e3e3] p-4 text-[#22242c]">普通翻译</td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="border border-[#e3e3e3] p-4 text-[#22242c]">google翻译</td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-[#e3e3e3] p-4 text-[#22242c]">DeepL翻译</td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="border border-[#e3e3e3] p-4 text-[#22242c]">Gemini AI翻译</td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-[#e3e3e3] p-4 text-[#22242c]">ChatGPT AI翻译</td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="border border-[#e3e3e3] p-4 text-[#22242c]">Claude AI翻译</td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-[#e3e3e3] p-4 text-[#22242c]">Grok AI翻译</td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="border border-[#e3e3e3] p-4 font-semibold text-[#22242c]">聊天</td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-[#e3e3e3] p-4 text-[#22242c]">聚合多开</td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="border border-[#e3e3e3] p-4 text-[#22242c]">未读提醒</td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-[#e3e3e3] p-4 text-[#22242c]">会话代理</td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="border border-[#e3e3e3] p-4 text-[#22242c]">Telegram好友群发</td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-[#e3e3e3] p-4 text-[#22242c]">Telegram陌生人群发</td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="border border-[#e3e3e3] p-4 font-semibold text-[#22242c]">计数器</td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-[#e3e3e3] p-4 text-[#22242c]">粉丝计数</td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="border border-[#e3e3e3] p-4 text-[#22242c]">分流链接</td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-[#e3e3e3] p-4 text-[#22242c]">工单分享</td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="border border-[#e3e3e3] p-4 font-semibold text-[#22242c]">用户画像</td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-[#e3e3e3] p-4 text-[#22242c]">用户画像</td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="border border-[#e3e3e3] p-4 text-[#22242c]">跟进记录</td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-[#e3e3e3] p-4 text-[#22242c]">备忘录</td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="border border-[#e3e3e3] p-4 font-semibold text-[#22242c]">快捷回复</td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-[#e3e3e3] p-4 text-[#22242c]">快捷回复-个人模版</td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td class="border border-[#e3e3e3] p-4 text-[#22242c]">快捷回复-公共模版</td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-[#e3e3e3] p-4 font-semibold text-[#22242c]">其他功能</td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
              </tr>
              <tr>
                <td class="border border-[#e3e3e3] p-4 text-[#22242c]">粉丝独立翻译</td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-[#e3e3e3] p-4 text-[#22242c]">客户端多开</td>
                <td class="border border-[#e3e3e3] p-4 text-center"></td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td class="border border-[#e3e3e3] p-4 text-center">
                  <svg class="w-5 h-5 text-[#00BC53] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 常见问题 -->
      <div class="mb-16">
        <h2 class="text-2xl font-bold text-[#22242c] mb-8 text-center">ChatX 套餐常见问题</h2>
        
        <div class="space-y-6">
          <!-- 问题1 -->
          <div class="bg-white rounded-lg shadow-[0_10px_15px_#6b6b6b0a,0_5px_20px_#e3e3e30d] border border-[#f3f3f3] p-6">
            <div class="flex justify-between items-center cursor-pointer" @click="toggleFAQ(0)">
              <h3 class="text-lg font-semibold text-[#22242c]">我有增加更多账号、更多团队成员的需求，是否支持增购？</h3>
              <svg :class="{'transform rotate-180': activeFAQ === 0}" class="w-5 h-5 text-[#22242c] transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
            <div v-show="activeFAQ === 0" class="mt-4 text-[#676c76]">
              <p>绝对支持！ChatX为您提供灵活的增购方案，您可以按需增加多开数量（1个起购）。我们期待能满足您不断增长的需求</p>
            </div>
          </div>
          
          <!-- 问题2 -->
          <div class="bg-white rounded-lg shadow-[0_10px_15px_#6b6b6b0a,0_5px_20px_#e3e3e30d] border border-[#f3f3f3] p-6">
            <div class="flex justify-between items-center cursor-pointer" @click="toggleFAQ(1)">
              <h3 class="text-lg font-semibold text-[#22242c]">产品当前是否必须按年付费？</h3>
              <svg :class="{'transform rotate-180': activeFAQ === 1}" class="w-5 h-5 text-[#22242c] transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
            <div v-show="activeFAQ === 1" class="mt-4 text-[#676c76]">
              <p>为了让更多用户能够轻松开始使用ChatX，在年付的基础上，我们也支持了月付、半年付等多种期限。需要指出的是，年付方案通常拥有更高的性价比。 如果您对ChatX感到满意，我们期待着与您共同见证ChatX的不断成长！</p>
            </div>
          </div>
          
          <!-- 问题3 -->
          <div class="bg-white rounded-lg shadow-[0_10px_15px_#6b6b6b0a,0_5px_20px_#e3e3e30d] border border-[#f3f3f3] p-6">
            <div class="flex justify-between items-center cursor-pointer" @click="toggleFAQ(2)">
              <h3 class="text-lg font-semibold text-[#22242c]">产品套餐后续是否会涨价？</h3>
              <svg :class="{'transform rotate-180': activeFAQ === 2}" class="w-5 h-5 text-[#22242c] transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
            <div v-show="activeFAQ === 2" class="mt-4 text-[#676c76]">
              <p>我们郑重承诺，在您当前的付费周期内，不会因产品的更新和改进而向您收取额外费用。然而，随着产品不断完善和升级，套餐价格可能会有适度的上调。</p>
            </div>
          </div>
          
          <!-- 问题4 -->
          <div class="bg-white rounded-lg shadow-[0_10px_15px_#6b6b6b0a,0_5px_20px_#e3e3e30d] border border-[#f3f3f3] p-6">
            <div class="flex justify-between items-center cursor-pointer" @click="toggleFAQ(3)">
              <h3 class="text-lg font-semibold text-[#22242c]">产品后续还会有哪些更新计划？</h3>
              <svg :class="{'transform rotate-180': activeFAQ === 3}" class="w-5 h-5 text-[#22242c] transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
            <div v-show="activeFAQ === 3" class="mt-4 text-[#676c76]">
              <p>ChatX正处于蓬勃发展阶段，我们不断致力于提升产品的功能和性能。未来，您可以期待更多关于"拓客营销"、"CRM客户管理"、"团队管理与协同"等 方面的更新和改进。我们的目标是提供最好的SCRM一体化工具，帮助您的企业出海赢单！</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PackageList',
  data() {
    return {
      activeFAQ: null
    }
  },
  methods: {
    toggleFAQ(index) {
      this.activeFAQ = this.activeFAQ === index ? null : index;
    }
  }
}
</script>

<style scoped>
/* 可以在这里添加额外的样式 */
</style>