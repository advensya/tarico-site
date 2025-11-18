<script lang="ts" setup>
import * as v from "valibot";

const props = defineProps({ product: { type: String } });
const { $i18n } = useNuxtApp();

const state = ref<{ [key: string]: string }>({});
const errors = ref<{ [key: string]: string }>({});

const schema = v.object({
	name: v.pipe(v.string("form.errors.fieldRequired")),
	contact: v.pipe(v.string("form.errors.fieldRequired")),
	message: v.pipe(v.string("form.errors.fieldRequired")),
});

const openCal = ref<HTMLButtonElement>();
const messages = ref<Array<{ text: string; color: string }>>([]);
const submiting = ref(false);
const isDialogOpen = defineModel({ default: false });

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

		const content = [`procuct: ${props.product}`];

		for (const key of Object.keys(state.value)) {
			const row = `${key}: ${state.value[key]}`;
			content.push(row);
		}

		try {
			const { data: res } = await useFetch("/api/call-me", {
				method: "POST",
				body: { content: content.join("\n") },
			});

			if (res.value?.success) {
				isDialogOpen.value = false;
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

async function submit(value: { values: Record<string, any> }) {}
</script>

<template>
	<v-dialog v-model="isDialogOpen" max-width="662px">
		<template #activator="{ props }">
			<v-btn
				v-if="!$slots.activator"
				v-bind="props"
				color="primary"
				rounded="0"
			>
				{{ $t("callMe.title") }}
			</v-btn>

			<slot name="activator" :props />
		</template>

		<v-card>
			<div class="rounded-xl pa-5 pa-md-10 bg-background">
				<v-container>
					<div class="mb-5">
						{{ $t("callMe.text") }}
					</div>

					<v-form @submit.prevent="handleSubmit">
						<v-text-field
							:label="$t('callMe.fields.name')"
							v-model="state.name"
							:error-messages="errors.name"
						/>

						<v-text-field
							:label="$t('callMe.fields.contact')"
							v-model="state.contact"
							:error-messages="errors.contact"
						/>

						<v-textarea
							:label="$t('callMe.fields.message')"
							type="text"
							v-model="state.message"
							:error-messages="errors.message"
						/>

						<i18n-t keypath="bookDemo.privacy" tag="p" class="text-body-2">
							<NuxtLink :to="$localePath({ name: 'privacy' })">
								{{ $t("privacy") }}
							</NuxtLink>
						</i18n-t>

						<div class="mt-5"></div>

						<v-btn type="submit">
							{{ $t("callMe.submit") }}
						</v-btn>
					</v-form>
				</v-container>

				<button
					ref="openCal"
					data-cal-link="tarico/30min"
					data-cal-namespace="30min"
					data-cal-config='{"layout":"month_view"}'
					style="width: 0; height: 0; overflow: hidden"
				></button>

				<v-snackbar-queue v-model="messages"></v-snackbar-queue>
			</div>
		</v-card>
	</v-dialog>
</template>
