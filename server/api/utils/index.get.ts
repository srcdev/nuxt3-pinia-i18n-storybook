import title from "../../data/utils/title.json";

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

  if (query.category === "title") {
    console.log(title);
    return title;
  }
});
