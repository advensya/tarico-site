<script lang="ts" setup>
const i18n = useI18n();

useSeoMeta({
	title: i18n.t("pages.index.meta.title"),
	description: i18n.t("pages.index.meta.description"),
});

useHead({ title: null });

const readMoreAboutTarico = ref(false);
</script>

<template>
	<ui-hero-one class="pg-index-hero" />

	<v-container class="mt-0" aria-labelledby="products-title">
		<v-row class="pa-5">
			<v-col cols="12" sm="4" order="0" order-sm="2">
				<div class="d-flex">
					<ui-svg
						name="engine"
						size="148"
						class="ml-sm-auto mr-5"
						aria-hidden="true"
					/>
				</div>
			</v-col>

			<v-col cols="12" sm="8" order="1">
				<h2
					id="products-title"
					class="font-weight-bold"
					style="
						line-height: 1;
						font-size: clamp(2rem, 3.2352941176vw, 4rem);
						text-wrap: balance;
					"
					v-html="$t('pages.products.index.title')"
				></h2>

				<v-btn
					color="background"
					variant="flat"
					class="border mt-3"
					rounded="0"
					:to="$localePath({ name: 'products' })"
					:block="$vuetify.display.smAndDown"
					:aria-label="$t('pages.index.products.seeAll')"
				>
					<template #prepend>
						<i class="fi fi-rr-apps-add" aria-hidden="true"></i>
					</template>
					{{ $t("pages.products.index.seeAll") }}
				</v-btn>
			</v-col>
		</v-row>
	</v-container>

	<ui-frame class="my-0" role="region" aria-labelledby="products-main-title">
		<v-col
			v-for="code in ['teams', 'heavy', 'pay', 'database']"
			:key="code"
			cols="12"
			sm="6"
			md="3"
			class="frame"
			role="region"
			style="
				background-color: rgba(var(--v-theme-surface), 0.3);
				text-wrap: pretty;
			"
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
					class="mt-5 d-block ui-link permanant"
					:title="`${Products[code].namePlain} — ${$t('words.readMore')}`"
					:aria-label="$t('words.readMore')"
					:aria-describedby="`prod-intro-${code}`"
				>
					{{ $t("words.readMore") }}
				</nuxt-link>
			</div>
		</v-col>

		<v-col cols="12" class="frame bg-">
			<v-btn
				block
				variant="text"
				color="dark"
				size="large"
				:to="$localePath({ name: 'hr' })"
			>
				{{ $t("pages.index.products.discoverRhSolutions") }}

				<template #append>
					<i class="fi fi-rr-arrow-right"></i>
				</template>
			</v-btn>
		</v-col>

		<v-col cols="12" class="frame">
			<ui-card-id />
		</v-col>
	</ui-frame>

	<section class="position-relative overflow-hidden py-10">
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

		<v-container class="py-16 position-relative d-none">
			<v-row>
				<v-col cols="12">
					<div class="mx-auto" style="max-width: 662px">
						<div class="d-flex justify-center mb-3">
							<i class="fi fi-sr-quote-right text-h3 opacity-30"></i>
						</div>
						<div class="text-center">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
							nobis facere autem earum culpa excepturi vero, minima dolorum
							itaque molestiae accusamus! Non delectus aut vel quis neque quos
							earum at?
						</div>

						<div class="d-flex align-center justify-center ga-3 mt-5">
							<img
								src="https://i.pinimg.com/736x/eb/ac/4d/ebac4dee2b6fdb727609e5856cac049f.jpg"
								style="
									width: 48px;
									height: 48px;
									object-fit: cover;
									object-position: center;
									border-radius: 16em;
									display: block;
								"
							/>
							<div style="line-height: 1">
								<div>Cheikhna DIALLO</div>
								<div class="text-h6">DG Scorpion</div>
							</div>
						</div>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</section>

	<v-container class="mb-0 mt-10" aria-labelledby="about-title">
		<v-row class="pa-5" justify="start">
			<v-col cols="12" sm="8" order="1">
				<h2
					id="about-title"
					class="text-h4 font-weight-bold mb-4"
					style="line-height: 1; text-wrap: balance"
					v-html="$t('pages.index.about.title')"
				></h2>
			</v-col>

			<v-col cols="12" order="2">
				<p
					style="max-width: 882px; text-wrap: pretty; hyphens: auto"
					v-html="$t('pages.index.about.text')"
				></p>
			</v-col>
		</v-row>
	</v-container>

	<ui-frame class="mt-0" role="region" aria-labelledby="values-title">
		<template #prepend>
			<h2
				id="values-title"
				class="text-h4 pa-5 font-weight-bold"
				style="line-height: 1; text-wrap: balance"
				v-html="$t('pages.index.values.title')"
			></h2>
		</template>

		<v-col v-for="i in 3" :key="i" cols="12" sm="6" md="4" class="frame">
			<h3
				class="text-h5 pa-5"
				style="
					background-color: rgba(var(--v-theme-surface), 0.3);
					text-wrap: pretty;
				"
				v-html="$t(`values.${i - 1}.title`)"
				:id="`value-title-${i}`"
			></h3>
			<div class="pa-5">
				<b>
					{{ $t(`values.${i - 1}.intro`) }}
				</b>
				<p
					class="mt-3"
					style="hyphens: auto; text-wrap: pretty"
					v-html="$t(`values.${i - 1}.text`)"
					:id="`value-text-${i}`"
					:aria-labelledby="`value-title-${i}`"
				></p>
			</div>
		</v-col>
	</ui-frame>

	<v-container
		style="z-index: 1; position: relative"
		class="pb-16"
		role="region"
		:aria-label="`${$t('words.contactUs')} / ${$t('words.bookDemo')}`"
	>
		<div class="d-flex justify-center align-center flex-column text-center">
			<h2>
				{{ $t("pages.index.cta.title") }}
			</h2>
			<div
				class="d-flex align-center justify-center flex-wrap ga-2 flex-wrap mt-5"
				role="group"
				:aria-label="`${$t('words.contactUs')} + ${$t('words.bookDemo')}`"
			>
				<ui-book-demo>
					<template #activator="{ props }">
						<v-btn
							v-bind="props"
							color="background"
							rounded="0"
							class="border"
							:aria-label="$t('words.bookDemo')"
							data-gtm="cta_book_demo"
						>
							{{ $t("words.bookDemo") }}
						</v-btn>
					</template>
				</ui-book-demo>

				<v-btn
					color="background"
					rounded="0"
					class="border"
					prefetch
					:to="$localePath({ name: 'id' })"
					:aria-label="$t('pages.index.cta.actions.id')"
					data-gtm="cta_tarico_id"
				>
					{{ $t("pages.index.cta.actions.id") }}
				</v-btn>
			</div>
		</div>
	</v-container>
</template>

<style lang="scss">
.pg-index-hero {
	min-height: 662px;
}

.text-hh {
	font-size: 3.2rem;
	line-height: 1;
	max-width: 662px;

	@media (max-width: 812px) {
		font-size: 3rem;
	}

	@media (max-width: 662px) {
		font-size: 2rem;
	}
}
</style>
