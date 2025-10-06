<script lang="ts" setup>
const i18n = useI18n();

useHead({
	templateParams: {
		siteDescription: i18n.t("form.site.description"),
		siteName: "Tarico FORM",
	},
});

const tiers = {
	webhook: { title: "Webhooks" },
	"google-drive": { title: "Google Drive" },
	airtable: { title: "Airtable" },
	notion: { title: "Notion" },
	"google-sheets": { title: "Google Sheets" },
	slack: { title: "Slack" },
};
</script>

<template>
	<div
		style="
			position: absolute;
			top: 0;
			width: 100%;
			height: 100lvh;
			overflow: hidden;
		"
	>
		<ui-svg
			name="outer"
			class="position-absolute"
			style="
				top: 0;
				left: 50%;
				width: 100%;
				min-width: 80rem;
				height: 100lvh;
				transform: translate(-50%, 0) rotate(0) skewX(0) skewY(0) scaleX(1)
					scaleY(1);
			"
		/>
	</div>

	<div class="pg-form-home--hero">
		<div class="pg-form-home--hero__back"></div>

		<v-container style="position: relative">
			<div class="pa-5 px-10">
				<v-row style="position: relative" justify="start">
					<v-col cols="12" md="8">
						<!-- <div class="text-">
							<v-chip
								color="secondary"
								variant="flat"
								size="small"
								rounded="0"
								class="mb-3"
							>
								{{ $t("pages.database.home.wedo") }}
							</v-chip>
						</div> -->
						<h1
							class="pg-form-home__title font-weight-bold"
							v-html="$t('pages.database.home.title')"
						></h1>
						<!-- <p style="font-size: 18px; max-width: 90%" class="mt-3 pa-0">
							{{ $t("pages.database.home.subtitle") }}
						</p> -->

						<v-btn
							:to="$localePath({ name: 'app' })"
							color="primary"
							variant="flat"
							class="mt-5"
							rounded="0"
						>
							{{ $t("pages.database.createForm") }}

							<template #prepend>
								<i class="fi fi-sr-plus"></i>
							</template>
						</v-btn>
					</v-col>
				</v-row>
			</div>
		</v-container>
	</div>

	<ui-frame
		class="my-0"
		style="--ui-frame-border-color: rgba(var(--v-border-color), 1)"
	>
		<v-col v-for="i in 4" :key="i" cols="12" md="4" sm="6" lg="3" class="frame">
			<div class="pa-5 position-relative h-100 bg-secondary">
				<i :class="$t(`products.database.functionalities.${i - 1}.icon`)"></i>
				<div
					class="font-weight-bold mt-5 mb-3"
					style="font-size: 22px; line-height: 1"
				>
					{{ $t(`products.database.functionalities.${i - 1}.title`) }}
				</div>
				<div>
					{{ $t(`products.database.functionalities.${i - 1}.description`) }}
				</div>
			</div>
		</v-col>
	</ui-frame>

	<ui-frame>
		<template #prepend>
			<p class="pa-5" style="max-width: 440px; width: 90%">
				{{ $t("pages.database.tiers.text") }}
			</p>
		</template>
		<v-col
			cols="12"
			md="4"
			sm="6"
			v-for="(tier, t) in tiers"
			:key="t"
			class="pa-2 frame"
		>
			<div class="pa-3 d-flex align-center ga-2">
				<div>
					<ui-svg :name="`tiers/${t}`" size="36" class="notfill" />
				</div>
				<div>
					<div class="font-weight-bold">
						{{ tier.title }}
					</div>
				</div>
			</div>
		</v-col>

		<template #append>
			<div class="pa-5">
				<v-btn
					:to="$localePath({ name: 'app' })"
					color="primary"
					variant="flat"
					class="mt-3"
					rounded="0"
				>
					{{ $t("pages.database.createForm") }}

					<template #prepend>
						<i class="fi fi-sr-plus"></i>
					</template>
				</v-btn>
			</div>
		</template>
	</ui-frame>

	<ui-plan code="database" />

	<div class="pb-16 text-center">
		<v-btn
			:to="$localePath({ name: 'app' })"
			color="primary"
			variant="flat"
			rounded="0"
		>
			{{ $t("words.startFree") }}

			<template #prepend>
				<i class="fi fi-sr-plus"></i>
			</template>
		</v-btn>
	</div>
</template>

<style scoped lang="scss">
.pg-form-home--hero {
	// height: calc(100dvh - 80px);
	position: relative;
	padding-top: 80px;
	padding-bottom: 80px;
	display: flex;
	align-items: center;
	min-height: 420px;

	.pg-form-home--hero__back {
		overflow: hidden;
		position: absolute;
		left: 0;
		top: 0;
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
			opacity: 0.06;
		}

		svg {
			display: block;
			// position: absolute;
			inset: 0;
			opacity: 0.05;
		}
	}

	.pg-form-home__title {
		font-size: 3.2rem;
		line-height: 1;

		@media (max-width: 812px) {
			font-size: 3rem;
		}

		@media (max-width: 662px) {
			font-size: 2rem;
		}
	}
}
</style>
