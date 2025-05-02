<script lang="ts" setup>
const i18n = useI18n();

useHead({
  templateParams: {
    siteDescription: i18n.t("pages.hr.index.hero.title"),
    siteName: "Tarico HR",
  },
});

const services = {
  "01": { icon: "hr/employee" },
  "02": { icon: "hr/report" },
  "03": { icon: "hr/stethoscope" },
  "04": { icon: "hr/calendar-2" },
  "05": { icon: "hr/clock" },
  "06": { icon: "hr/business-strategy" },
};
</script>

<template>
  <v-app>
    <section class="pg-hr-index--description" style="">
      <!-- <img
        src="/images/people.png"
        alt="tarico"
        style="
          width: 100%;
          object-position: center;
          object-fit: cover;
          position: absolute;
          inset: 0;
        "
      /> -->

      <div
        style="font-size: 24px; max-width: 882px; position: relative"
        class="bg-black pa-10 my-16"
      >
        <img
          src="/logo/tarico-hr.png"
          alt="Tarico HR logo"
          style="width: 50px"
        />

        <p class="mt-5" v-html="$t('pages.hr.index.description.text')"></p>
      </div>
    </section>

    <section class="text-center bg-primary pg-hr-home--hero" style="">
      <v-container style="max-width: 992px">
        <ui-svg name="hr/brainstorming" size="64" />
        <h1 class="pg-home__title font-weight-bold">
          {{ $t("pages.hr.index.hero.title") }}
        </h1>

        <!-- <v-btn
          color="primary"
          variant="flat"
          size="x-large"
          class="mt-5"
          rounded="pill"
          style="border-radius: 0.6em"
          :to="$localePath({ name: 'products' })"
        >
          <template #prepend>
            <i class="fi fi-br-grid"></i>
          </template>
          {{ $t("pages.index.sections.one.cta") }}
          <template #append> </template>
        </v-btn> -->
      </v-container>

      <img
        src="/images/Tarico_HR-screenshot-01.png"
        alt="Tarico HR Screenshot"
        style="width: 90%; max-width: 882px"
        class="mt-5"
      />
    </section>

    <section class="my-16">
      <v-container>
        <v-row>
          <v-col v-for="(item, i) in services" :key="i" cols="12" sm="6" md="4">
            <div
              class="rounded-lg pa-5 h-100"
              style="background-color: rgba(var(--v-theme-on-background), 0.05)"
            >
              <ui-svg :name="item.icon" size="38" class="text-primary" />
              <div class="mt-2 font-weight-bold text-h5">
                {{ $t(`taricohr.services.${i}.title`) }}
              </div>
              <p class="mt-3">
                {{ $t(`taricohr.services.${i}.description`) }}
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-app>
</template>

<style lang="scss">
.pg-hr-home--hero {
  min-height: calc(100lvh);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding-top: 70px;
  padding-bottom: 70px;
  background-color: transparent !important;

  > * {
    position: relative;
    z-index: 2;
  }

  &::before {
    position: absolute;
    content: "";
    inset: 0;
    top: -80px;
    // background: linear-gradient(
    //   165deg,
    //   rgba(var(--v-theme-secondary), 0.3) 0%,
    //   rgba(var(--v-theme-secondary), 0) 100%
    // );
    background: linear-gradient(
      to bottom right,
      rgba(var(--v-theme-secondary), 0.3) 0%,
      rgba(var(--v-theme-primary)) 100%
    );
  }

  .pg-home__title {
    font-size: clamp(2rem, 8.2352941176vw, 4.4rem);
    line-height: 1.1;
  }
}

.pg-hr-index--description {
  min-height: 100lvh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  /* The image used */

  /* Create the parallax scrolling effect */
  background-image: url("/images/people.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
