// NOTE: async/await required om readBody

const sleep = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export default defineEventHandler((event) => {
  const query = getQuery(event);

  (async () => {
    await sleep(10000);
  })();

  return {
    isValid: true,
    param1: query.param1,
    param2: query.param2,
  };
});
