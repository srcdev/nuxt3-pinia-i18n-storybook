export default defineEventHandler(() => {
  const result = `<boolean xmlns="http://schemas.microsoft.com/2003/10/Serialization/">true</boolean>`;

  return result;

  // return {
  //   statusCode: 200,
  //   contentType: "application/xml; charset=utf-8",
  //   data: result
  // };
});
