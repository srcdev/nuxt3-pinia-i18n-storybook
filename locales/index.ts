export const translations: any = {};
let messages = import.meta.glob("@/**/locales/**/*.json", {
  import: "default",
  eager: true,
}) as any;

const locales: Object = ["en", "es"];

Object.entries(locales).forEach(([keys, value]) => {
  const localPath = `${value}.json`;
  Object.keys(messages).forEach((element) => {
    if (element.indexOf(localPath) > -1) {
      translations[value] = {
        ...translations[value],
        ...messages[element],
      };
    }
  });
});

export default translations;
