<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Swiper as SwiperClass } from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const _swiper = ref<SwiperClass>();
const i18n = useI18n();

useHead({
	templateParams: {
		siteDescription: i18n.t("pages.hr.index.hero.title"),
		siteName: "Tarico HR",
	},
});

const services = {
	"01": { icon: "hr/employee" },
	"02": { icon: "hr/report" },
	"03": { icon: "hr/stethoscope" },
	"04": { icon: "hr/calendar-2" },
	"05": { icon: "hr/clock" },
	"06": { icon: "hr/business-strategy" },
};

const modules = [
	{
		code: "team",
		color: "yellow",
		icon: '<i class="fi fi-sr-users" style="font-size: 70%"></i>',
	},
	{
		code: "reporting",
		color: "purple-lighten-4",
		icon: '<i class="fi fi-sc-newspaper" style="font-size: 70%"></i>',
	},
	{
		code: "leave",
		color: "pink-lighten-3",
		icon: '<i class="fi fi-br-house-user" style="font-size: 60%"></i>',
	},
	{
		code: "exchange",
		color: "lime",
		icon: '<i class="fi fi-sc-file-export" style="font-size: 60%"></i>',
		//
	},
];

const accessSteps = [
	{
		id: 1,
		title: "Planifier un rendez-vous avec notre équipe commerciale",
		description:
			"Organisez un entretien avec notre équipe commerciale. En seulement un échange, nous déployons votre environnement complet dans les 30 minutes suivant la fin de la rencontre.",
	},
	{
		id: 2,
		title: "Recevoir vos accès par e-mail",
		description:
			"À la suite du déploiement, vous recevez directement par e-mail toutes les informations nécessaires pour accéder à votre plateforme.",
	},
	{
		id: 3,
		title: "Ajouter vos collaborateurs et profiter pleinement de Tarico HR",
		description:
			"Ajoutez vos nouvelles recrues ainsi que vos employés actuels, et exploitez toutes les fonctionnalités de Tarico HR pour optimiser la gestion de vos effectifs.",
	},
];

const contractDetails = [
	{
		id: 1,
		title: "Création de contrat rapide et simple",
		description:
			"Créez vos contrats de travail en quelques clics grâce à des modèles prêts à l’emploi.",
		u: "/images/03.png",
	},
	{
		id: 2,
		title: "Personnaliser vos modèles",
		description:
			"Adaptez facilement vos modèles de contrat aux besoins spécifiques de votre entreprise.",
		u: "/images/02.png",
	},
	{
		id: 3,
		title: "Recevoir des alertes sur l'état des contrats",
		description:
			"Soyez informé en temps réel de l’avancement et des changements de statut de vos contrats.",
		u: "/images/04.png",
	},
];
</script>

