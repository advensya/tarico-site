<script lang="ts" setup>
import { VBtn, VCard, VCol, VContainer, VRow } from "vuetify/components";
import UiFrame from "./frame.vue";
import UiT from "./t.vue";
import UiPlan from "./plan/index.vue";
import type { ContentCollectionItem } from "@nuxt/content";

const props = defineProps({
	page: { type: Object as PropType<ContentCollectionItem>, required: true },
});
const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {
	return queryCollection("content")
		.path(`/products/${route.params.code}`)
		.first();
});

if (!page.value) {
	await navigateTo(useLocalePath()({ name: "products" }), { replace: true });
}
</script>

<template>
	<ContentRenderer
		v-if="page"
		:value="page"
		:components="{
			VContainer,
			VBtn,
			VCard,
			VRow,
			VCol,
			UiFrame,
			UiT,
			UiPlan,
		}"
	>
		<slot />
	</ContentRenderer>
</template>
