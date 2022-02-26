import React from "react";
import SocialList from "~/components/SocialList";

const Footer = () => {
  return (
    <footer className="border-t-[1px] py-20 border-zinc-600 bg-zinc-800">
      <div className="max-w-screen-md ml-auto mr-auto grid grid-cols-2 gap-20">
        <div className="flex flex-col">
          <h3 className="h3">Tyrel Chambers</h3>
          <p className="text-gray-400 mt-6 mb-6">
            Building software and teaching people about what I love the most
          </p>
          <SocialList />
        </div>

        <div className="flex flex-col">
          <h4 className="h4">Contact</h4>
          <ul className="mt-4">
            <li className="w-fit">
              <a href="mailto:tychambers3@gmail.com" className="nav-link w-fit">
                Email me
              </a>
            </li>
          </ul>
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
