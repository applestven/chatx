// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  plugins: [
    { src: '~/plugins/aos.client.ts', mode: 'client' }
  ],
  css:[
     "~/assets/css/main.css", "~/assets/css/default.css", "~/assets/css/copy.css"
  ],

  modules: ['@nuxtjs/tailwindcss']
})