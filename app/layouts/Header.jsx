import React from "react";
import { Link } from "@remix-run/react";
import SocialList from "~/components/SocialList";
import { useSupabase } from "../utils/supabase-client";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import { useMobileNav } from "~/hooks/useMobileNav";

const Header = () => {
  const user = useSupabase().auth.currentUser;
  const { isMobileNavOpen, toggleMobileNav } = useMobileNav();

  return (
    <header className="ml-auto mr-auto flex w-full max-w-screen-2xl flex-col items-center justify-between p-4 tablet:py-8">
      <section className="flex w-full flex-col items-center justify-between tablet:flex-row">
        <div className="flex w-full items-center justify-between px-4 tablet:w-fit tablet:px-0">
          <h1 className="mb-4 mt-4 text-2xl text-white sm:mb-0 sm:mt-0">
            Tyrel Chambers
          </h1>
          <div
            className="mobile-toggle flex h-[25px] w-[35px] flex-col justify-between tablet:hidden"
            onClick={() => toggleMobileNav()}
          >
            <span className="h-[3px] w-full bg-gray-400"></span>
            <span className="h-[3px] w-full bg-gray-400"></span>
            <span className="h-[3px] w-full bg-gray-400"></span>
          </div>
        </div>
        <Nav />
        <div className="flex items-center gap-4">
          <SocialList />
        </div>
        <div
          className="mobile-toggle hidden h-[25px] w-[35px] flex-col justify-between tablet:flex desktop:hidden"
          onClick={() => toggleMobileNav()}
        >
          <span className="h-[3px] w-full bg-gray-400"></span>
          <span className="h-[3px] w-full bg-gray-400"></span>
          <span className="h-[3px] w-full bg-gray-400"></span>
        </div>
      </section>
      {isMobileNavOpen && <MobileNav />}
    </header>
  );
};

export default Header;
