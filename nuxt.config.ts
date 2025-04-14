// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: ["vuetify-nuxt-module", "nuxt-icons"],

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

  components: [{ path: "~/components/ui", global: true, prefix: "ui" }],

  svg: {
    component: "uiSvg",
  },
});
