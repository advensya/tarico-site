export interface IProduct {
  code: string;
  name: string;
  logo: string;
  to: { name: string };
}

const products: { [key: string]: IProduct } = {
  hr: {
    code: "hr",
    name: "TARICO <b>HR<b>",
    logo: "/logo/tarico-hr.png",
    to: { name: "hr" },
  },
  form: {
    code: "form",
    name: "TARICO <b>FORM<b>",
    logo: "/logo/tarico-form.png",
    to: { name: "form" },
  },
  id: {
    code: "id",
    name: "TARICO <b>ID<b>",
    logo: "/logo/tarico-hr.png",
    to: { name: "id" },
  },
  hiring: {
    code: "hiring",
    name: "TARICO <b>Hiring<b>",
    logo: "/logo/tarico-form.png",
    to: { name: "hr-hiring" },
  },
};

export default products;
