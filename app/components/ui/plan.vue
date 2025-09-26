<script lang="ts" setup>
const props = defineProps({
	code: { type: String, required: true },
});

const product = ref(Products[props.code]);

const currency = ref("xof");
const yearly = ref(false);

onMounted(() => {
	if (product.value.plans?.yearlReduction) yearly.value = true;
});

function reduction(plan: IProductPlan) {
	if (plan.price === "$sale") return;

	if (yearly.value && product.value.plans.yearlReduction) {
		const price =
			(1 - product.value.plans.yearlReduction / 100) * plan.price.xof;
		return price;
	}

	return plan.price.xof;
}
</script>

<template>
	<ui-frame v-if="product?.plans">
		<template #prepend>
			<div class="pa-5 d-flex align-center ga-2">
				<div class="text-h3 font-weight-bold">
					{{ $t(`plan.title`) }}
				</div>

				<v-spacer />

				<template v-if="product.plans.yearlReduction">
					<div
						style="
							line-height: 1.1;
							max-width: 200px;
							text-align: right;
							font-size: 90%;
						"
					>
						{{
							$t(`plan.tosafe`, {
								reduction: product.plans.yearlReduction,
							})
						}}
					</div>
					<v-switch v-model="yearly" color="success" hide-details inset>
					</v-switch>
				</template>
			</div>
		</template>

		<v-col
			v-for="(plan, p) in product.plans.formule"
			:key="p"
			cols="12"
			sm="6"
			md="3"
			class="frame"
		>
			<div
				class="px-5 py-3 d-flex align-center ga-2"
				style="background-color: rgba(var(--v-theme-surface), 0.4)"
			>
				<h3 class="text-h6 lh-1">
					{{ $t(`products.${product.code}.plans.${p}.title`) }}
				</h3>
			</div>

			<div class="pa-5">
				<div
					v-if="plan.price !== '$sale'"
					class="d-flex ga-1 align-center mb-5"
				>
					<div :key="`price-${yearly}`" class="text-h4">
						{{ reduction(plan) }}
					</div>
					<div style="line-height: 1; font-size: 12px">
						<div>
							{{ $t(`plan.currency.${currency}`) }}
						</div>
						{{
							[
								$t(`plan.frequency.${product.plans.frequency}`),
								product.plans.applyTo === "organization"
									? null
									: $t(`plan.applyTo.${product.plans.applyTo}`),
							]
								.filter((e) => e)
								.join($t("plan.jointure"))
						}}
					</div>
				</div>

				<p
					class="mb-3"
					v-html="$t(`products.${product.code}.plans.${p}.description`)"
				></p>

				<v-btn
					variant="flat"
					color="dark"
					rounded="0"
					:to="
						$localePath({
							name: plan.price !== '$sale' ? 'app' : 'contact',
						})
					"
				>
					<div style="white-space: normal; font-size: 14px">
						{{
							$t(`plan.btn.${plan.price !== "$sale" ? "start" : "contactUs"}`)
						}}
					</div>
				</v-btn>

				<div class="mt-8">
					<div
						v-for="(feature, o) in plan.features"
						:key="o"
						class="d-flex align-center ga-3 mb-2"
					>
						<i class="fi fi-ss-check-circle"></i>
						{{ $t(`products.${product.code}.plans.features.${feature}`) }}
					</div>
				</div>
			</div>
		</v-col>
	</ui-frame>
</template>
