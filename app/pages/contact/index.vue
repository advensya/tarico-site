<script lang="ts" setup>
import { VForm } from "vuetify/components";
import * as v from "valibot";

defineI18nRoute({
	paths: {
		fr: "/nous-contacter",
	},
});

const { $i18n } = useNuxtApp();
const i18n = useI18n();
const submiting = ref(false);

const state = ref<{ [key: string]: string }>({});
const errors = ref<{ [key: string]: string }>({});

const schema = v.object({
	firstName: v.pipe(v.string("form.errors.fieldRequired")),
	lastName: v.pipe(v.string("form.errors.fieldRequired")),
	workEmail: v.pipe(
		v.string("form.errors.fieldRequired"),
		v.email("form.errors.invaliEmail")
	),
	phone: v.pipe(v.string("form.errors.fieldRequired")),

	companyName: v.pipe(v.string("form.errors.fieldRequired")),
	companySize: v.pipe(v.string("form.errors.fieldRequired")),

	message: v.pipe(v.string("form.errors.fieldRequired")),
});

const validateForm = () => {
	const result = v.safeParse(schema, state.value);
	errors.value = {};

	if (result.issues) {
		result.issues.forEach((issue) => {
			if (!issue.path) return;

			const key = issue.path[0].key as string;
			errors.value[key] = issue.message;
		});

		return false;
	}

	return true;
};

const handleSubmit = async () => {
	if (validateForm()) {
		submiting.value = false;

		const content = [];

		for (const key of Object.keys(state.value)) {
			const row = `${key}: ${state.value[key]}`;
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
};

useSeoMeta({
	title: i18n.t("pages.contact.meta.title"),
	description: i18n.t("pages.contact.meta.description"),
});

const messages = ref<Array<{ text: string; color: string }>>([]);
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
		<v-col cols="12" sm="6" md="4" class="frame">
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
		<v-col cols="12" sm="6" md="4" class="frame">
			<v-btn
				size="x-large"
				variant="text"
				color="dark"
				href="mailto:saliou.diop@tarico.space"
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
		<v-col cols="12" sm="6" md="4" class="frame">
			<v-btn
				size="x-large"
				variant="text"
				color="dark"
				href="mailto:contact@tarico.space"
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
				<v-form @submit.prevent="handleSubmit">
					<v-text-field
						:label="$t('words.firstName')"
						v-model="state.firstName"
						:error-messages="errors.firstName"
					/>

					<v-text-field
						:label="$t('words.lastName')"
						v-model="state.lastName"
						:error-messages="errors.firstName"
					/>

					<v-text-field
						:label="$t('words.workEmail')"
						type="email"
						v-model="state.workEmail"
						:error-messages="errors.workEmail"
					/>

					<v-text-field
						:label="$t('words.phone')"
						type="phone"
						v-model="state.phone"
						:error-messages="errors.phone"
					/>

					<!-- spacing -->

					<v-text-field
						:label="$t('words.companyName')"
						type="text"
						v-model="state.companyName"
						:error-messages="errors.companyName"
					/>

					<v-select
						:label="$t('words.companySize')"
						type="text"
						v-model="state.companySize"
						:error-messages="errors.companySize"
						:items="[
							{
								value: '1-20',
								title: `1-20 ${$t('words.persons')}`,
							},
							{
								value: '21-200',
								title: `21-200 ${$t('words.persons')}`,
							},
							{
								value: '200-500',
								title: `200-500 ${$t('words.persons')}`,
							},
							{
								value: '501-2000',
								title: `501-2000 ${$t('words.persons')}`,
							},
							{
								value: '+2000',
								title: `+2000 ${$t('words.persons')}`,
							},
						]"
					/>

					<!-- spacing -->

					<v-textarea
						:label="$t('pages.contact.form.message')"
						type="text"
						v-model="state.message"
						:error-messages="errors.message"
					/>

					<v-btn type="submit">submit</v-btn>
				</v-form>
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