<template>
	<v-app>
		<section class="pg-hr-index--hero-1">
			<div class="pg-hr-index--hero__back"></div>

			<div
				style="font-size: 24px; max-width: 882px; position: relative"
				class="my-16 pa-10 mx-auto"
			>
				<div
					class="text-center mb-3 mx-auto overflow-hidden flex-column text-h4"
					style="height: 60px"
				>
					<!-- Tarico HR pour -->
					<swiper
						:modules="[Autoplay, Navigation, Pagination]"
						:auto-height="true"
						:direction="'vertical'"
						:loop="true"
						:autoplay="{
							delay: 2000,
							disableOnInteraction: false,
						}"
						:allow-touch-move="false"
						:pagination="false"
						:navigation="false"
						style="height: 70px"
					>
						<swiper-slide v-for="module in modules" :key="module.code">
							<div class="d-flex align-center justify-center h-100">
								<div
									:class="[`bg-${module.color}`]"
									class="px-2 d-flex align-center ga-1"
									style="line-height: 1; height: 50px"
								>
									<span v-html="module.icon"></span>
									<div>
										{{ module.code }}
									</div>
								</div>
							</div>
						</swiper-slide>
					</swiper>
				</div>
				<!-- v-html="$t('pages.hr.index.description.text')" -->
				<h1 class="text-center pg-hr-index__title">
					{{ $t("pages.hr.index.hero.title") }}
				</h1>

				<div class="text-center">
					<p class="text-center text-body-2 mt-16">
						{{ $t("pages.hr.quote.sentencties.one") }}
					</p>
					<v-btn color="primary" variant="flat" class="mt-3">
						{{ $t("pages.hr.quote.getQuote") }}
					</v-btn>
				</div>
				<!-- <v-text-field
          variant="solo"
          class="mt-5"
          placeholder="Votre adresse email"
          flat
          rounded
        >
          <template #prepend-inner>
            <i class="fi fi-rr-at ml-3"></i>
          </template>
          <template #append-inner>
            <v-btn color="primary" variant="flat" rounded>
              Essayer Tarico HR
            </v-btn>
          </template>
        </v-text-field> -->
			</div>
		</section>

		<section class="py-16">
			<v-container>
				<v-row>
					<v-col v-for="(item, i) in services" :key="i" cols="12" sm="6" md="4">
						<div class="rounded pa-5 h-100" style="">
							<ui-svg :name="item.icon" size="64" />
							<div class="mt-2 font-weight-bold text-h5">
								{{ $t(`taricohr.services.${i}.title`) }}
							</div>
							<p class="mt-3">
								{{ $t(`taricohr.services.${i}.description`) }}
							</p>
						</div>
					</v-col>
				</v-row>
			</v-container>
		</section>

		<section class="pt-16 border-t">
			<v-container class="py-16">
				<v-row justify="center">
					<v-col cols="12" md="8">
						<v-container>
							<h2 class="text-center text-h6 text-md-h4 text-lg-h3">
								Créez, gérez et suivez vos contrats de travail en toute
								simplicité.
							</h2>
							<p class="text-center mt-2">
								Gérez l’intégralité du cycle de vie de vos contrats de travail
								depuis une interface simple et intuitive. Créez vos documents en
								quelques clics, suivez leur statut en temps réel et assurez-vous
								qu’ils respectent la législation locale. Avec Tarico HR, gagnez
								du temps, réduisez les erreurs et centralisez toutes vos données
								contractuelles au même endroit.
							</p>
						</v-container>
					</v-col>

					<v-col cols="12">
						<v-row>
							<v-col
								v-for="(details, d) in contractDetails"
								:key="d"
								cols="12"
								sm="4"
							>
								<h3 class="text-h5 text-center">
									{{ details.title }}
								</h3>
								<p class="text-center mb-5 mt-2">
									{{ details.description }}
								</p>
								<img :src="details.u" class="d-block w-100" />
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</v-container>
		</section>

		<section
			class="py-16 bg-grey-lighten-5 rounded-b-xl border-b"
			style="box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 24px"
		>
			<v-container>
				<v-row>
					<v-col cols="12" sm="6">
						<h2 class="text-h4 mb-3 font-weight-bold" style="max-width: 400px">
							Commencez avec Tarico HR en trois étapes clés
						</h2>
						<div v-for="(step, i) in accessSteps" :key="i" class="mt-5">
							<div class="d-flex ga-3 align-center">
								<div>
									<div class="d-flex justify-center" style="width: 50px">
										<span
											class="rounded-pill bg-teal-lighten-3"
											style="
												width: 30px;
												height: 30px;
												display: flex;
												align-items: center;
												justify-content: center;
											"
										>
											{{ step.id }}
										</span>
									</div>
								</div>

								<div class="font-weight-bold py-3">
									{{ step.title }}
								</div>
							</div>

							<div class="d-flex ga-3 mt-2">
								<div>
									<div class="d-flex justify-center h-100" style="width: 50px">
										<div class="border h-100"></div>
									</div>
								</div>

								<div>
									{{ step.description }}
								</div>
							</div>
						</div>

						<v-btn
							color="dark"
							variant="flat"
							size="large"
							class="mt-5 ml-16"
							rounded
						>
							Je me lance
						</v-btn>
					</v-col>
				</v-row>
			</v-container>
		</section>

		<section class="text-center bg-primary pg-hr-home--herodd d-none" style="">
			<v-container style="max-width: 992px">
				<ui-svg name="hr/brainstorming" size="64" />
				<h1 class="pg-home__title font-weight-bold">
					{{ $t("pages.hr.index.hero.title") }}
				</h1>

				<!-- <v-btn
          color="primary"
          variant="flat"
          size="x-large"
          class="mt-5"
          rounded="pill"
          style="border-radius: 0.6em"
          :to="$localePath({ name: 'products' })"
        >
          <template #prepend>
            <i class="fi fi-br-grid"></i>
          </template>
          {{ $t("pages.index.sections.one.cta") }}
          <template #append> </template>
        </v-btn> -->
			</v-container>

			<img
				:src="'/images/Tarico_HR-screenshot-01.png'"
				alt="Tarico HR Screenshot"
				style="width: 90%; max-width: 882px"
				class="mt-5"
			/>
		</section>

		<section class="pt-16">
			<v-container class="py-0">
				<v-row>
					<v-col
						cols="12"
						lg="6"
						class="justify-end d-flex flex-column"
						style="position: relative"
					>
						<img :src="'/public/images/01.png'" class="d-block w-100" />

						<div
							v-if="$vuetify.display.mdAndDown"
							style="position: absolute; bottom: 50px; left: 20px"
						>
							<v-btn color="dark" variant="flat" size="large" rounded>
								Découvir
							</v-btn>
						</div>
					</v-col>
					<v-col cols="12" lg="6" class="mb-16 justify-end d-flex flex-column">
						<v-container>
							<h2 class="text-h6 text-md-h4 text-lg-h3">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Similique consectetur nesciunt
							</h2>
							<p class="mt-2">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
								perspiciatis quaerat? Labore dignissimos fugiat sapiente a
								tenetur quae. Quia, harum. Est suscipit ullam delectus provident
								nobis, modi ducimus culpa totam.
							</p>
							<div v-if="$vuetify.display.lgAndUp" class="mt-5">
								<v-btn color="dark" variant="tonal" rounded>Découvir</v-btn>
							</div>
						</v-container>
					</v-col>
				</v-row>
			</v-container>
		</section>

		<section class="pg-hr-index--description" style="">
			<!-- <img
        src="/images/people.png"
        alt="tarico"
        style="
          width: 100%;
          object-position: center;
          object-fit: cover;
          position: absolute;
          inset: 0;
        "
      /> -->

			<div
				style="font-size: 24px; max-width: 882px; position: relative"
				class="bg-black pa-10 my-16"
			>
				<img
					src="/logo/tarico-hr.png"
					alt="Tarico HR logo"
					style="width: 50px"
				/>

				<p class="mt-5" v-html="$t('pages.hr.index.description.text')"></p>
			</div>
			<v-btn
				v-if="!$slots.cta"
				variant="flat"
				size="x-large"
				color="orange"
				rounded
				:to="$localePath({ name: 'contact', query: { for: 'tarico-hr:demo' } })"
			>
				<template #prepend>
					<i class="fi fi-rr-daily-calendar"></i>
				</template>
				Demander un démo
			</v-btn>
		</section>
	</v-app>
