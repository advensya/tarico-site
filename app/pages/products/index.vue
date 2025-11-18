<script lang="ts" setup>
defineI18nRoute({
	paths: {
		fr: "/solutions",
	},
});

const i18n = useI18n();

useSeoMeta({
	title: i18n.t("pages.product.meta.title"),
	description: i18n.t("pages.product.meta.description"),
});

const readMoreAboutTarico = ref(false);
</script>

<template>
	<div class="header position-relative">
		<div class="back">
			<ui-hero-back-wall />
		</div>

		<v-container class="position-relative mt-16 py-0">
			<div class="text-center">
				<ui-svg name="engine" size="100" aria-hidden="true" />
				<h1
					class="font-weight-bold mt-3"
					style="
						line-height: 1;
						font-size: clamp(1.5rem, 4.2352941176vw, 4rem);
						text-wrap: balance;
					"
					v-html="$t('pages.products.index.title')"
				></h1>
			</div>
			<div class="mt-5 d-flex flex-wrap ga-2 justify-center align">
				<v-btn color="dark" variant="flat" :to="$localePath({ name: 'app' })">
					{{ $t("words.start") }}
				</v-btn>

				<ui-call-me product="hr">
					<template #activator="{ props }">
						<v-btn
							v-bind="props"
							color="background"
							class="border"
							variant="flat"
						>
							{{ $t("words.bookDemo") }}
						</v-btn>
					</template>
				</ui-call-me>
			</div>
		</v-container>
	</div>

	<section style="">
		<ui-frame class="my-0" role="region" aria-labelledby="products-main-title">
			<v-col
				cols="12"
				class="frame"
				style="
					background-color: rgba(var(--v-theme-surface), 0.03);
					text-wrap: pretty;
				"
			>
				<div
					class="pa-5"
					style="
						background-color: rgba(var(--v-theme-surface), 0.3);
						text-wrap: pretty;
					"
				>
					<p
						style="text-wrap: pretty; hyphens: auto"
						v-html="$t('pages.products.index.text')"
					></p>
				</div>
			</v-col>
			<v-col cols="12" md="4" class="frame">
				<div class="pa-7" style="text-wrap: pretty">
					<h3 class="text-h6 mb-5 font-weight-bold" style="line-height: 1.2">
						Une suite logicielle pour l’efficacité et la croissance
					</h3>
					<p style="text-wrap: pretty; hyphens: auto">
						Chaque solution Tarico est issue d'une écoute attentive des réalités
						du terrain, permettant de concevoir des outils opérationnels.
						<br /><br />
						Tarico offre une transformation digitale adaptée au contexte
						africain, en fournissant des outils conçus pour anticiper les
						besoins et soutenir une croissance durable.
					</p>
				</div>

				<!-- <div class="pa-5 text-center">
				{{ $t("pages.products.index.moreTools") }}
			</div> -->
			</v-col>
			<v-col cols="12" md="4" class="frame">
				<div class="pa-7" style="text-wrap: pretty">
					<h3 class="text-h6 mb-5 font-weight-bold" style="line-height: 1.2">
						Flexibilité et adaptation aux besoins uniques
					</h3>
					<p style="text-wrap: pretty; hyphens: auto">
						Les logiciels Tarico sont conçus pour s’adapter et évoluer avec vos
						outils existants. Cette flexibilité, associée à une volonté de
						simplifier, soutient la croissance des entreprises partenaires.
						<br />
						<br />
						Tarico ne se limite pas à la vente de logiciels, mais établit des
						partenariats technologiques durables, avec un interlocuteur dédié et
						une équipe à l'écoute.
					</p>
				</div>

				<!-- <div class="pa-5 text-center">
				{{ $t("pages.products.index.moreTools") }}
			</div> -->
			</v-col>
			<v-col cols="12" md="4" class="frame">
				<div class="pa-7" style="text-wrap: pretty">
					<h3 class="text-h6 mb-5 font-weight-bold" style="line-height: 1.2">
						Accompagnement client : un facteur clé de succès
					</h3>
					<p style="text-wrap: pretty; hyphens: auto">
						Un support réactif et attentif est au cœur de Tarico. Une équipe
						compétente accompagne chaque client à chaque étape, garantissant des
						solutions concrètes et adaptées aux défis rencontrés.
					</p>
				</div>

				<!-- <div class="pa-5 text-center">
				{{ $t("pages.products.index.moreTools") }}
			</div> -->
			</v-col>
		</ui-frame>
	</section>

	<div class="mt-16 d-flex flex-wrap ga-2 justify-center align">
		<v-btn color="dark" variant="flat" :to="$localePath({ name: 'app' })">
			{{ $t("words.startFree") }}
		</v-btn>
	</div>

	<ui-frame role="region" aria-labelledby="products-main-title">
		<v-col
			cols="12"
			class="frame"
			style="
				background-color: rgba(var(--v-theme-surface), 0.03);
				text-wrap: pretty;
			"
		>
			<div
				class="pa-5"
				style="
					background-color: rgba(var(--v-theme-surface), 0.3);
					text-wrap: pretty;
				"
			>
				Lorem ipsum dolor sit amet consectetur
			</div>
		</v-col>

		<v-col
			v-for="code in Object.keys(Products).filter((c) => c !== 'hr')"
			:key="code"
			cols="12"
			sm="6"
			md="4"
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
				class="pa-10 mt-10 d-flex align-center flex-wrap justify-center ga-2"
			>
				<ui-call-me />
				<v-btn
					rounded="0"
					class="border"
					:aria-label="$t('hero.one.all')"
					:to="$localePath({ name: 'app' })"
				>
					{{ $t("words.startFree") }}
				</v-btn>
			</div>
		</template>
	</ui-frame>
</template>

<style lang="scss" scoped>
.header {
	margin: auto;
	height: 552px;
	width: 100%;
	display: flex;
	align-items: center;
	position: relative;
	overflow: hidden;

	.back {
		overflow: hidden;
		position: absolute;
		inset: 0;
		z-index: 0;

		background: rgb(var(--v-theme-background), 0.2);
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
			opacity: 0.03;
			filter: sepia(100%) saturate(500%) hue-rotate(180deg);
		}
	}
}
</style>
