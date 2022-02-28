import React from "react";
import AdminNav from "./AdminNav";
import AdminMobileNav from "./AdminMobileNav";
import { useMobileNav } from "~/hooks/useMobileNav";

const AdminHeader = () => {
  const { isMobileNavOpen, toggleMobileNav } = useMobileNav();

  return (
    <header className="px-4">
      <div className="flex items-center w-full justify-between">
        <h1 className="h1">Admin dashboard</h1>
        <div
          className="mobile-toggle w-[35px] h-[25px] flex flex-col justify-between tablet:hidden"
          onClick={() => toggleMobileNav()}
        >
          <span className="h-[3px] bg-gray-400 w-full"></span>
          <span className="h-[3px] bg-gray-400 w-full"></span>
          <span className="h-[3px] bg-gray-400 w-full"></span>
        </div>
      </div>
      <AdminNav />
      {isMobileNavOpen && <AdminMobileNav />}
    </header>
  );
};

export default AdminHeader;