</template>

<style lang="scss">
.pg-hr-index--hero-1 {
	position: relative;
	padding-bottom: 80px;
	display: flex;
	align-items: center;
	min-height: calc(100dvh - 80px);

	.pg-hr-index--hero__back {
		overflow: hidden;
		position: absolute;
		left: 0;
		top: -80px;
		width: 100%;
		height: calc(100% + 80px);
		z-index: 0;

		background: linear-gradient(
			to bottom right,
			rgba(var(--v-theme-secondary), 0.1) 0%,
			rgba(var(--v-theme-secondary), 0) 100%
		);

		&::before {
			content: "";
			background-image: url("/images/grid.svg");
			position: absolute;
			inset: 0;
			background-position: center;
			background-size: cover;
			opacity: 0.02;
			bottom: green;
		}
	}

	.pg-hr-index__title {
		font-size: 3.2rem;
		line-height: 1;
		font-weight: bold;

		@media (max-width: 812px) {
			font-size: 3rem;
		}

		@media (max-width: 662px) {
			font-size: 2rem;
		}
	}
}

.pg-hr-home--hero {
	min-height: calc(100lvh);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	position: relative;
	padding-top: 70px;
	padding-bottom: 70px;
	background-color: transparent !important;

	> * {
		position: relative;
		z-index: 2;
	}

	&::before {
		position: absolute;
		content: "";
		inset: 0;
		top: -80px;
		// background: linear-gradient(
		//   165deg,
		//   rgba(var(--v-theme-secondary), 0.3) 0%,
		//   rgba(var(--v-theme-secondary), 0) 100%
		// );
		background: linear-gradient(
			to bottom right,
			rgba(var(--v-theme-secondary), 0.3) 0%,
			rgba(var(--v-theme-primary)) 100%
		);
	}

	.pg-home__title {
		font-size: clamp(2rem, 8.2352941176vw, 4.4rem);
		line-height: 1.1;
	}
}

.pg-hr-index--description {
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
