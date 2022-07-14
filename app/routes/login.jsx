import React from "react";

import { createUserSession } from "~/session.server";
import { Form } from "@remix-run/react";
import { getUserId, verifyLogin } from "../session.server";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const password = formData.get("password");
  const redirectTo ="/";
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
    <div className="ml-auto mr-auto mt-10 w-full max-w-lg">
      <h1 className="h1">Login</h1>

      <Form className="mt-6" method="post">
        <div className="mt-4 flex flex-col">
          <label className=" text-xl text-gray-300" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="mt-2 rounded-md border-[1px] border-gray-700 bg-gray-800 p-3"
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
    </div>
  );
}
