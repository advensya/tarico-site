export interface IProduct {
  code: string;
  name: string;
  logo: string;
  to: { name: string };
}

const products: { [key: string]: IProduct } = {
  hr: {
    code: "hr",
    name: "Tarico <b>HR<b>",
    logo: "/logo/tarico-hr.png",
    to: { name: "hr" },
  },
  form: {
    code: "form",
    name: "Tarico <b>FORM<b>",
    logo: "/logo/tarico-form.png",
    to: { name: "form" },
  },
  id: {
    code: "id",
    name: "Tarico <b>ID<b>",
    logo: "/logo/tarico-hr.png",
    to: { name: "id" },
  },
  onboarding: {
    code: "onboarding",
    name: "Tarico <b>Onboarding<b>",
    logo: "/logo/tarico-form.png",
    to: { name: "onboarding" },
  },
  heavy: {
    code: "onboarding",
    name: "Tarico <b>Heavy<b>",
    logo: "/logo/tarico-form.png",
    to: { name: "heavy" },
  },
};

export default products;
