<template>
  <v-footer
    theme="light"
    class="ui-footer d-block pa-0 pt-5 bg-background border-t"
  >
    <!-- style="background-color: #17100e !important" -->
    <v-container fluid class="px-10 my-5">
      <v-row justify="start">
        <v-col cols="12" md="4" sm="6">
          <!-- <v-spacer></v-spacer> -->

          <div class="text-h5 font-weight-bold mb-3">
            {{ $t("components.footer.items.company.title") }}
          </div>

          <div>
            <nuxt-link
              variant="text"
              class="text-light mb-2 d-block"
              :to="$localePath({ name: 'company' })"
            >
              {{ $t("components.footer.items.company.aboutUs") }}
            </nuxt-link>
          </div>

          <div>
            <nuxt-link
              variant="text"
              class="text-light mb-2 d-block"
              :to="$localePath({ name: 'contact' })"
            >
              {{ $t("components.footer.items.company.contactUs") }}
            </nuxt-link>
          </div>

          <div>
            <nuxt-link
              variant="text"
              class="text-light mb-2 d-block"
              :to="$localePath({ name: 'career' })"
            >
              <!-- <i class="fi fi-br-arrow-up-right-from-square text-body-2"></i> -->
              {{ $t("components.footer.items.company.career") }}
            </nuxt-link>
          </div>
        </v-col>

        <v-col cols="12" md="4" sm="6">
          <div class="text-h5 font-weight-bold mb-3">
            {{ $t("components.footer.items.ressources.title") }}
          </div>

          <div>
            <nuxt-link
              variant="text"
              class="text-light mb-2 d-block"
              href="mailto:support@tarico.io"
            >
              {{ $t("components.footer.items.ressources.support") }}
            </nuxt-link>
          </div>
          <div>
            <nuxt-link
              variant="text"
              class="text-light mb-2 d-block"
              href="mailto:commercial@tarico.io"
            >
              {{ $t("components.footer.items.ressources.sales") }}
            </nuxt-link>
          </div>

          <div>
            <nuxt-link
              :to="$localePath({ name: 'cgu' })"
              variant="text"
              class="text-light mb-2 d-block"
            >
              {{ $t("components.footer.items.ressources.tou") }}
            </nuxt-link>
          </div>
          <div>
            <nuxt-link
              :to="$localePath({ name: 'privacy' })"
              variant="text"
              class="text-light mb-2 d-block"
            >
              {{ $t("components.footer.items.ressources.privacy") }}
            </nuxt-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div
      class="text-center py-3 px-10"
      style="
        border-top: 1px solid rgba(var(--v-theme-on-background), 0.04);
        background-color: rgba(var(--v-theme-on-background), 0.02);
        position: relative;
        display: flex;
        align-items: center;
        gap: 10px;
      "
    >
      <div
        style="
          background-color: rgba(var(--v-theme-on-background), 0.01);
          position: absolute;
          inset: 0;
        "
      ></div>

      <div style="position: relative">
        ©
        {{ new Date().getFullYear() }}
        <b>Codia SUARL</b>
      </div>

      <v-spacer />

      <nuxt-link
        href="mailto:contact@tarico.io"
        target="_blank"
        class="text-light"
      >
        <ui-svg name="mail" width="22" height="22" />
      </nuxt-link>

      <nuxt-link
        href="https://www.linkedin.com/company/tarico"
        target="_blank"
        class="text-light"
      >
        <ui-svg name="linkedin" width="22" height="22" />
      </nuxt-link>

      <div class="d-none align-center text-right ga-2" style="line-height: 1">
        développé au Sénégal
        <ui-svg name="flag/sn" size="28" />
      </div>
    </div>
  </v-footer>
</template>

<style lang="scss">
.ui-footer {
  .v-btn {
    justify-content: flex-start;
    padding: 0;
    padding-left: 5px;
    padding-right: 5px;

    .v-btn__overlay {
      background-color: transparent !important;
    }
  }
}
</style>
