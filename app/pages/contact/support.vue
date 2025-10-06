<script lang="ts" setup>
import { VForm } from "vuetify/components";
import type { Options } from "@tarico/form";

const { $i18n } = useNuxtApp();
const i18n = useI18n();
const submiting = ref(false);
const { $trackEvent } = useNuxtApp();

useSeoMeta({
	title: i18n.t("pages.contact.meta.title"),
	description: i18n.t("pages.contact.meta.description"),
});

const options: Options = {
	schemaOptions: [
		{
			interface: {
				notEditable: true,
				type: "select",
				label: $i18n.t("pages.contact.support.form.type"),
			},
			key: "type",
			validators: {
				options: {
					args: [
						{
							title: "Anomalie",
							value: i18n.t("pages.contact.meta.types.bug"),
						},
						{
							title: "Amélioration",
							value: i18n.t("pages.contact.meta.types.feature"),
						},
						{
							title: "Question générale",
							value: i18n.t("pages.contact.meta.types.question"),
						},
						{
							title: "Retour d'expérience",
							value: i18n.t("pages.contact.meta.types.feedback"),
						},
						{
							title: "Problème de sécurité",
							value: i18n.t("pages.contact.meta.types.security_issue"),
						},
					],
				},
				required: true,
			},
		},
		{
			interface: {
				notEditable: true,
				type: "select",
				label: $i18n.t("pages.contact.support.form.priority"),
			},
			key: "priority",
			validators: {
				options: {
					args: [
						{
							title: "Urgent",
							value: i18n.t("pages.contact.meta.priorities.urgent"),
						},
						{
							title: "Haute",
							value: i18n.t("pages.contact.meta.priorities.high"),
						},
						{
							title: "Moyenne",
							value: i18n.t("pages.contact.meta.priorities.medium"),
						},
						{
							title: "Basse",
							value: i18n.t("pages.contact.meta.priorities.low"),
						},
						{
							title: "Non urgent",
							value: i18n.t("pages.contact.meta.priorities.non_urgent"),
						},
					],
				},
				required: true,
			},
		},
		{
			interface: {
				notEditable: true,
				type: "longtext",
				label: $i18n.t("pages.contact.support.form.description"),
			},
			key: "description",
			validators: { required: true },
		},

		{
			interface: {
				notEditable: true,
				type: "text",
				label: $i18n.t("pages.contact.support.form.name"),
			},
			key: "name",
			validators: { required: true },
		},
		{
			interface: {
				notEditable: true,
				type: "email",
				label: $i18n.t("pages.contact.support.form.email"),
			},
			key: "email",
			validators: { required: true },
		},

		{
			interface: {
				notEditable: true,
				type: "file",
				label: $i18n.t("pages.contact.support.form.files"),
			},
			key: "files",
			validators: {
				accepts: { args: [] },
				multiple: true,
			},
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
						<i class="fi fi-ss-user-headset text-h3 mb-3"></i>
						<h1 id="hero-title" class="title">
							{{ $t("pages.contact.support.title") }}
						</h1>
					</div>
				</v-col>
				<v-col cols="12" md="4"></v-col>
			</v-row>
		</v-container>

		<div class="mt-auto mb-10" aria-hidden="true"></div>
	</section>

	<ui-frame class="my-0">
		<v-col cols="12" class="frame">
			<v-btn
				size="x-large"
				variant="text"
				color="dark"
				href="mailto:support@tarico.io"
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
