<script lang="ts" setup></script>

<template>
	<div class="pg-pricing--hero">
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
						<h1 class="title font-weight-bold mt-16">Plan & Pricing</h1>
						<!-- <p
							style="font-size: 18px; max-width: 90%"
							class="mt-3 pa-0"
							v-html="$t(`products.${product.code}.intro`)"
						></p> -->
					</v-col>
				</v-row>
			</div>
		</v-container>
	</div>

	<div>
		<ui-plan-formule> </ui-plan-formule>
	</div>
</template>

<style lang="scss" scoped>
.pg-pricing--hero {
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
