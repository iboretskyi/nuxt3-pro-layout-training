// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  extends: [
    'nuxt-seo-kit',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
      // siteName: '',
      // siteDescription: '',
      // titleSeparator: '|',
      language: 'en', // prefer more explicit language codes like `en-GB` over `en`
      trailingSlash: false, // forces trailing slashes on server side routes and sitemap
      linkChecker: {
        failOn404: true, // fail build on any internal 404s
      },
      compress: true,
      gzip: true,
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/image-edge',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    'nuxt-gtag',
    'nuxt-headlessui',
  ],
  tailwindcss: {
    cssPath: '~/assets/scss/tailwind.css',
    configPath: 'tailwind.config',
  },
  css: [
    '~/assets/scss/main.scss',
    '~/assets/scss/fonts.scss',
  ],
  colorMode: {
    classSuffix: '',
  },
  headlessui: {
    prefix: 'Headless',
  },
})
