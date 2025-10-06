<template>
	<v-row>
		<v-col cols="12" md="6">
			<div class="pa-5">
				<h3
					id="products-main-title"
					class="text-h6"
					style="text-wrap: balance"
					v-html="Products.hr.name"
				></h3>

				<p
					id="prod-intro-hr"
					class="mt-2"
					style="text-wrap: pretty; hyphens: auto"
					v-html="$t(`products.hr.cards.one.title`)"
				></p>

				<p
					class="mt-5"
					style="text-wrap: pretty; hyphens: auto"
					v-html="$t(`products.hr.description`)"
				></p>

				<div class="mt-5">
					<h4 class="text-h6">
						{{ $t("products.hr.cards.one.subtitle") }}
					</h4>
					<div
						v-for="feature in ['01', '02', '03', '04']"
						:key="feature"
						class="d-flex align-center ga-2"
					>
						<i class="fi fi-ss-check-circle"></i>
						<span v-html="$t(`products.hr.features.${feature}.title`)"></span>
					</div>

					<div class="d-flex align-center ga-2 mt-5">
						<!-- <ui-svg name="lamp-2" size="24" aria-hidden="true" /> Jusqu’à -->
						{{ $t("products.hr.cards.one.savedTime") }}
					</div>
				</div>

				<div
					class="d-flex align-center ga-2 flex-wrap mt-5"
					role="group"
					:aria-label="$t('hero.one.cta')"
					:aria-describedby="'prod-intro-hr'"
				>
					<ui-book-demo
						product="hr"
						:aria-label="$t('products.hr.cards.one.bookDemo')"
					>
						<template #activator="{ props }">
							<v-btn
								v-bind="props"
								rounded="0"
								:aria-label="$t('products.hr.cards.one.bookDemo')"
							>
								{{ $t("products.hr.cards.one.bookDemo") }}
							</v-btn>
						</template>
					</ui-book-demo>

					<v-btn
						color="background"
						rounded="0"
						class="border"
						:to="$localePath(Products.hr.to)"
						:aria-label="$t('hero.one.cta')"
					>
						{{ $t("hero.one.cta") }}
					</v-btn>
				</div>
			</div>
		</v-col>

		<v-col cols="12" md="6"></v-col>
	</v-row>
</template>
