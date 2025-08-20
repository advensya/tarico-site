// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  runtimeConfig: {
    databaseUrl: process.env.DATABASE_URL,
    trackingSalt: process.env.TRACKING_SALT,
    database: {
      name: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
      host: process.env.DB_HOST,
    },
    // public si besoin côté client: public: {}
  },

  modules: [
    "vuetify-nuxt-module",
    "nuxt-icons",
    "@nuxtjs/i18n",
    "@nuxtjs/mdc",
    "@nuxt/content",
    "@tarico/form-ui",
  ],

  css: ["./styles/main.scss"],

  vuetify: {
    moduleOptions: {},
    vuetifyOptions: "./vuetify.config.ts",
  },

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
});
