<script lang="ts" setup>
const i18n = useI18n();
const isScrolled = ref(false);

onMounted(() => {
	addEventListener("scroll", onScroll);
});

function onScroll() {
	isScrolled.value = window.scrollY > 0;
}

onDeactivated(destroy);
onBeforeUnmount(destroy);
function destroy() {
	removeEventListener("scroll", onScroll);
}
</script>

<template>
	<div
		:class="{ isScrolled }"
		class="ui-header"
		style="position: absolute; top: 0; width: 100%"
	>
		<ui-frame :hide-border="!isScrolled" class="my-0 pb-0 pt-3" fluid>
			<!-- <transition
				enter-active-class="animate__slideInDown"
				leave-active-class="animate__slideOutUp"
			>
				<v-col
					v-if="!isScrolled"
					class="frame border-t-0 animate__animated"
					cols="12"
					style="--animate-duration: 250ms"
				>
					<div class="px-2 d-flex align-center ga-2">
						<v-spacer />

						<template
							v-if="$route.name?.toString().split('___')[0] !== 'contact'"
						>
							<ui-call-me>
								<template #activator="{ props }">
									<v-btn
										v-bind="props"
										color="dark"
										variant="text"
										rounded="0"
										data-gtm="cta_book_demo"
									>
										<template #prepend>
											<i
												class="fi fi-rr-phone-plus"
												style="font-size: 17px"
											></i>
										</template>
										{{ $t("callMe.title") }}
									</v-btn>
								</template>
							</ui-call-me>

							<v-btn
								v-if="!$vuetify.display.xs"
								:to="$localePath({ name: 'contact' })"
								size="small"
								color="dark"
								rounded="0"
								variant="text"
								:icon="$vuetify.display.xs"
							>
								<template #prepend>
									<i class="fi fi-rr-comment-alt" style="font-size: 17px"></i>
								</template>
								<span v-if="!$vuetify.display.xs">
									{{ $t("words.contactUs") }}
								</span>
								<i
									v-else
									class="fi fi-rr-comment-alt"
									style="font-size: 17px"
								></i>
							</v-btn>
						</template>

						<v-btn size="32" color="dark" rounded="0" variant="text" icon>
							<ui-svg name="language" size="16" />
						</v-btn>

						<ui-theme />
					</div>
				</v-col>
			</transition> -->
			<v-col class="frame" cols="12">
				<div class="d-flex align-center h-100 ga-2">
					<nuxt-link
						class="d-flex align-center text-dark overflow-hidden pa-1 mx-3"
						:to="$localePath({ name: 'index' })"
						style="
							width: max-content;
							display: flex;
							align-items: center;
							gap: 5px;
						"
					>
						<div
							class="bg- text-primary"
							style="
								width: 32px;
								height: 32px;
								display: flex;
								align-items: center;
								justify-content: center;
								border-radius: 0.12em;
							"
						>
							<ui-svg name="logo-v2" style="width: 100%" />
						</div>

						<div v-if="!$vuetify.display.xs" style="font-size: 26px">
							Tarico
						</div>
					</nuxt-link>

					<v-spacer />

					<div v-if="$vuetify.display.mdAndUp" class="d-flex align-center ga-5">
						<v-menu
							location="bottom center"
							max-width="332"
							offset="15"
							open-on-hover
						>
							<template #activator="{ props }">
								<div
									v-bind="props"
									variant="text"
									class="ui-link"
									:to="$localePath({ name: 'products' })"
								>
									{{ $t("words.products") }}
								</div>
							</template>

							<v-card>
								<nuxt-link
									v-for="code in ['team', 'hiring', 'pay', 'heavy', 'database']"
									:key="code"
									:to="$localePath(Products[code].to)"
									style="text-wrap: pretty"
									class="mx-5 border-b py-3 d-block ui-header-product-item"
								>
									<h3
										class="text-body-1"
										style="text-wrap: balance"
										v-html="Products[code].name"
									></h3>

									<p
										style="text-wrap: pretty; hyphens: auto; opacity: 0.5"
										v-html="$t(`products.${code}.intro`)"
									></p>
								</nuxt-link>

								<nuxt-link
									style="background-color: rgba(var(--v-theme-surface), 0.5)"
									class="w-100 px-5 py-2 d-flex align-center ga-2"
									:to="$localePath({ name: 'products' })"
								>
									{{ $t("words.allProducts") }}

									<v-spacer />

									<i class="fi fi-rr-arrow-right text-dark"></i>
								</nuxt-link>
							</v-card>
						</v-menu>

						<nuxt-link
							variant="text"
							class="ui-link"
							:to="$localePath({ name: 'id' })"
						>
							Tarico <b>ID</b>
						</nuxt-link>

						<nuxt-link class="ui-link" :to="$localePath({ name: 'contact' })">
							{{ $t("words.contactUs") }}
						</nuxt-link>

						<nuxt-link
							variant="text"
							class="ui-link"
							:to="$localePath({ name: 'company' })"
						>
							{{ $t("words.company") }}
						</nuxt-link>
					</div>

					<v-spacer />

					<v-btn
						v-if="!$vuetify.display.xs"
						color="background"
						class="border"
						variant="flat"
						rounded="0"
						:to="$localePath({ name: 'app' })"
						target="__blank"
					>
						{{ $t("words.signin") }}
					</v-btn>

					<v-btn
						color="primary"
						variant="flat"
						rounded="0"
						:to="$localePath({ name: 'app' })"
						target="__blank"
					>
						{{ $t("words.signup") }}
					</v-btn>

					<div class="pr-3"></div>
				</div>
			</v-col>
		</ui-frame>
	</div>
</template>

<style lang="scss">
.ui-header {
	position: fixed !important;
	top: 0;
	z-index: 100;
	background-color: rgba(var(--v-theme-background), 0.2);
	backdrop-filter: blur(0.3rem);

	&.isScrolled {
		background-color: rgba(var(--v-theme-background), 0.2);
		backdrop-filter: blur(0.9rem);
	}
}

.ui-header-product-item {
	color: rgba(var(--v-theme-on-background));

	&:hover {
		color: rgba(var(--v-theme-primary));
	}
}
</style>
