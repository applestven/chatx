/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: { extend: {
    backgroundImage: {
      'home-banner': "url('/ipx/home-banner.webp')",
    }
  } },
  variants: { extend: {} },
  plugins: [],
};
