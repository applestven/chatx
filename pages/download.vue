<template>
  <div class="container mx-auto download-bg">
    <h1 class="text-4xl font-bold text-green-500 mt-20">Download ChatX SCRM Client</h1>
    <p class="text-lg text-gray-700 mt-2">Cross-border private domain marketing integrated solution</p>
    <div class="download-list-bar flex justify-between gap-20 mt-20">
      <article class="download-list flex flex-col items-center border border-gray-300 rounded-lg shadow-md bg-white w-64 p-5 relative">
        <img src="/image/download-list-icon.png" class="download-icon absolute top-1 right-1" width="36" height="36">
        <img src="/image/download-windows.png" width="48" height="48">
        <h4 class="text-lg font-medium text-gray-900 mt-4 mb-24 text-center">Windows Version</h4>
        <p class="text-sm text-gray-600 cursor-pointer underline">Low version download</p>
      </article>
      <article class="download-list flex flex-col items-center border border-gray-300 rounded-lg shadow-md bg-white w-64 p-5 relative">
        <img src="/image/download-list-icon.png" class="download-icon absolute top-1 right-1" width="36" height="36">
        <img src="/image/download-apple.png" width="48" height="48">
        <h4 class="text-lg font-medium text-gray-900 mt-4 mb-24 text-center">Mac(<i class="text-green-500">Intel</i> chip) Version</h4>
        <p class="text-sm text-gray-600 cursor-pointer underline">Low version download</p>
      </article>
      <article class="download-list flex flex-col items-center border border-gray-300 rounded-lg shadow-md bg-white w-64 p-5 relative">
        <img src="/image/download-list-icon.png" class="download-icon absolute top-1 right-1" width="36" height="36">
        <img src="/image/download-apple.png" width="48" height="48">
        <h4 class="text-lg font-medium text-gray-900 mt-4 mb-24 text-center">Mac(<i class="text-green-500">Apple</i> chip) Version</h4>
        <p class="text-sm text-gray-600 cursor-pointer underline">Low version download</p>
      </article>
    </div>
    <h2 class="text-2xl font-bold text-gray-900 mt-20">Download and Installation FAQ</h2>
    <section class="download-query-bar flex justify-between w-full mt-8">
      <article class="download-query-list bg-gradient-to-b from-[#eaf8ee] to-[#f6fcf8] rounded-lg w-1/2 p-5">
        <img src="/image/download-img-1.webp" width="580">
        <h2 class="text-2xl font-bold text-gray-900 mt-6">Windows is protecting your computer</h2>
        <p class="text-gray-600 mt-4 mb-6">Windows is protecting your computer</p>
        <a href="/downloadWindows">
          <button class="flex items-center gap-3 bg-none border border-gray-900 rounded-lg text-gray-900 font-medium text-lg w-56 h-14 mx-auto hover:bg-gray-900 hover:text-white transition-all duration-300">
            View detailed steps <img src="/image/download-button-icon.png" width="24">
          </button>
        </a>
      </article>
      <article class="download-query-list bg-gradient-to-b from-[#f4f2ff] to-[#fbfaff] rounded-lg w-1/2 p-5">
        <img src="/image/download-img-2.webp" width="580">
        <h2 class="text-2xl font-bold text-gray-900 mt-6">Mac cannot verify developer</h2>
        <p class="text-gray-600 mt-4 mb-6">Mac cannot verify developer</p>
        <a href="/downloadMac">
          <button class="flex items-center gap-3 bg-none border border-gray-900 rounded-lg text-gray-900 font-medium text-lg w-56 h-14 mx-auto hover:bg-gray-900 hover:text-white transition-all duration-300">
            View detailed steps <img src="/image/download-button-icon.png" width="24">
          </button>
        </a>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DownloadPage',
}
</script>

<style scoped>
/* Styles will be added in copy.css */
</style>