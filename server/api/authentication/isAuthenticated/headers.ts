export default defineEventHandler((req) => {
  const reqHeaders = req.headers;

  const headers = {
    reqHeaders
  };

  return headers;
});
