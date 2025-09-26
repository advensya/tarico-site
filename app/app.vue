<script lang="ts" setup>
const ready = ref(false);

onMounted(() => {
	ready.value = false;

	setTimeout(() => {
		ready.value = true;
	}, 50);
});
</script>

<template>
	<template v-if="ready">
		<ui-header />
		<nuxt-page />
		<ui-footer />
	</template>
</template>
