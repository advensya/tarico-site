<script lang="ts" setup>
const { locales, setLocale } = useI18n();
</script>

<template>
  <div>
    <v-menu>
      <template #activator="{ props }">
        <v-btn v-bind="props" variant="text" icon>
          <ui-svg name="language" size="22" />
        </v-btn>
      </template>

      <v-card>
        <v-btn
          v-for="locale in locales"
          color="dark"
          variant="text"
          @click="setLocale(locale.code)"
          block
        >
          {{ locale.name }}
        </v-btn>
      </v-card>
    </v-menu>
  </div>
</template>
