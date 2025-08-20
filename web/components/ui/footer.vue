<template>
  <v-footer
    style="background-color: rgba(var(--v-theme-on-background), 0.03)"
    class="ui-footer d-block pa-0 pt-5"
  >
    <v-container class="my-5">
      <v-row>
        <v-col cols="12" md="3" sm="6">
          <nuxt-link
            class="d-flex align-center ga-2 font-weight-bold text-h5"
            :to="$localePath({ name: 'index' })"
          >
            <div
              class="bg-black d-flex align-center justify-center"
              style="width: 54px; height: 54px"
            >
              <ui-svg name="logo-v2" size="42" class="text-white" />
            </div>
          </nuxt-link>

          <div class="mt-5 d-flex align-center ga-3">
            <nuxt-link href="mailto:contact@tarico.io" target="_blank">
              <ui-svg name="mail" width="22" height="22" />
            </nuxt-link>

            <nuxt-link
              href="https://www.linkedin.com/company/tarico"
              target="_blank"
            >
              <ui-svg name="linkedin" width="22" height="22" />
            </nuxt-link>
          </div>
        </v-col>

        <v-col cols="12" md="3" sm="6">
          <!-- <div>
            <v-btn
              class="text-light mb-2 d-block"
              variant="outlined"
              class="px-4 border"
              rounded
              :to="$localePath({ name: 'products' })"
            >
              <template #prepend>
                <i class="fi fi-br-grid"></i>
              </template>
              {{ $t("components.footer.items.allProducts") }}
            </v-btn>
          </div> -->
        </v-col>

        <v-col cols="12" md="3" sm="6">
          <!-- <v-spacer></v-spacer> -->

          <div class="text-h5 font-weight-bold font-mackinac mb-3">
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

        <v-col cols="12" md="3" sm="6">
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
        <!-- <ui-app-lang>
  <template #activator="{ props }">
    <v-btn icon size="small" variant="text" color="dark" v-bind="props">
      <ui-svg name="language" width="16" height="16" />
    </v-btn>
  </template>
  </ui-app-lang> -->
      </v-row>
    </v-container>
    <div
      class="text-center py-3 px-10"
      style="
        border-top: 1px solid rgba(var(--v-theme-on-background), 0.04);
        position: relative;
        display: flex;
        align-items: center;
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
