import data from "../../data/form/sample-form-data.json";
import type { IFieldsInitialState } from "@/types/types.forms";

export default defineEventHandler(async (event) => {
  const sleep = async (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const query = getQuery(event);

  let timeout = 0;
  if (typeof query.delay !== "undefined") {
    timeout = Number(query.delay);
  }

  await sleep(timeout);

  const emptyFormData = <IFieldsInitialState>{
    username: "",
    password: "",
    mobile: "",
    url: "",
    email: "",
    places: [],
    terms: false
  };

  console.log(`query.readFile: `, query.readFile);

  if (data !== null && query.readFile == "true") {
    console.log("IF");
    return data;
  } else {
    console.log("ELSE");
    return emptyFormData;
  }
});
