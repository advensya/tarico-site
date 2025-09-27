<script lang="ts" setup>
const route = useRoute();
const product = ref(Products[route.params.code as string]);

if (!product.value) {
	await navigateTo(useLocalePath()({ name: "products" }), { replace: true });
}

const { data: page } = await useAsyncData(route.path, () => {
	return queryCollection("content")
		.path(`/products/${route.params.code}`)
		.first();
});

const { t } = useI18n();
useSeoMeta({
	title: product.value.namePlain,
	description: t(`products.${product.value.code}.intro`),
});
</script>

<template>
	<template v-if="product">
		<div class="pg-id-index--hero">
			<div class="back"></div>

			<svg
				viewBox="0 0 1280 384"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				style="
					position: absolute;
					bottom: 0;
					width: 100lvw;
					left: 50%;
					transform: translateX(-50%);
					z-index: 0;
					pointer-events: none;
				"
			>
				<rect
					width="1280"
					height="384"
					fill="url(#paint0_radial_4211_5930)"
				></rect>
				<defs>
					<radialGradient
						id="paint0_radial_4211_5930"
						cx="0"
						cy="0"
						r="1"
						gradientUnits="userSpaceOnUse"
						gradientTransform="translate(640 384) rotate(-90) scale(275.5 918.333)"
					>
						<stop
							stop-color="rgba(var(--v-theme-on-background))"
							stop-opacity=".07"
						></stop>
						<stop offset="1" stop-opacity="0"></stop>
					</radialGradient>
				</defs>
			</svg>

			<v-container style="position: relative" class="px-sm-16">
				<div class="pa-5">
					<v-row style="position: relative" justify="start">
						<v-col cols="12" md="8">
							<h1
								class="title font-weight-bold mt-16"
								v-html="product.name"
							></h1>
							<p
								style="font-size: 18px; max-width: 90%"
								class="mt-3 pa-0"
								v-html="$t(`products.${product.code}.intro`)"
							></p>

							<v-btn
								color="primary"
								variant="flat"
								class="mt-3"
								rounded="0"
								:to="
									$localePath({
										name: 'app',
										query: { open: product.code },
									})
								"
							>
								{{ $t("words.start") }}
							</v-btn>
						</v-col>
					</v-row>
				</div>
			</v-container>
		</div>

		<template v-if="page">
			<ui-markdown :page />
		</template>

		<div
			class="d-flex align-center flex-column justify-center mt-16 ga-2 flex-wrap mt-5"
		>
			<v-btn
				color="primary"
				rounded="0"
				class="border"
				:to="$localePath({ name: 'app' })"
			>
				<template #prepend>
					<i class="fi fi-rr-apps-add" aria-hidden="true"></i>
				</template>

				{{ $t("words.install") }}
			</v-btn>

			<v-btn
				color="primary"
				rounded="0"
				class="border"
				:to="$localePath({ name: 'app' })"
			>
				<template #prepend>
					<i class="fi fi-rr-play" aria-hidden="true"></i>
				</template>

				{{ $t("words.startWithApp") }}
			</v-btn>
		</div>

		<div class="pt-16"></div>

		<ui-frame class="mt-0" role="region" aria-labelledby="products-main-title">
			<template #prepend>
				<div
					class="pa-5 text-center"
					style="
						background-color: rgba(var(--v-theme-surface), 0.3);
						text-wrap: pretty;
					"
				>
					{{ $t("pages.products.index.moreTools") }}
				</div>
			</template>
			<v-col
				v-for="code in Object.keys(Products)
					.filter((c) => c !== 'hr' && c !== product.code)
					.slice(0, 4)"
				:key="code"
				cols="12"
				sm="6"
				md="3"
				class="frame"
				role="region"
				:aria-labelledby="`prod-title-${code}`"
			>
				<div class="pa-5">
					<h3
						class="text-h6"
						style="text-wrap: balance"
						v-html="Products[code].name"
						:id="`prod-title-${code}`"
					></h3>

					<p
						:id="`prod-intro-${code}`"
						class="mt-2"
						style="text-wrap: pretty; hyphens: auto"
						v-html="$t(`products.${code}.intro`)"
					></p>

					<nuxt-link
						:to="$localePath(Products[code].to)"
						prefetch
						variant="text"
						class="mt-5 ui-link permanant d-block"
						:title="`${Products[code].namePlain} — ${$t('words.readMore')}`"
						:aria-label="$t('words.readMore')"
						:aria-describedby="`prod-intro-${code}`"
					>
						{{ $t("words.readMore") }}
					</nuxt-link>
				</div>
			</v-col>

			<template #append>
				<div
					class="d-flex align-center flex-wrap justify-center mt-16 ga-2 flex-wrap mt-5"
					role="group"
				>
					<ui-book-demo>
						<template #activator="{ props }">
							<v-btn
								v-bind="props"
								color="background"
								rounded="0"
								class="border"
							>
								{{ $t("words.bookDemo") }}
							</v-btn>
						</template>
					</ui-book-demo>

					<v-btn
						color="background"
						rounded="0"
						class="border"
						:to="$localePath({ name: 'products' })"
					>
						{{ $t("words.exploreSuite") }}
					</v-btn>
				</div>
			</template>
		</ui-frame>
	</template>
</template>

<style lang="scss" scoped>
.pg-id-index--hero {
	min-height: 252px;
	position: relative;
	padding-top: 80px;
	padding-bottom: 80px;
	display: flex;
	align-items: center;
	overflow: hidden;
	flex-direction: column;

	.back {
		overflow: hidden;
		position: absolute;
		left: 0;
		top: 0;
		top: -80px;
		width: 100%;
		height: calc(100% + 80px);
		z-index: 0;

		background: rgb(var(--v-theme-on-background), 0.07);
		-webkit-mask: url("/images/grid.svg") center/cover no-repeat;
		mask: url("/images/grid.svg") center/cover no-repeat;

		&::before {
			display: none;
			content: "";
			background-image: url("/images/grid.svg");
			position: absolute;
			inset: 0;
			background-position: center;
			background-size: cover;
			opacity: 0.04;
			filter: sepia(100%) saturate(500%) hue-rotate(180deg);
		}

		&::after {
			content: "";
			position: absolute;
			inset: 0;
			background: linear-gradient(
				to top right,
				rgba(var(--v-theme-background), 1) 40%,
				rgba(var(--v-theme-secondary), 0) 100%
			);
		}
	}

	.title {
		font-size: 3.2rem;
		line-height: 1;

		@media (max-width: 812px) {
			font-size: 3rem;
		}

		@media (max-width: 662px) {
			font-size: 2rem;
		}
	}

	.u {
		position: relative;
		margin-top: 150px;
	}
}
</style>
