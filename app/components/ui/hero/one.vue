<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Swiper as SwiperClass } from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = ["team", "pay", "database", "heavy", "onboarding", "hiring"];
</script>

<template>
	<section class="tarico-hero-one" aria-labelledby="hero-title">
		<!-- <div class="back" aria-hidden="true"></div> -->
		<ui-hero-back-wall :class="{ masks: $vuetify.theme.current.dark }" />

		<div class="mb-auto" aria-hidden="true"></div>

		<v-container :fluid="$vuetify.display.xs">
			<v-row>
				<v-col cols="12">
					<div class="px-5 position-relative text-center">
						<h1
							id="hero-title"
							class="title"
							v-html="$t('hero.one.title')"
						></h1>
						<p class="mt-2 mb-10" v-html="$t('hero.one.text')"></p>

						<div
							class="d-flex align-center ga-2 flex-wrap mt-5 justify-center"
							role="group"
							aria-label="call to action"
						>
							<ui-call-me />

							<!-- <v-btn
                size="large"
                color="primary"
                rounded="0"
                :to="$localePath({ name: 'hr' })"
                :block="$vuetify.display.xs"
                :aria-label="$t('hero.one.cta')"
              >
                {{ $t("hero.one.cta") }}
              </v-btn> -->
							<v-btn
								color="surface"
								rounded="0"
								class="border"
								:to="$localePath({ name: 'products' })"
								:aria-label="$t('hero.one.all')"
							>
								{{ $t("hero.one.all") }}
							</v-btn>
						</div>
					</div>
				</v-col>
				<v-col cols="12" md="4"></v-col>
			</v-row>
		</v-container>

		<div class="mt-auto" aria-hidden="true"></div>

		<div class="bottom w-100">
			<ui-frame class="my-0" fluid>
				<template v-if="$vuetify.display.smAndDown">
					<v-col class="frame">
						<swiper
							:spaceBetween="0"
							:slidesPerView="'auto'"
							:grabCursor="true"
							:autoplay="{
								delay: 1600,
								pauseOnMouseEnter: true,
								disableOnInteraction: false,
							}"
							:allow-touch-move="false"
							:pagination="false"
							:navigation="false"
							:loop="true"
							:center-insufficient-slides="true"
							:modules="[Autoplay, Navigation, Pagination]"
							class="w-100"
							style="height: 60px"
							aria-label="Produits"
						>
							<swiper-slide
								v-for="code in products"
								:key="code"
								style="width: max-content"
							>
								<div class="h-100 d-flex align-center px-3">
									<nuxt-link
										:to="$localePath(Products[code].to)"
										v-html="Products[code].name"
										class="pa-3 text-center d-block text-dark"
										:title="Products[code].namePlain"
									></nuxt-link>
								</div>
							</swiper-slide>
						</swiper>
					</v-col>
				</template>
				<template v-else>
					<v-col v-for="code in products" :key="code" class="frame">
						<div class="pa-3 text-center d-flex justify-center">
							<nuxt-link
								:to="$localePath(Products[code].to)"
								v-html="Products[code].name"
								class="ui-link"
								:title="Products[code].namePlain"
							></nuxt-link>
						</div>
					</v-col>
				</template>
			</ui-frame>
		</div>
	</section>
</template>

<style lang="scss">
.tarico-hero-one {
	position: relative;
	display: flex;
	flex-direction: column;
	overflow: hidden;

	.back {
		overflow: hidden;
		position: absolute;
		inset: 0;
		z-index: 0;

		background: rgb(var(--v-theme-dark), 0.04);
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

	.title {
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

	.bottom {
		position: relative;
		box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
			rgba(0, 0, 0, 0.22) 0px 15px 12px;

		--v-border-opacity: 0.05;

		&::before {
			position: absolute;
			content: "";
			inset: 0;
			background-color: rgba(var(--v-theme-background), 1);
			z-index: 0;
		}
	}
}
</style>
