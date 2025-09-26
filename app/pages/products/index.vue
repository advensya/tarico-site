<script lang="ts" setup>
defineI18nRoute({
	paths: {
		en: "/products",
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
		<div class="back"></div>

		<v-container class="position-relative">
			<div class="pa-5 text-center">
				<ui-svg name="engine" size="100" aria-hidden="true" />
				<h1
					class="font-weight-bold mt-3"
					style="
						line-height: 1;
						font-size: clamp(2rem, 4.2352941176vw, 4rem);
						text-wrap: balance;
					"
					v-html="$t('pages.products.index.title')"
				></h1>
			</div>
		</v-container>
	</div>

	<!-- <v-col cols="12" class="frame">
			<v-row>
				<v-col cols="12" md="6">
					<ui-card-hr />
				</v-col>

				<v-col cols="12" md="6"></v-col>
			</v-row>
		</v-col> -->

	<ui-frame class="mt-0" role="region" aria-labelledby="products-main-title">
		<v-col
			cols="12"
			class="frame"
			style="
				background-color: rgba(var(--v-theme-surface), 0.3);
				text-wrap: pretty;
			"
		>
			<div
				class="pa-10"
				style="
					background-color: rgba(var(--v-theme-surface), 0.3);
					text-wrap: pretty;
				"
			>
				<p
					style="max-width: 882px; text-wrap: pretty; hyphens: auto"
					v-html="$t('pages.products.index.text')"
				></p>

				<template v-if="readMoreAboutTarico">
					<div class="mt-10">
						<div class="d-flex flex-column ga-3">
							<!-- <ui-svg name="growth" size="48" /> -->
							<h3
								class="text-h4 font-weight-bold"
								style="line-height: 1; text-wrap: balance"
							>
								Une suite logicielle pour <br />
								l’efficacité et la croissance
							</h3>
						</div>

						<p class="mt-5" style="text-wrap: pretty; hyphens: auto">
							Chaque solution Tarico est issue d'une écoute attentive des
							réalités du terrain, permettant de concevoir des outils
							opérationnels. Tarico offre une transformation digitale adaptée au
							contexte africain, en fournissant des outils conçus pour anticiper
							les besoins et soutenir une croissance durable.
						</p>
					</div>

					<div class="mt-10">
						<div class="d-flex flex-column ga-3">
							<!-- <ui-svg name="company-people" size="48" /> -->
							<h3
								class="text-h4 font-weight-bold"
								style="line-height: 1; text-wrap: balance"
							>
								Flexibilité et adaptation <br />
								aux besoins uniques
							</h3>
						</div>

						<p class="mt-5" style="text-wrap: pretty; hyphens: auto">
							Les logiciels Tarico sont conçus pour s’adapter et évoluer avec
							vos outils existants. Cette flexibilité, associée à une volonté de
							simplifier, soutient la croissance des entreprises partenaires.
							<br />
							Tarico ne se limite pas à la vente de logiciels, mais établit des
							partenariats technologiques durables, avec un interlocuteur dédié
							et une équipe à l'écoute.
						</p>
					</div>

					<div class="mt-10">
						<div class="d-flex flex-column ga-3">
							<!-- <ui-svg name="helping-hang" size="48" /> -->
							<h3
								class="text-h4 font-weight-bold"
								style="line-height: 1; text-wrap: balance"
							>
								Accompagnement client : <br />
								un facteur clé de succès
							</h3>
						</div>

						<h3
							class="text-h4 font-weight-bold"
							style="line-height: 1; max-width: 442px; text-wrap: balance"
						></h3>

						<p class="mt-5" style="text-wrap: pretty; hyphens: auto">
							Un support réactif et attentif est au cœur de Tarico. Une équipe
							compétente accompagne chaque client à chaque étape, garantissant
							des solutions concrètes et adaptées aux défis rencontrés.
						</p>
					</div>
				</template>

				<v-btn
					v-else
					color="dark"
					variant="text"
					class="border mt-3"
					size="small"
					@click="readMoreAboutTarico = true"
					:aria-expanded="false"
					aria-controls="products-title"
					aria-label="Afficher plus d’informations sur les produits Tarico"
				>
					{{ $t("pages.products.index.readMore") }}

					<template #append>
						<i class="fi fi-rr-angle-small-down" aria-hidden="true"></i>
					</template>
				</v-btn>
			</div>

			<!-- <div class="pa-5 text-center">
				{{ $t("pages.products.index.moreTools") }}
			</div> -->
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
				<UiBookDemo />
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
	height: 70lvh;
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

		background: rgb(var(--v-theme-dark), 0.03);
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
	}

	.backdd {
		overflow: hidden;
		position: absolute;
		inset: 0;
		z-index: 0;

		background: rgb(var(--v-theme-dark), 0.05);
		-webkit-mask: url("/images/grid.svg") center/cover no-repeat;
		mask: url("/images/grid.svg") center/cover no-repeat;
	}
}
</style>
