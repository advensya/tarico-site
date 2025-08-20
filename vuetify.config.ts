import type { ExternalVuetifyOptions } from "vuetify-nuxt-module";
import colors from "vuetify/util/colors";

const primaryColor = "#0310bf";
const secondaryColor = "#ffdf51";

export default {
  labComponents: [
    "VStepperVertical",
    "VStepperVerticalItem",
    "VStepperVerticalActions",
  ],

  theme: {
    defaultTheme: "light",

    themes: {
      light: {
        dark: false,
        colors: {
          primary: primaryColor,
          secondary: secondaryColor,
          surface: "#e7e7e7",
          dark: colors.grey.darken4,
        },
      },
      dark: {
        dark: false,
        colors: {
          primary: primaryColor,
          secondary: secondaryColor,
          dark: colors.grey.lighten5,
          background: "#0e0e0e",
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
    },
    VTextField: {
      flat: true,
      rounded: "lg",
    },
    VTextarea: {
      flat: true,
      rounded: "lg",
    },
    VSelect: {
      flat: true,
      rounded: "lg",

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
      VBtn: {
        color: "dark",
      },
    },

    VMenu: {
      offset: 5,
    },

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
