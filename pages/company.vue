<script lang="ts" setup>
defineI18nRoute({
  paths: {
    en: "/company",
    fr: "/entreprise",
  },
});

const i18n = useI18n();
useSeoMeta({ title: i18n.t("pages.company.description") });
</script>

<template>
  <v-app theme="dark">
    <ui-header>
      <template #brand>
        <nuxt-link
          v-if="!$slots.brand"
          class="d-flex align-center toverflow-hidden pa-1"
          :to="$localePath({ name: 'company' })"
          style="
            width: max-content;
            display: flex;
            align-items: center;
            gap: 5px;
          "
        >
          <img src="/logo/codia.png" alt="codia logo" width="42" />

          <div
            class="text-light ml-2"
            style="font-weight: bold; font-size: 26px"
          >
            Codia
          </div>
        </nuxt-link>
      </template>

      <template #cta>
        <v-btn
          v-if="!$slots.cta"
          variant="flat"
          size="large"
          color="orange"
          href="mailto:contact@codia.sn"
          target="__blank"
          rounded
        >
          <template #prepend>
            <ui-svg name="mail" size="24" />
          </template>
          Contactez-nous
        </v-btn>
      </template>
    </ui-header>

    <div class="header position-relative">
      <div
        style="
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            0deg,
            rgba(var(--v-theme-background), 1) 0%,
            rgba(var(--v-theme-background), 0) 100%
          );
        "
      ></div>

      <v-container class="position-relative">
        <h1
          style="
            font-size: clamp(2rem, 8.2352941176vw, 4.8rem);
            line-height: 1.1;
            font-weight: bold;
          "
        >
          {{ $t("pages.company.header.title") }}
        </h1>
        <p class="mt-3" style="max-width: 700px">
          {{ $t("pages.company.header.description") }}
        </p>

        <!-- <div class="d-flex align-center flex-wrap ga-2 mt-10">
          <v-btn
            color="primary"
            size="large"
            rounded
            :to="$localePath({ name: 'contact' })"
          >
            <template #prepend>
              <ui-svg name="phone" size="20" />
            </template>
            {{ $t("pages.company.contactUs") }}
          </v-btn>
        </div> -->
      </v-container>
    </div>

    <section class="py-16" id="company">
      <v-container>
        <v-row justify="center">
          <v-col cols="10">
            <div class="">
              <p v-html="$t('pages.company.summary.text')"></p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <ui-about class="position-relative" />

    <ui-footer />
  </v-app>
</template>

<style lang="scss" scoped>
.header {
  margin: auto;
  margin-bottom: 50px;
  height: 100lvh;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  // &.blue {
  //   background: linear-gradient(
  //     180deg,
  //     rgba(73, 99, 227, 0.298) 0%,
  //     rgba(252, 151, 69, 0) 100%
  //   );
  // }

  &::before {
    position: absolute;
    content: "";
    inset: 0;
    top: -80px;
    background-image: url(/images/u_002.jpg);
    background-size: cover;
    background-position: center bottom;
    // background: linear-gradient(
    //   165deg,
    //   rgba(var(--v-theme-secondary), 0.3) 0%,
    //   rgba(var(--v-theme-secondary), 0) 100%
    // );
  }

  .container {
    width: 80%;
    max-width: 772px;
    margin: auto;
    position: relative;

    .desc {
      font-size: 48px;
      line-height: 1.25;
      position: relative;
      margin: auto;

      span {
        background-color: rgb(0, 0, 0);
        color: rgb(255, 255, 255);
      }
    }
  }

  .more-btn {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 36px;
    text-decoration: none;
    color: #000;
    transition: all 0.5s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;

    &:hover {
      bottom: 15px;
    }
  }

  @media (max-width: 570px) {
    .container {
      max-width: 280px;

      .desc {
        font-size: 28px;
      }
    }
  }
}

#company {
  p {
    font-size: 24px;

    @media (max-width: 662px) {
      font-size: 18px;
    }
  }
}
</style>
