import heavy from "./products/heavy.json";
import activity from "./products/activity.json";
import exchange from "./products/exchange.json";
import health from "./products/health.json";
import hiring from "./products/hiring.json";
import leave from "./products/leave.json";
import onboarding from "./products/onboarding.json";
import pay from "./products/pay.json";
import report from "./products/report.json";
import team from "./products/team.json";

import { UseModel } from "@tarico/form";

export default defineNuxtPlugin((app) => {
	const { $i18n } = useNuxtApp();

	$i18n.mergeLocaleMessage("fr", {
		products: {
			heavy: heavy.fr,
			activity: activity.fr,
			exchange: exchange.fr,
			health: health.fr,
			hiring: hiring.fr,
			leave: leave.fr,
			onboarding: onboarding.fr,
			pay: pay.fr,
			report: report.fr,
			team: team.fr,
		},
	});

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
