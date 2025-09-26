<script lang="ts" setup>
import { VForm } from "vuetify/components";
import type { Options } from "@tarico/form";

defineI18nRoute({
	paths: {
		en: "/contact-us",
		fr: "/nous-contacter",
	},
});

const { $i18n } = useNuxtApp();
const i18n = useI18n();
const submiting = ref(false);

useSeoMeta({
	title: i18n.t("pages.contact.meta.title"),
	description: i18n.t("pages.contact.meta.description"),
});

const options: Options = {
	title: "Modifier",
	schemaOptions: [
		{
			interface: {
				type: "text",
				label: $i18n.t("words.firstName"),
			},
			key: "firstName",
			validators: { required: true },
		},
		{
			interface: {
				type: "text",
				label: $i18n.t("words.lastName"),
			},
			key: "lastName",
			validators: { required: true },
		},
		{
			interface: {
				type: "email",
				label: $i18n.t("words.workEmail"),
			},
			key: "email",
			validators: { required: true },
		},
		{
			interface: {
				type: "phone",
				label: $i18n.t("words.phone"),
			},
			key: "phone",
			validators: {},
		},
		{
			interface: { type: "spacing", size: 20 },
			key: "145856",
		},
		{
			interface: {
				type: "text",
				label: $i18n.t("words.companyName"),
			},
			key: "companyName",
			validators: {},
		},
		{
			interface: {
				type: "select",
				label: $i18n.t("words.companySize"),
			},
			key: "companySize",
			validators: {
				options: {
					args: [
						{
							value: "1-20",
							title: `1-20 ${$i18n.t("words.persons")}`,
						},
						{
							value: "21-200",
							title: `21-200 ${$i18n.t("words.persons")}`,
						},
						{
							value: "200-500",
							title: `200-500 ${$i18n.t("words.persons")}`,
						},
						{
							value: "501-2000",
							title: `501-2000 ${$i18n.t("words.persons")}`,
						},
						{
							value: "+2000",
							title: `+2000 ${$i18n.t("words.persons")}`,
						},
					],
				},
			},
		},
		{
			interface: { type: "spacing", size: 20 },
			key: "145856",
		},
		{
			key: "message",
			interface: {
				type: "longtext",
				label: $i18n.t("pages.contact.form.message"),
			},
			validators: { required: true },
		},
	],
	interfaces: {},
};

const messages = ref<Array<{ text: string; color: string }>>([]);

async function submit(value: { values: Record<string, any> }) {
	submiting.value = false;

	const content = [];

	for (const key of Object.keys(value.values)) {
		const i = options.schemaOptions!.findIndex((s) => s.key === key);
		const row = `${options.schemaOptions![i].interface!.label}: ${
			value.values[key]
		}`;
		content.push(row);
	}

	try {
		const { data: res } = await useFetch("/api/book-demo", {
			method: "POST",
			body: { content: content.join("\n") },
		});

		if (res.value?.success) {
			messages.value.push({
				text: i18n.t("callMe.successMessage"),
				color: "background",
			});
		} else {
			messages.value.push({
				text: $i18n.t("pages.contact.messages.error"),
				color: "red",
			});
		}
	} catch (error) {
		messages.value.push({
			text: $i18n.t("pages.contact.messages.error"),
			color: "red",
		});
	} finally {
		submiting.value = false;
	}
}
</script>

<template>
	<section class="pg-contact-hero" aria-labelledby="hero-title">
		<div class="back" aria-hidden="true"></div>

		<div class="mb-auto" style="margin-top: 100px" aria-hidden="true"></div>

		<v-container :fluid="$vuetify.display.xs">
			<v-row>
				<v-col cols="12">
					<div
						class="px-5 position-relative text-center d-flex align-center justify-center flex-column"
					>
						<i class="fi fi-sr-comment-alt text-h3 mb-3"></i>
						<h1 id="hero-title" class="title">
							{{ $t("pages.contact.title") }}
						</h1>
					</div>
				</v-col>
				<v-col cols="12" md="4"></v-col>
			</v-row>
		</v-container>

		<div class="mt-auto mb-10" aria-hidden="true"></div>
	</section>

	<ui-frame class="my-0">
		<v-col cols="12" sm="6" md="3" class="frame">
			<ui-call-me>
				<template #activator="{ props }">
					<v-btn
						v-bind="props"
						size="x-large"
						variant="text"
						color="dark"
						block
					>
						<template #prepend>
							<i class="fi fi-sr-phone-plus"></i>
						</template>
						<div
							style="
								white-space: normal;
								text-align: left;
								line-height: 1.1;
								font-size: 14px;
							"
						>
							{{ $t("callMe.title") }}
						</div>
					</v-btn>
				</template>
			</ui-call-me>
		</v-col>
		<v-col cols="12" sm="6" md="3" class="frame">
			<v-btn
				size="x-large"
				variant="text"
				color="dark"
				href="mailto:commercial@tarico.io"
				block
			>
				<template #prepend>
					<i class="fi fi-sr-store-buyer"></i>
				</template>
				<div
					style="
						white-space: normal;
						text-align: left;
						line-height: 1.1;
						font-size: 14px;
					"
				>
					{{ $t("components.footer.items.ressources.sales") }}
				</div>
			</v-btn>
		</v-col>
		<v-col cols="12" sm="6" md="3" class="frame">
			<v-btn
				size="x-large"
				variant="text"
				color="dark"
				:to="$localePath({ name: 'contact-support' })"
				block
			>
				<template #prepend>
					<i class="fi fi-ss-user-headset"></i>
				</template>
				<div
					style="
						white-space: normal;
						text-align: left;
						line-height: 1.1;
						font-size: 14px;
					"
				>
					{{ $t("components.footer.items.ressources.support") }}
				</div>
			</v-btn>
		</v-col>
		<v-col cols="12" sm="6" md="3" class="frame">
			<v-btn
				size="x-large"
				variant="text"
				color="dark"
				href="mailto:contact@tarico.io"
				block
			>
				<template #prepend>
					<i class="fi fi-rr-envelope-dot"></i>
				</template>
				<div
					style="
						white-space: normal;
						text-align: left;
						line-height: 1.1;
						font-size: 14px;
					"
				>
					{{ $t("words.sendMail") }}
				</div>
			</v-btn>
		</v-col>
	</ui-frame>

	<v-container class="pb-16" style="margin-top: 80px">
		<v-row>
			<v-col cols="12" sm="10" md="8">
				<form-model :options="options" @submit="submit">
					<template #submit-btn>
						<div class="w-100">
							<i18n-t
								keypath="bookDemo.privacy"
								tag="p"
								class="text-body-2 my-4"
								style="max-width: 350px"
							>
								<NuxtLink :to="$localePath({ name: 'privacy' })">
									{{ $t("privacy") }}
								</NuxtLink>
							</i18n-t>

							<div>
								<v-btn
									color="primary"
									class="mt-5"
									type="submit"
									:loading="submiting"
								>
									<template #append>
										<i class="fi fi-sr-paper-plane"></i>
									</template>
									{{ $t("pages.contact.form.submit") }}
								</v-btn>
							</div>
						</div>
					</template>
				</form-model>
			</v-col>
		</v-row>
	</v-container>

	<v-snackbar-queue v-model="messages"></v-snackbar-queue>
</template>

<style lang="scss">
.pg-contact-hero {
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
		// color: rgb(var(--v-theme-on-primary));

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
