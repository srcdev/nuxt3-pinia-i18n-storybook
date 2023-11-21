export default defineEventHandler((event) => {
  console.log("Request: ", event.req.url);
});
