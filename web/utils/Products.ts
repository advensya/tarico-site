export interface IProduct {
  code: string;
  name: string;
  namePlain: string;
  logo: string;
  to: { name: string };
}

const products: { [key: string]: IProduct } = {
  hr: {
    code: "hr",
    name: "Tarico <b>HR<b>",
    namePlain: "Tarico HR",
    logo: "/logo/tarico-hr.png",
    to: { name: "hr" },
  },
  form: {
    code: "form",
    name: "Tarico <b>FORM<b>",
    namePlain: "Tarico FORM",
    logo: "/logo/tarico-form.png",
    to: { name: "form" },
  },
  id: {
    code: "id",
    name: "Tarico <b>ID<b>",
    namePlain: "Tarico ID",
    logo: "/logo/tarico-hr.png",
    to: { name: "id" },
  },
  onboarding: {
    code: "onboarding",
    name: "Tarico <b>Onboarding<b>",
    namePlain: "Tarico Onboarding",
    logo: "/logo/tarico-form.png",
    to: { name: "onboarding" },
  },
  heavy: {
    code: "onboarding",
    name: "Tarico <b>Heavy<b>",
    namePlain: "Tarico Heavy",
    logo: "/logo/tarico-form.png",
    to: { name: "heavy" },
  },
};

export default products;
