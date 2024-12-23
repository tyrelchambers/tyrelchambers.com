import React from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { routes } from "@/routes";

const MobileNav = () => {
  const isMobile = window && window.innerWidth <= 768;

  return isMobile ? (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>

        <nav className="mt-10">
          <ul className="space-y-4">
            {routes.map((route) => (
              <li className="text-lg">
                <a href={route.url}>{route.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  ) : null;
};

export default MobileNav;
