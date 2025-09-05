<script lang="ts" setup>
defineI18nRoute({
  paths: {
    en: "/company",
    fr: "/entreprise",
  },
});

const i18n = useI18n();

useHead({
  templateParams: {
    siteDescription: i18n.t("pages.company.meta.description"),
    siteName: "Codia",
  },
});

const leadership = [
  {
    code: "domutala",
    photo: "/images/mamadou-dia.png",
    contacts: {
      linkedin: "https://www.linkedin.com/in/domutala/",
      github: "https://www.github.com/domutala/",
    },
  },
  {
    code: "speedy",
    photo: "/images/saliou-diop.png",
    contacts: { linkedin: "https://www.linkedin.com/in/saliou-diop/" },
  },
  {
    code: "saer",
    photo: "/images/serigne-saer-dia.png",
    contacts: {
      linkedin: "https://www.linkedin.com/in/saer-dia-13a02a16a/",
    },
  },
];
</script>

<template>
  <div class="header position-relative">
    <div class="back"></div>

    <v-container class="position-relative">
      <div class="pa-5">
        <div
          class="d-flex align-center toverflow-hidden pa-1 mb-5 mt-16"
          :to="$localePath({ name: 'index' })"
          style="
            width: max-content;
            display: flex;
            align-items: center;
            gap: 5px;
          "
        >
          <img :src="'/logo/codia.png'" alt="codia logo" width="42" />

          <div
            class="text-light ml-2"
            style="font-weight: bold; font-size: 26px"
          >
            Codia
          </div>
        </div>

        <h1
          style="
            font-size: clamp(2rem, 3.2352941176vw, 4.8rem);
            line-height: 1.1;
            font-weight: bold;
            max-width: 662px;
          "
        >
          {{ $t("pages.company.header.title") }}
        </h1>
      </div>
    </v-container>
  </div>

  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <div class="">
          <p v-html="$t('pages.company.summary.text')"></p>
        </div>
      </v-col>
    </v-row>
  </v-container>

  <ui-frame>
    <template #prepend>
      <h2
        class="text-h4 pa-5"
        style="line-height: 1; line-height: 1; font-weight: bold"
        v-html="$t('pages.company.leadership.title')"
      ></h2>
    </template>
    <v-col
      v-for="leader in leadership"
      :key="leader.code"
      cols="12"
      md="4"
      sm="6"
      class="frame"
    >
      <img
        style="
          height: 210px;
          width: 100%;
          background-color: rgb(var(--v-theme-on-background), 0.03);
          margin-bottom: 15px;
          object-fit: contain;
          object-position: bottom center;
        "
        :src="leader.photo"
        :alt="$t(`leadership.${leader.code}.name`)"
      />
      <div class="pa-5">
        <h3 class="text-h5">
          {{ $t(`leadership.${leader.code}.name`) }}
        </h3>
        <div>
          {{ $t(`leadership.${leader.code}.function`) }}
        </div>

        <p class="mt-5" v-html="$t(`leadership.${leader.code}.text`)"></p>

        <div class="d-flex align-center ga-4 mt-5">
          <nuxt-link
            v-for="(contact, c) in leader.contacts"
            :key="c"
            class="text-dark"
            :href="contact"
            target="_blank"
          >
            <ui-svg :name="c" width="22" height="22" />
          </nuxt-link>
        </div>
      </div>
    </v-col>
  </ui-frame>

  <div class="pb-16"></div>
</template>

<style lang="scss" scoped>
.header {
  margin: auto;
  margin-bottom: 50px;
  height: 70lvh;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  .back {
    overflow: hidden;
    position: absolute;
    inset: 0;
    z-index: 0;

    background: rgb(var(--v-theme-secondary), 0.4);
    -webkit-mask: url("/images/grid.svg") center/cover no-repeat;
    mask: url("/images/grid.svg") center/cover no-repeat;
  }
}
</style>
