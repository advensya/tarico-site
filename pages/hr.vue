<script lang="ts" setup>
const i18n = useI18n();

useHead({
  templateParams: {
    siteDescription: i18n.t("pages.hr.index.hero.title"),
    siteName: "Tarico HR",
  },
});
</script>

<template>
  <v-app>
    <ui-header>
      <template #brand>
        <nuxt-link
          v-if="!$slots.brand"
          class="d-flex align-center text-black overflow-hidden pa-1"
          :to="$localePath({ name: 'hr' })"
          style="
            width: max-content;
            display: flex;
            align-items: center;
            gap: 5px;
          "
        >
          <div
            class="bg- text-primary"
            style="
              width: 32px;
              height: 32px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 0.12em;
            "
          >
            <ui-svg name="logo" style="width: 100%" />
          </div>

          <div style="font-size: 26px">TARICO</div>
          <div style="font-weight: bold; font-size: 26px">HR</div>
        </nuxt-link>
      </template>

      <template #cta>
        <v-btn
          v-if="!$slots.cta"
          variant="flat"
          size="large"
          color="orange"
          rounded
          :to="
            $localePath({ name: 'contact', query: { for: 'tarico-hr:demo' } })
          "
        >
          <template #prepend>
            <i class="fi fi-rr-daily-calendar"></i>
          </template>
          Demander un démo
        </v-btn>
      </template>
    </ui-header>

    <nuxt-page />

    <ui-footer />
  </v-app>
</template>
