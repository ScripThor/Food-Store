// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-02-07',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',
  ],
  css: ["~/assets/css/index.scss"],

})
