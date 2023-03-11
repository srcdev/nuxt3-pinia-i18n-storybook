export const translations: any = {};
let locales = import.meta.glob("@/**/locales/**/*.json", {
  import: "default",
  eager: true,
}) as any;
const locale: string = "en";
Object.keys(locales).forEach((element) => {
  translations[locale] = {
    ...translations[locale],
    ...locales[element],
  };
});

export default translations;
