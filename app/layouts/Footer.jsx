import { Form, Link } from "@remix-run/react";
import React from "react";
import SocialList from "~/components/SocialList";
import { useOptionalUser } from "../utils";

const Footer = () => {
  const user = useOptionalUser();

  return (
    <footer className="w-full ">
      <div className="ml-auto mr-auto flex max-w-screen-2xl flex-col items-center justify-between gap-10 border-t-2 border-gray-200  p-4 tablet:flex-row">
        <ul className=" flex items-center gap-4">
          <li>
            <a
              href="mailto:tychambers3@gmail.com"
              className="w-fit text-indigo-500"
            >
              Email me
            </a>
          </li>
          {user ? (
            <li className="w-fit">
              <Form method="delete" action="/signout">
                <button type="submit" className="w-fit text-indigo-500">
                  Sign out
                </button>
              </Form>
            </li>
          ) : (
            <li className="w-fit">
              <Link to="/login" className="w-fit text-indigo-500">
                Login
              </Link>
            </li>
          )}
          {user && (
            <li className="w-fit">
              <Link to="/admin" className="w-fit text-indigo-500">
                Admin
              </Link>
            </li>
          )}
        </ul>
        <p className=" text-sm text-gray-500">
          &copy; {new Date(Date.now()).getFullYear()} Tyrel Chambers.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
