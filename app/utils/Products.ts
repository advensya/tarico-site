import type { RouteLocationAsRelativeGeneric } from "vue-router";

export interface IProductPlanFormule {
	title: string;
	price: { xof: number } | "$sale";
	ideal: boolean;
	features: string[];
}

export interface IProductPlan {
	yearlReduction?: number;
	applyTo: "user" | "employee" | "organization";
	frequency: "month" | "year";

	formule: {
		[key: string]: IProductPlanFormule;
	};
}

// Team

// Hiring

// Temps et Activité

// File Exchange

// Heavy

export interface IProduct {
	code: string;
	name: string;
	namePlain: string;
	logo?: string;
	to: RouteLocationAsRelativeGeneric;
	sections: string[];
	plans?: IProductPlan;
	prices?: { FREE: number; DECLIC: number; PREMIUM: number };
}

const products: { [key: string]: IProduct } = {
	hr: {
		code: "hr",
		name: "HR",
		namePlain: "HR",
		to: { name: "hr" },
		sections: [],
	},
	database: {
		code: "database",
		name: "Database",
		namePlain: "Database",
		sections: [],

		to: { name: "database" },

		prices: { FREE: 0, DECLIC: 600, PREMIUM: 1200 },

		plans: {
			yearlReduction: 20,
			applyTo: "user",
			frequency: "month",
			formule: {
				FREE: {
					title: "Free",
					price: { xof: 0 },
					ideal: false,
					features: ["16", "17", "18", "19", "20", "05", "21", "07", "22"],
				},
				DECLIC: {
					title: "Déclic",
					price: { xof: 1100 },
					ideal: true,
					features: ["23", "24", "25", "19", "20", "05", "21", "07", "22"],
				},
				PREMIUM: {
					title: "Premium",
					price: { xof: 1500 },
					ideal: false,
					features: [
						"26",
						"02",
						"27",
						"28",
						"29",
						"30",
						"31",
						"32",
						"22",
						"33",
					],
				},
				ENTERPRISE: {
					title: "Entreprise",
					price: "$sale",
					ideal: false,
					features: [
						"01",
						"02",
						"03",
						"04",
						"05",
						"06",
						"07",
						"08",
						"09",
						"10",
						"11",
						"12",
						"13",
						"14",
						"15",
					],
				},
			},
		},
	},
	team: {
		code: "team",
		name: "Team",
		namePlain: "Team",
		to: { name: "products-code", params: { code: "team" } },
		sections: ["hr"],
		prices: { FREE: 0, DECLIC: 600, PREMIUM: 1200 },
	},
	id: {
		code: "id",
		name: "Tarico <b>ID</b>",
		namePlain: "Tarico ID",
		to: { name: "id" },
		sections: [],
	},
	onboarding: {
		code: "onboarding",
		name: "Onboarding",
		namePlain: "Onboarding",
		to: { name: "products-code", params: { code: "onboarding" } },
		sections: ["hr"],
		prices: { FREE: 600, DECLIC: 600, PREMIUM: 1200 },
	},
	heavy: {
		code: "heavy",
		name: "Heavy",
		namePlain: "Heavy",
		to: { name: "products-code", params: { code: "heavy" } },
		sections: [],
		prices: { FREE: 0, DECLIC: 600, PREMIUM: 1200 },

		plans: {
			applyTo: "user",
			frequency: "month",
			formule: {
				FREE: {
					title: "Free",
					price: { xof: 0 },
					ideal: false,
					features: ["01", "02", "03", "04", "05", "06", "12"],
				},
				DECLIC: {
					title: "Déclic",
					price: { xof: 1100 },
					ideal: false,
					features: [
						"01",
						"02",
						"03",
						"04",
						"05",
						"06",
						"07",
						"08",
						"09",
						"10",
						"12",
					],
				},
				PREMIUM: {
					title: "Premium",
					price: { xof: 1500 },
					ideal: true,
					features: [
						"01",
						"02",
						"03",
						"04",
						"05",
						"06",
						"07",
						"08",
						"09",
						"10",
						"11",
						"12",
						"13",
						"14",
						"15",
					],
				},
				ENTERPRISE: {
					title: "Entreprise",
					price: "$sale",
					ideal: false,
					features: [
						"01",
						"02",
						"03",
						"04",
						"05",
						"06",
						"07",
						"08",
						"09",
						"10",
						"11",
						"12",
						"13",
						"14",
						"15",
						"16",
						"17",
						"18",
						"19",
						"20",
						"21",
						"22",
						"23",
						"24",
						"25",
						"26",
						"27",
					],
				},
			},
		},
	},
	pay: {
		code: "pay",
		name: "Pay",
		namePlain: "Pay",
		to: { name: "products-code", params: { code: "pay" } },
		sections: ["hr"],
		prices: { FREE: 1200, DECLIC: 1800, PREMIUM: 2400 },
	},
	leave: {
		code: "leave",
		name: "Leave",
		namePlain: "Leave",
		to: { name: "products-code", params: { code: "leave" } },
		sections: ["hr"],
		prices: { FREE: 600, DECLIC: 600, PREMIUM: 1200 },
	},
	activity: {
		code: "activity",
		name: "Temps et activité",
		namePlain: "Temps et activité",
		to: { name: "products-code", params: { code: "activity" } },
		sections: ["hr"],
		prices: { FREE: 0, DECLIC: 600, PREMIUM: 1200 },
	},
	hiring: {
		code: "hiring",
		name: "Hiring",
		namePlain: "Hiring",
		to: { name: "products-code", params: { code: "hiring" } },
		sections: ["hr"],
		prices: { FREE: 600, DECLIC: 600, PREMIUM: 1200 },
	},
	report: {
		code: "report",
		name: "Rapport d'activité",
		namePlain: "Rapport d'activité",
		to: { name: "products-code", params: { code: "report" } },
		sections: ["hr"],
		prices: { FREE: 0, DECLIC: 600, PREMIUM: 1200 },
	},
	// contrat: {
	// 	code: "contrat",
	// 	name: "Contrat",
	// 	namePlain: "Contrat",
	// 	to: { name: "products-code", params: { code: "contrat" } },
	// },
	// organigramme: {
	// 	code: "organigramme",
	// 	name: "Organigramme",
	// 	namePlain: "Organigramme",
	// 	to: { name: "products-code", params: { code: "organigramme" } },
	// },
};

export default products;
