// NOTE: async/await required om readBody
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const body = await readBody(event);
  return {
    isValid: true,
    param1: query.param1,
    param2: query.param2,
    body: body,
  };
});
