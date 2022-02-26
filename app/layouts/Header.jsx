import React from "react";
import SocialList from "~/components/SocialList";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="max-w-screen-2xl ml-auto mr-auto flex items-center justify-between w-full py-10">
      <h1 className="text-white text-2xl ">Tyrel Chambers</h1>
      <Nav />
      <SocialList />
    </header>
  );
};

export default Header;
