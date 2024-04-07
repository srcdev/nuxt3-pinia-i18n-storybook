import { getUserByEmail } from "../models/users";

// Define the Problem Details type
interface ProblemDetails {
  title: string;
  status: number;
  detail: string;
  instance?: string;
  balance?: number;
  accounts?: string[];
  documentation_url: string;
}

const config = useRuntimeConfig();

// NOTE: async/await required om readBody
export default defineEventHandler(async (event) => {
  // const body = await readBody(event);
  const body = await readBody<{ username: string; password: string; rememberMe: boolean }>(event);

  const { username, password, rememberMe } = body;
  if (!username || !password) {
    // return createError({
    //   statusCode: 400,
    //   message: "username address and password are required",
    // });

    const errorDetails: ProblemDetails = {
      title: "Username address and password are required",
      status: 403,
      detail: "Username is your email address and password is required.",
      instance: "/login",
      documentation_url: config.public.apiBaseURL + "/docs/errors#username-and-password-required"
    };

    return createError({
      statusCode: errorDetails.status,
      statusMessage: "error",
      stack: "",
      message: "Username and password are required",
      data: errorDetails
    });
  }

  // Does user exist?
  const userWithPassword = await getUserByEmail(username);
  if (!userWithPassword) {
    const errorDetails: ProblemDetails = {
      title: "Bad credentials",
      status: 401,
      detail: "Your username or password is incorrect. Please try again.",
      instance: "/login",
      documentation_url: config.public.apiBaseURL + "/docs/errors#bad-credentials"
    };

    return createError({
      statusCode: errorDetails.status,
      statusMessage: "error",
      stack: "",
      message: "Bad credentials",
      data: errorDetails
    });

    /*
    return {
      contentType: "application/problem+json",
      status: "error", // This can be ‘error’ or ‘success’
      statusCode: errorDetails.status,
      error: errorDetails
    };
    */
  }

  const verified = userWithPassword.password === password;
  if (!verified) {
    const errorDetails: ProblemDetails = {
      title: "Bad credentials",
      status: 401,
      detail: "Your username or password is incorrect. Please try again.",
      instance: "/login",
      documentation_url: config.public.apiBaseURL + "/docs/errors#bad-credentials"
    };

    return createError({
      statusCode: errorDetails.status,
      statusMessage: "error",
      stack: "",
      message: "Bad credentials",
      data: errorDetails
    });
  }

  // const session = serialize({ userId: userWithPassword.id });
  // const signedSession = sign(session, config.cookieSecret);

  setCookie(event, config.public.cookieName, userWithPassword.id, {
    httpOnly: true,
    path: "/",
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    expires: rememberMe ? new Date(Date.now() + config.public.cookieRememberMeExpires) : new Date(Date.now() + config.public.cookieExpires)
  });

  const { password: _password, ...userWithoutPassword } = userWithPassword;

  return {
    statusCode: 200,
    data: userWithoutPassword
  };
});
