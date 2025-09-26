<script lang="ts" setup>
import { useTheme } from "vuetify";

const colorMode = useColorMode();
const { $vuetify } = useNuxtApp();

async function setTheme() {
  const theme = $vuetify.theme.current.value.dark ? "light" : "dark";
  colorMode.preference = theme;
}

onMounted(updateTheme);
watch(() => colorMode.preference, updateTheme);
function updateTheme() {
  $vuetify.theme.change(colorMode.value);
}

const theme = useTheme();
</script>

<template>
  <v-btn
    size="32"
    color="dark"
    rounded="0"
    variant="text"
    icon
    @click="setTheme"
  >
    <ui-svg name="brigthness" size="18" />
  </v-btn>
</template>
