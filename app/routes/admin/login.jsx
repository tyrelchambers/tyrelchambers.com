import React from "react";
import { signInWithEmail } from "../../utils/signInWithEmail";
import { Form } from "remix";

export const action = async ({ request }) => {
  const {
    _fields: { email },
  } = await request.formData();

  await signInWithEmail({
    email: email[0],
  });

  return null;
};

const login = () => {
  return (
    <div className="max-w-md ml-auto mr-auto mt-20">
      <h1 className="h2">Admin login</h1>
      <Form className="mt-10 flex flex-col gap-4" method="post">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-yellow-300  text-xl">
            Email
          </label>
          <p className="text-gray-400 mb-2">Receive a magiclink to sign in</p>
          <input
            type="email"
            name="email"
            className="rounded-lg p-4 bg-zinc-700 w-full text-white"
            placeholder="user@example.com"
          />
        </div>
        <button
          className="link-button primary  w-full justify-center"
          type="submit"
        >
          Get login link
        </button>
      </Form>
    </div>
  );
};

export default login;
