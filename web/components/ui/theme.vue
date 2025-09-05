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
    <i v-if="theme.current.value.dark" class="fi fi-rr-moon"></i>
    <i v-else class="fi fi-rr-brightness text-h6"></i>
  </v-btn>
</template>
