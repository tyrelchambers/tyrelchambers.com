import React from "react";

import { createUserSession } from "~/session.server";
import { Form } from "@remix-run/react";
import { getUserId, verifyLogin } from "../session.server";
import Header from "../layouts/Header";
import Main from "../layouts/Main";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const password = formData.get("password");
  const redirectTo = "/";
  const user = await verifyLogin(password);

  if (!user) {
    return null;
  }

  return createUserSession({
    request,
    userId: process.env.USER_KEY,
    redirectTo,
  });
};

export default function login() {
  return (
    <>
      <Header />
      <main className="ml-auto mr-auto w-full max-w-screen-sm">
        <h1 className="text-3xl font-bold leading-normal text-gray-700 ">
          Login
        </h1>

        <Form className="mt-6" method="post">
          <div className="mt-4 flex flex-col">
            <label className=" text-xl text-gray-800" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="mt-2 rounded-md border-[1px] border-gray-300 bg-gray-100 p-3"
              placeholder="Password"
            />
          </div>

          <button
            className="mt-4 w-full rounded-lg bg-yellow-300 p-4"
            type="submit"
          >
            Login
          </button>
        </Form>
      </main>
    </>
  );
}
