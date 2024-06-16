import cities from "../../data/places/cities.json";
import countries from "../../data/places/countries.json";

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

  if (query.category === "cities") {
    return cities;
  } else if (query.category === "countries") {
    return countries;
  }
});
