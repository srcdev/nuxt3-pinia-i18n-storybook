const config = useRuntimeConfig();

export default defineEventHandler(async (event) => {
  setCookie(event, config.public.cookieName, "", {
    httpOnly: true,
    path: "/",
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    expires: new Date(Date.now() - 1000)
  });

  return {
    statusCode: 200
  };
});
