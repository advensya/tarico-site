<script lang="ts" setup></script>

<template>
  <v-app>
    <ui-header>
      <template #branddd>
        <nuxt-link
          v-if="!$slots.brand"
          class="d-flex align-center text-black overflow-hidden pa-1"
          :to="$localePath({ name: 'form' })"
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
            <ui-svg name="logo" size="32" />
          </div>

          <div style="font-size: 26px">TARICO</div>
          <div style="font-weight: bold; font-size: 26px">Form</div>
        </nuxt-link>
      </template>

      <template #cta>
        <v-btn
          v-if="!$slots.cta"
          variant="flat"
          size="small"
          color="primary"
          style="justify-content: flex-start"
          href="https://form.tarico.space"
        >
          <template #prepend>
            <i class="fi fi-sr-plus"></i>
          </template>
          Créer un formulaire
        </v-btn>
      </template>
    </ui-header>

    <nuxt-page />
    <ui-footer />
  </v-app>
</template>
