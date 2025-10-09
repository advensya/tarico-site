<script lang="ts" setup>
import { format } from "@tarico/utils";

const props = defineProps({ modules: { type: Array as PropType<string[]> } });

const yearlReduction = 20;
const freeMaxUsers = ref(2);
const currency = ref("xof");
const yearly = ref(false);
const sheets = ref(1);

const _modules = ref<string[]>([
	...(props.modules ||
		Object.values(Products)
			.filter((p) => p.prices && p.prices.FREE === 0)
			.map((p) => p.code)),
]);

const prices = computed(() => {
	let prices = { FREE: 0, DECLIC: 0, PREMIUM: 0 };

	for (const code of _modules.value) {
		if (Products[code].prices) {
			prices.FREE += Products[code].prices.FREE;
			prices.DECLIC += Products[code].prices.DECLIC;
			prices.PREMIUM += Products[code].prices.PREMIUM;
		}
	}

	return prices;
});

function reduction(price: number) {
	if (yearly.value) {
		price = (1 - yearlReduction / 100) * price;
	}

	if (sheets.value > 1000) price *= 0.8;
	else if (sheets.value > 500) price *= 0.85;
	else if (sheets.value > 100) price *= 0.9;

	return price * sheets.value;
}
</script>

<template>
	<ui-frame>
		<template #prepend>
			<div class="px-5">
				<v-slider
					v-model="sheets"
					:max="1001"
					:min="1"
					:step="1"
					:ticks="{
						100: '-10%',
						500: '-15%',
						1001: '-20%',
					}"
					thumb-label="always"
					show-ticks="always"
				>
					<template v-slot:thumb-label="{ modelValue }">
						<div style="white-space: nowrap">
							{{ modelValue > 1000 ? "+1000" : modelValue }} Utilisateurs
						</div>
					</template>
				</v-slider>

				<v-select
					v-if="!modules"
					:items="
						Object.keys(Products).filter((p) => !['id', 'hr'].includes(p))
					"
					label="Modules"
					multiple
					chips
					closable-chips
					v-model="_modules"
				>
					<template #prepend-item>
						<v-list-item>
							<template #append>
								<div style="width: 100px">
									{{ $t(`plan.FREE.title`) }}
								</div>
								<div style="width: 100px">
									{{ $t(`plan.DECLIC.title`) }}
								</div>
								<div style="width: 100px">
									{{ $t(`plan.PREMIUM.title`) }}
								</div>
							</template>
						</v-list-item>
					</template>
					<template v-slot:item="{ props: itemProps, item }">
						<v-list-item v-bind="itemProps">
							<template #append v-if="Products[item.raw].prices">
								<div style="width: 100px">
									{{ format.currency(Products[item.raw].prices.FREE) }}
									{{ $t(`plan.currency.${currency}`) }}
								</div>
								<div style="width: 100px">
									{{ format.currency(Products[item.raw].prices.DECLIC) }}
									{{ $t(`plan.currency.${currency}`) }}
								</div>
								<div style="width: 100px">
									{{ format.currency(Products[item.raw].prices.PREMIUM) }}
									{{ $t(`plan.currency.${currency}`) }}
								</div>
							</template>
						</v-list-item>
					</template>
				</v-select>
			</div>
		</template>

		<v-col
			v-for="plan in sheets > 2
				? ['DECLIC', 'PREMIUM']
				: ['FREE', 'DECLIC', 'PREMIUM']"
			:key="plan"
			cols="12"
			sm="6"
			:md="sheets > 2 ? 6 : 4"
			class="frame"
		>
			<div
				class="px-5 py-3 d-flex align-center ga-2"
				style="background-color: rgba(var(--v-theme-surface), 0.4)"
			>
				<h3 class="text-h6 lh-1">
					{{ $t(`plan.${plan}.title`) }}
				</h3>
			</div>

			<div class="pa-5">
				<div class="d-flex ga-1 align-center mb-5">
					<div
						:key="`price-${yearly}`"
						class="text-h4"
						style="white-space: nowrap"
					>
						{{ format.currency(reduction(prices[plan])) }}
					</div>
					<div style="line-height: 1; font-size: 12px">
						<div>
							{{ $t(`plan.currency.${currency}`) }}
						</div>
						{{
							[$t(`plan.frequency.month`), $t(`plan.applyTo.user`)]
								.filter((e) => e)
								.join($t("plan.jointure"))
						}}
					</div>
				</div>

				<p class="mb-3" v-html="$t(`plan.${plan}.description`)"></p>

				<v-btn
					variant="flat"
					color="dark"
					rounded="0"
					:to="$localePath({ name: 'app' })"
				>
					<div style="white-space: normal; font-size: 14px">
						{{ $t(`plan.btn.start`) }}
					</div>
				</v-btn>

				<div class="mt-8">
					<div class="d-flex align-center ga-3 mb-2">
						<i class="fi fi-ss-check-circle"></i>
						{{
							plan === "FREE"
								? $t(`plan.freeMaxUsers`, { n: freeMaxUsers })
								: $t("plan.unlimitedUser")
						}}
					</div>

					<div class="d-flex align-center ga-3 mb-2">
						<i class="fi fi-ss-check-circle"></i>
						{{ $t(`plan.${plan}.stockage`) }}
					</div>

					<div class="d-flex align-center ga-3 mb-2">
						<i class="fi fi-ss-check-circle"></i>
						{{ $t(`plan.${plan}.support`) }}
					</div>

					<slot :name="`features.${plan}`"></slot>
				</div>
			</div>
		</v-col>
	</ui-frame>
</template>
