import React from "react";
import { Link } from "remix";
import SocialList from "~/components/SocialList";
import { useSupabase } from "../utils/supabase-client";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import { useMobileNav } from "~/hooks/useMobileNav";

const Header = () => {
  const user = useSupabase().auth.currentUser;
  const { isMobileNavOpen, toggleMobileNav } = useMobileNav();

  return (
    <header className="max-w-screen-2xl ml-auto mr-auto flex flex-col items-center justify-between w-full p-4">
      <section className="w-full flex items-center justify-between flex-col tablet:flex-row">
        <div className="flex w-full items-center px-4 tablet:px-0 justify-between tablet:w-fit">
          <h1 className="text-white text-2xl mb-4 sm:mb-0 mt-4 sm:mt-0">
            Tyrel Chambers
          </h1>
          <div
            className="mobile-toggle w-[35px] h-[25px] flex flex-col justify-between tablet:hidden"
            onClick={() => toggleMobileNav()}
          >
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
        <div
          className="mobile-toggle w-[35px] h-[25px] flex-col justify-between hidden tablet:flex desktop:hidden"
          onClick={() => toggleMobileNav()}
        >
          <span className="h-[3px] bg-gray-400 w-full"></span>
          <span className="h-[3px] bg-gray-400 w-full"></span>
          <span className="h-[3px] bg-gray-400 w-full"></span>
        </div>
      </section>
      {isMobileNavOpen && <MobileNav />}
    </header>
  );
};

export default Header;
