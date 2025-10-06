<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t, tm } = useI18n();

useSeoMeta({
	title: t("pages.hr.index.meta.title"),
	description: t("pages.hr.index.meta.description"),
});

const features = computed(() => {
	type FeatureItem = {
		title: string;
		list: string[];
	};

	return tm("pages.hr.index.features.items") as FeatureItem[];
});

onMounted(() => {
	addEventListener("scroll", onScroll);
	onScroll();
});

const spaceBetweenCapture = ref(0);

function onScroll() {
	spaceBetweenCapture.value = -50 + window.scrollY / 2;
	if (spaceBetweenCapture.value > 20) spaceBetweenCapture.value = 20;
}

onDeactivated(destroy);
onBeforeUnmount(destroy);
function destroy() {
	removeEventListener("scroll", onScroll);
}
</script>

<template>
	<div class="pg-hr-index--hero">
		<ui-hero-back-wall class="mask" />

		<v-container style="position: relative; padding-top: 80px">
			<div class="pa-5 text-center">
				<h1
					class="pg-form-home__title font-weight-bold mt-16"
					v-html="$t('pages.hr.index.hero.title')"
				></h1>
				<p style="font-size: 18px; max-width: 90%" class="mt-3 pa- mx-auto">
					{{ $t("pages.hr.index.hero.subtitle") }}
				</p>

				<div class="mt-5 d-flex flex-wrap ga-2 justify-center">
					<v-btn color="dark" variant="flat" :to="$localePath({ name: 'app' })">
						{{ $t("words.start") }}
					</v-btn>

					<ui-book-demo product="hr">
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
					</ui-book-demo>
				</div>
			</div>
		</v-container>

		<div class="u d-none">
			<div class="d-flex">
				<div class="u-side" style="z-index: 1">
					<img
						src="https://incident.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheropanels-app-noborder.7b2cf3f2.png&w=640&q=75"
						style="height: 80dvh"
					/>
				</div>

				<div class="u-side" :style="{ marginLeft: `${spaceBetweenCapture}px` }">
					<img
						src="https://incident.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheropanels-dashboard.7d19aefb.png&w=1920&q=75"
						style="height: 80dvh"
					/>
				</div>
			</div>
		</div>
	</div>

	<section class="position-relative d-none">
		<v-container class="my-0 py-0">
			<div class="border rounded-xl mx-sm-10 mx-0" style="margin-top: -110px">
				<div
					style="
						height: 600px;
						background: linear-gradient(
							to bottom right,
							rgba(var(--v-theme-surface), 0.25) 30%,
							rgba(var(--v-theme-surface), 0.5) 100%
						);
					"
					class="bg- border rounded-xl border ma-2"
				></div>
			</div>
		</v-container>
	</section>

	<section>
		<v-container>
			<p>
				Tarico HR est une suite d’applications intelligentes, modulaires et
				totalement autonomes, conçue pour digitaliser, automatiser et simplifier
				la gestion des ressources humaines. Chaque entreprise choisit librement
				les modules dont elle a besoin — recrutement, paie, congés, santé,
				contrats, organigramme, etc. — et les active sans dépendance technique.
				Pensée pour la performance et l’agilité, Tarico HR transforme la
				fonction RH en levier de productivité, de transparence et d’engagement
				collaboratif.
			</p>
		</v-container>
	</section>

	<ui-frame role="region">
		<template #prepend>
			<div class="pa-5 position-relative">
				<h2
					id="benefits-title"
					class="font-weight-bold"
					style="
						max-width: 662px;
						line-height: 1;
						font-size: clamp(2rem, 3.2352941176vw, 4rem);
						text-wrap: balance;
					"
				>
					{{ $t(`pages.hr.index.features.title`) }}
				</h2>
			</div>
		</template>

		<v-col
			v-for="(feature, i) in features"
			:key="i"
			:aria-labelledby="`hr-feature-${i}`"
			cols="6"
			sm="6"
			md="3"
			class="frame"
			role="region"
		>
			<div>
				<h3
					:id="`hr-featuure-${i}`"
					class="pa-5 d-flex align-center"
					style="
						text-wrap: balance;
						line-height: 1.1;
						height: 64px;
						background-color: rgba(var(--v-theme-surface), 0.4);
						font-weight: normal;
					"
				>
					{{ $t(`pages.hr.index.features.items.${i}.title`) }}
				</h3>

				<div class="mt-2 pa-5" style="text-wrap: pretty; hyphens: auto">
					<div v-for="(line, l) in feature.list" :key="l" class="d-flex ga-2">
						<i
							class="fi fi-ss-check-circle text-body-2"
							style="margin-top: 7px"
						></i>
						{{ $t(`pages.hr.index.features.items.${i}.list.${l}`) }}
					</div>
				</div>
			</div>
		</v-col>

		<v-col cols="12" class="frame">
			<div class="text-center pa-5 bg-secondary">
				<p class="text-h6">
					{{ $t("pages.hr.index.features.savedTimes") }}
				</p>
			</div>
		</v-col>

		{{}}
		<v-col
			v-for="product in Object.values(Products).filter((p) =>
				p.sections.includes('hr')
			)"
			:key="product.code"
			cols="12"
			sm="6"
			md="4"
			class="frame"
			role="region"
			:aria-labelledby="`prod-title-${product.code}`"
		>
			<div class="pa-5">
				<h3
					class="text-h6"
					style="text-wrap: balance"
					v-html="product.name"
					:id="`prod-title-${product.code}`"
				></h3>

				<p
					:id="`prod-intro-${product.code}`"
					class="mt-2"
					style="text-wrap: pretty; hyphens: auto"
					v-html="$t(`products.${product.code}.intro`)"
				></p>

				<nuxt-link
					:to="$localePath(product.to)"
					prefetch
					variant="text"
					class="mt-5 ui-link permanant d-block"
					:title="`${product.namePlain} — ${$t('words.readMore')}`"
					:aria-label="$t('words.readMore')"
					:aria-describedby="`prod-intro-${product.code}`"
				>
					{{ $t("words.readMore") }}
				</nuxt-link>
			</div>
		</v-col>
	</ui-frame>

	<ui-frame role="region">
		<template #prepend>
			<div class="pa-5">
				<ui-svg name="hr/employee" size="64" />
				<h2
					id="about-title"
					class="text-h4 font-weight-bold my-4"
					style="line-height: 1; text-wrap: balance"
					v-html="$t('pages.hr.index.process.title')"
				></h2>
				<p
					style="max-width: 882px; text-wrap: pretty; hyphens: auto"
					v-html="$t('pages.hr.index.process.text')"
				></p>
			</div>
		</template>

		<v-col
			v-for="i in 5"
			:key="i"
			:aria-labelledby="`hr-feature-${i}`"
			cols="6"
			sm="6"
			md="3"
			class="frame"
			role="region"
		>
			<div>
				<h3
					:id="`hr-featuure-${i}`"
					class="pa-5 d-flex align-center"
					style="
						text-wrap: balance;
						line-height: 1.1;
						height: 64px;
						background-color: rgba(var(--v-theme-surface), 0.4);
						font-weight: normal;
					"
				>
					{{ $t(`pages.hr.index.process.items.${i - 1}.title`) }}
				</h3>

				<div class="mt-2 pa-5" style="text-wrap: pretty; hyphens: auto">
					{{ $t(`pages.hr.index.process.items.${i - 1}.text`) }}
				</div>
			</div>
		</v-col>
	</ui-frame>

	<ui-frame role="region" aria-labelledby="benefits-title">
		<template #prepend>
			<div
				class="pa-5 position-relative d-flex align-center justify-center ga-2"
			>
				<ui-svg name="lamp-2" size="54" aria-hidden="true" />
				<h2
					id="benefits-title"
					class="mt-2 font-weight-bold"
					style="
						max-width: 662px;
						line-height: 1;
						font-size: clamp(2rem, 8.2352941176vw, 4rem);
						text-wrap: balance;
					"
				>
					{{ $t(`pages.hr.index.benefits.title`) }}
				</h2>
			</div>
		</template>

		<v-col
			v-for="i in 4"
			:key="i"
			cols="12"
			sm="6"
			class="frame"
			role="region"
			:aria-labelledby="`benefit-title-${i}`"
		>
			<div class="pa-5">
				<h3
					:id="`benefit-title-${i}`"
					class="text-h6 font-weight-bold"
					style="text-wrap: balance"
				>
					{{ $t(`pages.hr.index.benefits.list.${i - 1}.title`) }}
				</h3>

				<p class="mt-2" style="text-wrap: pretty; hyphens: auto">
					{{ $t(`pages.hr.index.benefits.list.${i - 1}.text`) }}
				</p>
			</div>
		</v-col>
	</ui-frame>

	<div class="pb-16"></div>

	<section class="pg-hr-index--foot d-none py-16">
		<div
			style="
				max-width: 772px;
				position: relative;
				backdrop-filter: blur(1.8rem);
				background-color: rgba(var(--v-theme-background), 0.05);
			"
		>
			<div class="pa-10">
				<div class="d-flex justify-center mb-3">
					<i class="fi fi-sr-quote-right text-h3 opacity-30"></i>
				</div>
				<div class="text-center">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nobis
					facere autem earum culpa excepturi vero, minima dolorum itaque
					molestiae accusamus! Non delectus aut vel quis neque quos earum at?
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

			<div class="border-t pa-5 position-relative w-100 d-flex justify-center">
				<ui-book-demo product="hr">
					<template #activator="{ props }">
						<v-btn v-bind="props" color="primary" variant="flat" class="mt-3">
							{{ $t("pages.form.createForm") }}
						</v-btn>
					</template>
				</ui-book-demo>
			</div>
		</div>
	</section>
</template>

<style scoped lang="scss">
.pg-hr-index--hero {
	min-height: 90vh;
	position: relative;

	overflow: hidden;

	.pg-form-home__title {
		font-size: 4.2rem;
		line-height: 1;

		@media (max-width: 812px) {
			font-size: 3rem;
		}

		@media (max-width: 662px) {
			font-size: 1.5rem;
		}
	}

	.u {
		position: relative;
		margin-top: 150px;
	}
}

.pg-hr-index--foot {
	min-height: 100lvh;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	/* The image used */

	&::before {
		position: absolute;
		content: "";
		inset: 0;

		/* Create the parallax scrolling effect */
		background-image: url("/images/people.png");
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
}
</style>
