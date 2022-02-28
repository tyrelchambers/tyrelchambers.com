import React from "react";
import { Link } from "remix";
import SocialList from "~/components/SocialList";
import { handleSignOut } from "../utils/handleSignout";
import { useSupabase } from "../utils/supabase-client";

const Footer = () => {
  const supabase = useSupabase();

  return (
    <footer className="border-t-[1px] py-10 sm:py-20 border-zinc-600 bg-zinc-800">
      <div className="max-w-screen-md ml-auto mr-auto grid grid-cols-1 sm:grid-cols-2 sm:gap-20 gap-10 p-4">
        <div className="flex flex-col ">
          <h3 className="h3">Tyrel Chambers</h3>
          <p className="text-gray-400 mt-6 mb-6">
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
              <li className="w-fit">
                <Link to="/auth" className="nav-link w-fit">
                  Login
                </Link>
              </li>

              {supabase.auth.session() && (
                <li className="w-fit">
                  <button
                    type="button"
                    onClick={() => handleSignOut(supabase)}
                    className="nav-link w-fit"
                  >
                    Sign out
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-500 mt-6">
        All rights reserved &copy; {new Date(Date.now()).getFullYear()}. Tyrel
        Chambers.
      </p>
    </footer>
  );
};

export default Footer;
