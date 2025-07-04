// plugins/aos.client.ts
// import AOS from 'aos'
// import 'aos/dist/aos.css'

// export default defineNuxtPlugin(() => {
//   onMounted(() => {
//     AOS.init({
//       once: false, // 是否只触发一次，建议 false 用来测试
//       duration: 1000 // 动画持续时间
//     })
//     console.log('✅ AOS 初始化完成')
//   })
// })

// ~/plugins/aos.client.ts
import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  // 确保只在客户端执行
  if (process.client) {
    nuxtApp.hook('app:mounted', () => {
      // 添加延迟确保DOM完全渲染
      setTimeout(() => {
        AOS.init({
          // 关键配置：禁用初始隐藏
          initClassName: false, 
          useClassNames: true,
          // 调试模式（完成后可关闭）
          debug: true,
          // 您的配置
          once: false,
          duration: 1000,
          // 确保可滚动区域正确
          offset: 20,
          mirror: true
        })
        console.log('✅ AOS 初始化完成')
      }, 500)
    })
  }
})