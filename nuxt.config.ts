import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  runtimeConfig: {},

  build: { transpile: ["vuetify", "dayjs-nuxt", "better-sqlite3"] },

  alias: {
    dayjs: "dayjs",
  },

  modules: [
    "nuxt-icons",
    "@nuxtjs/i18n",
    "@nuxtjs/mdc",
    "@nuxt/content",
    "@tarico/form-ui",
    "@nuxtjs/seo",
    "dayjs-nuxt",
    "@nuxtjs/color-mode",

    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config.plugins?.push(vuetify({ autoImport: true }));
      });
    },
  ],

  css: ["~/assets/styles/main.scss"],

  app: {
    head: {
      titleTemplate: "%s %separator %siteName %separator %siteDescription",
      templateParams: {
        siteName: "Tarico",
        siteDescription: null,
        separator: "·",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      meta: [{ property: "og:image", content: "/og-image.png" }],
    },
  },

  site: {
    name: "Tarico",
    url: "https://tarico.io",
    indexable: process.env.NUXT_PUBLIC_INDEXABLE,
  },

  seo: {
    canonicalLowercase: false,
  },

  i18n: {
    compilation: { strictMessage: false },
    strategy: "prefix",
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
    defaultLocale: "fr",
    locales: [
      {
        code: "fr",
        language: "fr",
        name: "Français",
        file: "fr.json",
      },
      {
        code: "en",
        language: "en",
        name: "English",
        file: "en.json",
      },
      {
        code: "es",
        language: "es",
        name: "Español",
        file: "es.json",
      },
      {
        code: "ar",
        language: "ar",
        name: "عربي",
        file: "ar.json",
        dir: "rtl",
      },
    ],
  },

  components: [{ path: "~/components/ui", global: true, prefix: "ui" }],

  svg: {
    component: "uiSvg",
  },

  colorMode: { classSuffix: "" },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
