export default defineNuxtConfig({
  compatibilityDate: '2025-02-07',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/eslint-module',
    '@nuxtjs/device',
    '@nuxt/image',
  ],
  css: ["~/assets/css/index.scss"],
  image: {
    dir: 'assets/images',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/css/mixins" as *;
            @use "@/assets/css/variables" as *;
          `,
        },
      },
    },
  },
});