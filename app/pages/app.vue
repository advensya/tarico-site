<template>
	<div
		style="
			min-height: 100vh;
			display: flex;
			align-items: center;
			justify-content: center;
		"
	>
		<ui-hero-back-wall :class="{ mask: $vuetify.theme.current.dark }" />

		<v-container style="position: relative">
			<v-container :fluid="$vuetify.display.xs">
				<v-row>
					<v-col cols="12">
						<div class="px-5 position-relative text-center">
							<i class="fi fi-sr-tools text-h3 d-inline"></i>

							<p class="mt-2 mt-5">
								Notre plateforme est actuellement en cours de maintenance afin
								d’améliorer la qualité de nos services et de vous offrir une
								expérience toujours plus fluide. Pendant cette période,
								<b
									>Tarico reste bien entendu disponible et accessible via les
									liens mis à disposition</b
								>
								par notre équipe technique. Nous vous remercions pour votre
								compréhension et votre confiance.
							</p>

							<v-btn
								size="large"
								color="background"
								rounded="0"
								class="border mt-5"
								:to="$localePath({ name: 'contact-support' })"
							>
								<template #prepend>
									<i class="fi fi-ss-user-headset"></i>
								</template>

								{{ $t("components.footer.items.ressources.support") }}
							</v-btn>
						</div>
					</v-col>
					<v-col cols="12" md="4"></v-col>
				</v-row>
			</v-container>
		</v-container>
	</div>
</template>
