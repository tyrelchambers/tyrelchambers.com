import { createCookieSessionStorage } from "remix";
import { redirect } from "@remix-run/node";
export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: process.env.NODE_ENV === "production",
  },
});

export async function getSession(request) {
  const cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}

const USER_SESSION_KEY = "userId";

export async function createUserSession({
  request,
  userId,
  remember,
  redirectTo,
}) {
  const session = await getSession(request);
  session.set(USER_SESSION_KEY, userId);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember
          ? 60 * 60 * 24 * 7 // 7 days
          : undefined,
      }),
    },
  });
}

export async function getUserId(request) {
  const session = await getSession(request);
  const userId = session.get(USER_SESSION_KEY);
  return userId;
}

export async function logout(request) {
  const session = await getSession(request);
  return redirect("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
}

export async function verifyLogin(password) {
  if (!password) {
    return null;
  }

  return password === process.env.PASSWORD;
}

export async function requireUserId(request) {
  const userId = await getUserId(request);
  if (!userId) {
    throw redirect(`/`);
  }
  return userId;
}

export async function requireUser(request) {
  const userId = await requireUserId(request);

  const user = userId === process.env.USER_KEY;
  if (user) return user;

  throw await logout(request);
}
