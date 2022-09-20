import { Form } from "@remix-run/react";
import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter flex flex-col items-center gap-2 rounded-3xl border-[1px] border-gray-200 p-8 shadow-lg tablet:flex-row tablet:p-12">
      <div className="flex flex-1 flex-col">
        <p className="text-xl font-bold text-gray-50">
          Want to be in the know?
        </p>
        <p className="w-full max-w-3xl text-gray-200">
          Sign up for my spam-free newsletter! You can unsubscribe whenever!
          You'll only be emailed when a new blog post is published.
        </p>
      </div>

      <Form
        action="https://tinyletter.com/tyrelchambers"
        method="post"
        target="popupwindow"
        onSubmit="window.open('https://tinyletter.com/tyrelchambers', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
        className="flex h-fit flex-col gap-4 tablet:flex-row"
      >
        <input
          type="text"
          className=" w-full max-w-[300px] rounded-full border-[1px] border-gray-200 bg-white py-3 px-6"
          name="email"
          placeholder="Enter your email"
          id="tlemail"
        />
        <input type="hidden" value="1" name="embed" />
        <input
          type="submit"
          value="Subscribe"
          className="rounded-full bg-indigo-400 py-2 px-6 text-white"
        />
      </Form>
    </div>
  );
};

export default Newsletter;
