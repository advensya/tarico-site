<script lang="ts" setup>
import { useTheme } from "vuetify";

const theme = useTheme();
</script>

<template>
  <v-btn
    size="32"
    color="dark"
    rounded="0"
    variant="text"
    icon
    @click="theme.cycle(['dark', 'light', 'system'])"
  >
    <ui-svg name="brigthness" size="18" />
  </v-btn>
</template>
