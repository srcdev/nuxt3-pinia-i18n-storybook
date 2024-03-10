// NOTE: async/await required om POST readBody

import fse from "fs-extra";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const dataToWrite = {
    body
  };

  fse.writeFile("server/data/form/sample-form-data.json", JSON.stringify(body), "utf-8", (err: any) => {
    if (err) return console.log(err);
    console.log("File fetched from {JSON} Placeholder and written locally!");
  });

  return {
    isValid: true,
    body: body
  };
});
