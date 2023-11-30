// NOTE: async/await required om readBody
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return {
    isValid: true,
    body: body,
  };
});
