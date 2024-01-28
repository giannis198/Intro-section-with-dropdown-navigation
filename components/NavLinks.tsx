"use client";

import Actions from "./Actions";
import MobileMenuItem from "./MobileMenuItems";

import NavMenu from "./NavMenu";

const NavLinks = () => {
  return (
    <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
      <div className="hidden md:block">
        <NavMenu />
      </div>
      <div className="md:hidden">
        <MobileMenuItem />
      </div>
      <Actions />
    </div>
  );
};

export default NavLinks;
