import heavy from "./products/heavy.json";
import { UseModel } from "@tarico/form";

export default defineNuxtPlugin((app) => {
	const { $i18n } = useNuxtApp();

	$i18n.mergeLocaleMessage("fr", { products: { heavy: heavy.fr } });

	$i18n.mergeLocaleMessage("fr", { form: UseModel.locale.fr });
	$i18n.mergeLocaleMessage("en", { form: UseModel.locale.en });

	if (typeof window !== "undefined") {
		// @ts-ignore
		window.$t = $i18n.t;
		// @ts-ignore
		window.$tm = $i18n.tm;
		// @ts-ignore
		window.$te = $i18n.te;
	}

	// const jsonFiles = import.meta.glob<Record<string, { default: any }>>(
	// 	"@/locales/*.json",
	// 	{ eager: true }
	// );

	// for (const key in jsonFiles) {
	// 	const lang = key.split("/").at(-1)!.replace(".json", "") as "fr";
	// 	$i18n.mergeLocaleMessage(lang, jsonFiles[key].default);
	// }
});
