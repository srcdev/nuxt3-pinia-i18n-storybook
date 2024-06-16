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
    counties: [],
    terms: false
  };

  if (data !== null && query.readFile == "true") {
    return data;
  } else {
    return emptyFormData;
  }
});
