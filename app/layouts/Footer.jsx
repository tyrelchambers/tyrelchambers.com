import { Form, Link } from "@remix-run/react";
import React from "react";
import SocialList from "~/components/SocialList";
import { useOptionalUser } from "../utils";
import { handleSignOut } from "../utils/handleSignout";
import { useSupabase } from "../utils/supabase-client";

const Footer = () => {
  const supabase = useSupabase();
  const user =useOptionalUser()

  return (
    <footer className="border-t-[1px] border-zinc-600 bg-zinc-800 py-10 sm:py-20">
      <div className="ml-auto mr-auto grid max-w-screen-md grid-cols-1 gap-10 p-4 sm:grid-cols-2 sm:gap-20">
        <div className="flex flex-col ">
          <h3 className="h3">Tyrel Chambers</h3>
          <p className="mt-6 mb-6 text-gray-400">
            Building software and teaching people about what I love the most
          </p>
          <SocialList />
        </div>

        <div className="flex gap-10">
          <div className="flex flex-col">
            <h4 className="h4">Contact</h4>
            <ul className="mt-4">
              <li className="w-fit">
                <a
                  href="mailto:tychambers3@gmail.com"
                  className="nav-link w-fit"
                >
                  Email me
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="h4">Admin</h4>
            <ul className="mt-4">
              {user ? (
                <li className="w-fit">
                  <Form method="delete" action="/signout">
                    <button
                    type="submit"
                    className="nav-link w-fit"
                  >
                    Sign out
                  </button>
                  </Form>
                </li>
              ) : (
                <li className="w-fit">
                  <Link to="/login" className="nav-link w-fit">
                    Login
                  </Link>
                </li>
              )}
              {user && (
                <li className="w-fit">
                  <Link to="/admin" className="nav-link w-fit">
                    Admin
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <p className="mt-6 text-center text-gray-500">
        All rights reserved &copy; {new Date(Date.now()).getFullYear()}. Tyrel
        Chambers.
      </p>
    </footer>
  );
};

export default Footer;
