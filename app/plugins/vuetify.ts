import "vuetify/styles";
import { createVuetify } from "vuetify";
import type { ExternalVuetifyOptions } from "vuetify-nuxt-module";
import colors from "vuetify/util/colors";

export default defineNuxtPlugin((app) => {
	const primaryColor = "#0310bf";
	const secondaryColor = "#ffdf51";

	const dialog = {
		dark: "#1c1c1cff",
		light: "#ffffff",
	};

	const configs = {
		theme: {
			defaultTheme: "system",
			themes: {
				light: {
					dark: false,

					variables: {
						"border-opacity": 0.08,
						shadow:
							"rgba(0, 0, 0, 0.15) 0px 5px 15px 0px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;",
					},

					colors: {
						primary: primaryColor,
						secondary: secondaryColor,
						surface: "#e7e7e7",
						dark: colors.grey.darken4,
						dialog: dialog.light,
					},
				},

				dark: {
					dark: true,

					variables: {
						"border-opacity": 0.05,
						shadow:
							"rgba(0, 0, 0, 0.68) 0px 5px 15px 0px,rgba(119, 130, 149, 0.08) 0px 0px 0px 1px;",
					},

					colors: {
						primary: primaryColor,
						secondary: secondaryColor,
						dark: "#fff",
						background: "#0e0e0e",
						dialog: dialog.dark,
					},
				},
			},
		},

		defaults: {
			VAppBar: {
				color: "background",
				elevation: "0",
			},

			VTooltip: {
				contentClass: "bg-background border rounded-pill px-2 py-0",
				contentProps: { style: { fontSize: "12px" } },
			},

			VBtn: {
				style: { "text-transform": "none" },
				variant: "flat",
				color: "primary",
				rounded: "0",
			},
			VTextField: {
				flat: true,
				rounded: "0",
			},
			VTextarea: {
				flat: true,
				rounded: "0",
			},
			VSelect: {
				flat: true,
				rounded: "0",

				VMenu: {
					offset: 2,
				},
			},
			VNumberInput: {
				decimalSeparator: ",",

				VBtn: {
					variant: "text",
					color: "dark",
				},
			},
			VBottomSheet: {
				color: "background",
				bgColor: "background",
				inset: true,
			},

			VRow: { justify: "center" },

			VDatePicker: {
				VBtn: { color: "dark" },
			},

			VMenu: { offset: 5 },

			VCard: {
				color: "background",
				flat: true,
				rounded: 0,
			},

			VList: {
				bgColor: "transparent",
				rounded: 0,
			},
		},
	} satisfies ExternalVuetifyOptions;

	const vuetify = createVuetify(configs);
	app.vueApp.use(vuetify);

	return { provide: { vuetify } };
});
