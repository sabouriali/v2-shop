import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { FaCaretDown } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { BsInfoCircleFill, BsList, BsPersonLinesFill } from "react-icons/bs";

import NavbarCategoriesMenu from "./NavbarCategoriesMenu";

import { type NavbarMenuProps } from "../types/componentTypes";

function NavbarMenu({ showNavbarMenu, hideNavbarMenu }: NavbarMenuProps) {
  const [showCatsMenu, setShowCatsMenu] = useState(false);

  useEffect(() => {
    if (!showNavbarMenu) setShowCatsMenu(false);
  }, [showNavbarMenu]);

  function handleScrollDown() {
    window.scrollTo({
      top: 100000,
      behavior: "smooth",
    });
    hideNavbarMenu();
  }

  return (
    <>
      {showNavbarMenu && (
        <div
          onClick={hideNavbarMenu}
          className="fixed top-0 right-0 w-full h-full z-10"
        />
      )}
      <div
        className={`absolute z-20 top-11 -right-4 w-screen px-4 pb-2 shadow-md bg-white dark:bg-slate-700 transition ${
          showNavbarMenu
            ? "opacity-100 visible"
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <button onClick={handleScrollDown} className="flex items-center gap-1 mb-1">
          <BsPersonLinesFill />
          تماس با ما
          <FaCaretDown />
        </button>
        <NavLink
          to="/about"
          onClick={hideNavbarMenu}
          className={({ isActive }) =>
            `${
              isActive && "text-red-500 dark:text-red-400"
            } flex items-center gap-1 mb-1`
          }
        >
          <BsInfoCircleFill />
          درباره ما
        </NavLink>
        <div className="relative">
          <button
            onClick={() => setShowCatsMenu(!showCatsMenu)}
            className={`flex items-center gap-1 transition ${
              showCatsMenu && "text-blue-500 dark:text-blue-400"
            }`}
          >
            <BsList />
            دسته‌بندی محصولات
            <IoIosArrowDown
              className={`transition ${showCatsMenu && "rotate-180"}`}
            />
          </button>
          <NavbarCategoriesMenu
            showMenu={showCatsMenu}
            hideMenu={hideNavbarMenu}
          />
        </div>
      </div>
    </>
  );
}

export default NavbarMenu;
