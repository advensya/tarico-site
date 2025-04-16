<script lang="ts" setup>
const emit = defineEmits<{ (e: "close"): void }>();
</script>

<template>
  <v-menu
    offset="5"
    location="bottom center"
    :close-on-content-click="false"
    :open-on-click="false"
    open-on-hover
  >
    <template #activator="{ props }">
      <slot name="activator" :props="props" />
    </template>

    <template #default="{ isActive }">
      <v-card
        color="background"
        max-width="882"
        rounded="lg"
        class="border"
        style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      >
        <div class="ui-header--product d-flex">
          <div class="ui-header--product__nav">
            <div style="width: 332px">
              <v-list class="pa-0" bg-color="transparent">
                <v-list-item
                  :to="$localePath({ name: 'hr' })"
                  @click="
                    isActive.value = false;
                    emit('close');
                  "
                >
                  <template #prepend>
                    <img
                      src="/logo/tarico-hr.png"
                      alt="Tarico HR"
                      style="width: 32px"
                    />
                  </template>
                  <template #title>
                    <div class="ml-2">Tarico <b>HR</b></div>
                  </template>
                  <template #append>
                    <i
                      class="fi fi-rr-angle-small-right text-primary d-md-block d-none"
                    ></i>
                  </template>
                </v-list-item>
                <v-list-item>
                  <template #prepend>
                    <ui-svg name="logo-square" size="32" />
                  </template>
                  <template #title>
                    <div class="ml-2">Tarico <b>Formulaire</b></div>
                  </template>
                </v-list-item>
                <v-list-item>
                  <template #prepend>
                    <ui-svg name="logo-square" size="32" />
                  </template>
                  <template #title>
                    <div class="ml-2">Tarico <b>Transfert</b></div>
                  </template>
                </v-list-item>
                <v-list-item>
                  <template #prepend>
                    <ui-svg name="logo-square" size="32" />
                  </template>
                  <template #title>
                    <div class="ml-2">Tarico <b>Design</b></div>
                  </template>
                </v-list-item>
              </v-list>
              <div class="pa-5">
                <p class="mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  suscipit rem omnis! Cum quo ab ullam doloremque.
                </p>

                <v-btn
                  color="dark"
                  variant="flat"
                  :to="$localePath({ name: 'products' })"
                  rounded
                >
                  Tous nos services
                  <template #append>
                    <i class="fi fi-br-grid"></i>
                  </template>
                </v-btn>
              </div>
            </div>
          </div>
          <div class="ui-header--product__body d-none d-md-block">
            <v-container>
              <div class="d-flex ga-2">
                <img
                  src="/logo/tarico-hr.png"
                  alt="Tarico HR"
                  style="width: 42px"
                />

                <div class="ml-auto"></div>
                <v-btn color="primary" size="small" variant="flat" rounded>
                  En savoir plus
                  <template #append>
                    <i class="fi fi-rr-arrow-up-right-from-square"></i>
                  </template>
                </v-btn>
              </div>

              <p class="mt-5 font-weight-bold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aperiam esse consequuntur suscipit eligendi repudiandae quo
                voluptatibus voluptatem vero? Quae ipsum voluptatibus asperiores
                reprehenderit beatae odio? Dolorem at vitae voluptatibus
                pariatur.
              </p>

              <p class="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae nulla, pariatur nostrum id modi maiores velit
                asperiores, exercitationem quasi dolor iure. Facere ducimus
                adipisci numquam vero ex voluptates nisi minima? Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Recusandae nulla,
                pariatur nostrum id modi maiores velit asperiores,
                exercitationem quasi dolor iure. Facere ducimus adipisci numquam
                vero ex voluptates nisi minima?
              </p>
            </v-container>
          </div>
        </div>
      </v-card>
    </template>
  </v-menu>
</template>

<style lang="scss">
.ui-header--product {
  .ui-header--product__nav {
    @media (min-width: 960px) {
      background-color: rgba(var(--v-theme-on-background), 0.04);
    }
  }
}
</style>
