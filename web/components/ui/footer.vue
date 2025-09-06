<template>
  <v-footer
    class="ui-footer d-block pa-0 p"
    style="background-color: rgba(var(--v-theme-on-background), 0.03)"
  >
    <!-- style="background-color: #17100e !important" -->

    <ui-frame class="my-0">
      <v-col cols="12" sm="6" md="3" class="frame">
        <div class="d-flex justify-center align-center flex-column h-100 py-5">
          <ui-svg name="logo-text" size="124" class="text-surface" />
        </div>
      </v-col>

      <v-col cols="12" sm="6" md="3" class="frame">
        <div class="pa-5">
          <div
            v-for="code in ['hr', 'id', 'onboarding', 'form', 'heavy']"
            :key="code"
          >
            <nuxt-link
              variant="text"
              class="text-light mb-2 d-block"
              :to="$localePath(Products[code].to)"
              v-html="Products[code].name"
            >
            </nuxt-link>
          </div>
        </div>
      </v-col>

      <v-col cols="12" sm="6" md="3" class="frame">
        <div class="pa-5">
          <div class="text-h6 mb-3">
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
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="3" class="frame">
        <div class="pa-5">
          <div class="text-h6 mb-3">
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
        </div>
      </v-col>

      <template #append>
        <div
          class="text-center py-3 px-5"
          style="
            border-top: 1px solid rgba(var(--v-theme-on-background), 0.04);
            background-color: rgba(var(--v-theme-on-background), 0.03);
            position: relative;
            display: flex;
            align-items: center;
            gap: 10px;
          "
        >
          <div style="position: relative">
            ©
            {{ new Date().getFullYear() }}
            <b>Codia SUARL</b>
          </div>

          <v-spacer />

          <!-- <v-btn
            href="mailto:contact@tarico.io"
            target="_blank"
            size="32"
            color="dark"
            rounded="0"
            variant="text"
            icon
          >
            <ui-svg name="mail" size="18" />
          </v-btn> -->

          <v-btn
            href="https://www.linkedin.com/company/tarico"
            target="_blank"
            size="32"
            color="dark"
            rounded="0"
            variant="text"
            icon
          >
            <ui-svg name="linkedin" size="16" />
          </v-btn>
        </div>
      </template>
    </ui-frame>
  </v-footer>
</template>
