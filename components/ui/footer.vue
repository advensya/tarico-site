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
              class="bg-primary d-flex align-center justify-center"
              style="width: 36px; height: 36px"
            >
              <ui-svg name="logo" width="24" height="24" class="text-white" />
            </div>
            <div class="font-mackinac text-dark">Tarico</div>
          </nuxt-link>

          <div class="mt-5 d-flex align-center ga-3">
            <nuxt-link
              class="text-dark"
              href="mailto:contact@tarico.io"
              target="_blank"
            >
              <ui-svg name="mail" width="22" height="22" />
            </nuxt-link>

            <nuxt-link
              class="text-dark"
              href="https://www.linkedin.com/company/tarico"
              target="_blank"
            >
              <ui-svg name="linkedin" width="22" height="22" />
            </nuxt-link>
          </div>
        </v-col>

        <v-col cols="12" md="3" sm="6">
          <div class="text-h5 font-weight-bold font-mackinac ml-1">
            {{ $t("components.footer.items.products.title") }}
          </div>
          <template v-for="(product, p) in Products.slice(0, 4)" :key="p">
            <div>
              <v-btn
                color="dark"
                rounded="0"
                variant="text"
                :to="product.to ? $localePath(product.to) : undefined"
              >
                <div v-html="product.title"></div>
              </v-btn>
            </div>
          </template>
          <div>
            <v-btn
              color="dark"
              rounded="0"
              variant="text"
              :to="$localePath({ name: 'products' })"
            >
              <template #prepend>
                <i class="fi fi-br-grid"></i>
              </template>
              {{ $t("components.footer.items.allProducts") }}
            </v-btn>
          </div>
        </v-col>

        <v-col cols="12" md="3" sm="6">
          <!-- <v-spacer></v-spacer> -->

          <div class="text-h5 font-weight-bold font-mackinac ml-1">
            {{ $t("components.footer.items.company.title") }}
          </div>

          <div>
            <v-btn
              variant="text"
              color="dark"
              :to="$localePath({ name: 'company' })"
            >
              {{ $t("components.footer.items.company.aboutUs") }}
            </v-btn>
          </div>

          <div>
            <v-btn
              variant="text"
              color="dark"
              :to="$localePath({ name: 'contact' })"
            >
              {{ $t("components.footer.items.company.contactUs") }}
            </v-btn>
          </div>

          <div>
            <v-btn
              variant="text"
              color="dark"
              href="https://codia.sn/careers"
              target="_blank"
            >
              <!-- <i class="fi fi-br-arrow-up-right-from-square text-body-2"></i> -->
              {{ $t("components.footer.items.company.career") }}
            </v-btn>
          </div>
        </v-col>

        <v-col cols="12" md="3" sm="6">
          <div class="text-h5 font-weight-bold font-mackinac ml-1">
            {{ $t("components.footer.items.ressources.title") }}
          </div>

          <div>
            <v-btn variant="text" color="dark">
              {{ $t("components.footer.items.ressources.support") }}
            </v-btn>
          </div>
          <div>
            <v-btn
              variant="text"
              color="dark"
              href="mailto:commercial@tarico.io"
            >
              {{ $t("components.footer.items.ressources.sales") }}
            </v-btn>
          </div>

          <div>
            <v-btn
              :to="$localePath({ name: 'cgu' })"
              variant="text"
              color="dark"
            >
              {{ $t("components.footer.items.ressources.tou") }}
            </v-btn>
          </div>
          <div>
            <v-btn
              :to="$localePath({ name: 'privacy' })"
              variant="text"
              color="dark"
            >
              {{ $t("components.footer.items.ressources.privacy") }}
            </v-btn>
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
      style="border-top: 1px solid rgba(var(--v-theme-on-background), 0.04)"
    >
      <div>
        ©
        {{ new Date().getFullYear() }}
        <b>Codia SUARL</b>. All rights reserved.
      </div>
    </div>

    <div class="border-t py-3 px-10 d-none ga-5">
      <div>
        ©
        {{ new Date().getFullYear() }}
        <b>Codia SUARL</b>. All rights reserved.
      </div>

      <div class="ml-auto d-flex align-center ga-3">
        <nuxt-link
          class="text-dark"
          href="mailto:contact@tarico.io"
          target="_blank"
        >
          <ui-svg name="mail" width="22" height="22" />
        </nuxt-link>

        <nuxt-link
          class="text-dark"
          href="https://www.linkedin.com/company/tarico"
          target="_blank"
        >
          <ui-svg name="linkedin" width="22" height="22" />
        </nuxt-link>
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
