import React from "react";
import { Link } from "remix";
import SocialList from "~/components/SocialList";
import { useSupabase } from "../utils/supabase-client";
import Nav from "./Nav";

const Header = () => {
  const user = useSupabase().auth.currentUser;

  return (
    <header className="max-w-screen-2xl ml-auto mr-auto flex items-center justify-between w-full py-10">
      <h1 className="text-white text-2xl ">Tyrel Chambers</h1>
      <Nav />
      <div className="flex items-center gap-4">
        <SocialList />
        {user?.role === "authenticated" && (
          <Link to="/admin">
            <i class="fa-solid fa-circle-user text-yellow-100 text-lg ml-8"></i>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
