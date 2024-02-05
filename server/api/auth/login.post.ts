import { getUserByEmail } from "../models/users";

// NOTE: async/await required om readBody
export default defineEventHandler(async (event) => {
  // const body = await readBody(event);
  const body = await readBody<{ username: string; password: string; rememberMe: boolean }>(event);

  console.log("body: ", body);

  return {
    statusCode: 200,
    body: body,
  };

  // const { username, password, rememberMe } = body;
  // if (!username || !password) {
  //   return createError({
  //     statusCode: 400,
  //     message: "username address and password are required",
  //   });
  // }

  // const userWithPassword = await getUserByEmail(username);
  // if (!userWithPassword) {
  //   return createError({
  //     statusCode: 401,
  //     message: "Bad credentials",
  //   });
  // }

  // const verified = await verify(userWithPassword.password, password);
  // if (!verified) {
  //   return createError({
  //     statusCode: 401,
  //     message: "Bad credentials",
  //   });
  // }

  // const config = useRuntimeConfig();

  // const session = serialize({ userId: userWithPassword.id });
  // const signedSession = sign(session, config.cookieSecret);

  // setCookie(event, config.cookieName, signedSession, {
  //   httpOnly: true,
  //   path: "/",
  //   sameSite: "strict",
  //   secure: process.env.NODE_ENV === "production",
  //   expires: rememberMe ? new Date(Date.now() + config.cookieRememberMeExpires) : new Date(Date.now() + config.cookieExpires),
  // });

  // // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const { password: _password, ...userWithoutPassword } = userWithPassword;

  // return {
  //   user: userWithoutPassword,
  // };
});
