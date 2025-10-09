<script lang="ts" setup>
const props = defineProps({
	code: { type: String, required: true },
});

const product = ref(Products[props.code]);
</script>

<template>
	<template v-if="product?.prices">
		<v-container>
			<div class="text-h3 font-weight-bold">
				{{ $t(`plan.title`) }}
			</div>
		</v-container>

		<ui-plan-formule :modules="[product.code]" />
	</template>
</template>
