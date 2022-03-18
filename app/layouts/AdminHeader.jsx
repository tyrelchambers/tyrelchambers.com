import AdminMobileNav from "./AdminMobileNav";
import AdminNav from "./AdminNav";
import React from "react";
import { useMobileNav } from "~/hooks/useMobileNav";

const AdminHeader = () => {
  const { isMobileNavOpen, toggleMobileNav } = useMobileNav();

  return (
    <header className="flex justify-between px-4">
      <div className="flex w-full items-center justify-between">
        <h1 className="h3">Admin dashboard</h1>
        <div
          className="mobile-toggle flex h-[25px] w-[35px] flex-col justify-between tablet:hidden"
          onClick={() => toggleMobileNav()}
        >
          <span className="h-[3px] w-full bg-gray-400"></span>
          <span className="h-[3px] w-full bg-gray-400"></span>
          <span className="h-[3px] w-full bg-gray-400"></span>
        </div>
      </div>
      <AdminNav />
      {isMobileNavOpen && <AdminMobileNav />}
    </header>
  );
};

export default AdminHeader;
