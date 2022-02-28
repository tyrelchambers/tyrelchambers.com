import React from "react";
import { Link } from "remix";
import SocialList from "~/components/SocialList";
import { useSupabase } from "../utils/supabase-client";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header = () => {
  const user = useSupabase().auth.currentUser;

  return (
    <header className="max-w-screen-2xl ml-auto mr-auto flex flex-col sm:flex-row items-center justify-between w-full sm:py-10 header p-0 md:p-4">
      <div className="flex items-center justify-between w-full p-4 md:p-0">
        <h1 className="text-white text-2xl mb-4 sm:mb-0 mt-4 sm:mt-0">
          Tyrel Chambers
        </h1>

        <div className="mobile-toggle w-[35px] h-[25px] flex flex-col justify-between md:hidden">
          <span className="h-[3px] bg-gray-400 w-full"></span>
          <span className="h-[3px] bg-gray-400 w-full"></span>
          <span className="h-[3px] bg-gray-400 w-full"></span>
        </div>
      </div>
      <Nav />
      <div className="flex items-center gap-4">
        <SocialList />
        {user?.role === "authenticated" && (
          <Link to="/admin" className="text-gray-200 ml-6">
            Admin
          </Link>
        )}
      </div>
      <MobileNav />
    </header>
  );
};

export default Header;
