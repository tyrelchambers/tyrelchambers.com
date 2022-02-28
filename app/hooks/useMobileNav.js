import { useState } from "react";

export const useMobileNav = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  return { isMobileNavOpen, toggleMobileNav };
};
