import { NavLink } from "react-router";
import { AiFillProduct } from "react-icons/ai";
import { IoLaptop, IoGameController, IoTv } from "react-icons/io5";
import { FaHeadphonesSimple, FaMobile, FaCouch } from "react-icons/fa6";

import { type NavbarCategoriesMenuProps } from "../types/componentTypes";

function NavbarCategoriesMenu({
  showMenu,
  hideMenu,
}: NavbarCategoriesMenuProps) {
  return (
    <div
      className={`absolute z-20 top-8 -right-4 w-screen px-4 pb-2 shadow-md bg-white dark:bg-slate-700 transition ${
        showMenu ? "opacity-100 visible" : "opacity-0 invisible -translate-y-4"
      }`}
    >
      <div className="mb-3">
        <NavLink
          to="/products/1"
          onClick={hideMenu}
          className={({ isActive }) =>
            `${
              isActive && "text-red-500 dark:text-red-400"
            } flex items-center gap-1 transition`
          }
        >
          <AiFillProduct />
          همه محصولات
        </NavLink>
      </div>
      <div className="mb-3">
        <NavLink
          to="/products/category/mobile"
          onClick={hideMenu}
          className={({ isActive }) =>
            `${
              isActive && "text-red-500 dark:text-red-400"
            } flex items-center gap-1 transition mb-1`
          }
        >
          <FaMobile />
          گوشی موبایل
        </NavLink>
        <NavLink
          to="/products/category/audio"
          onClick={hideMenu}
          className={({ isActive }) =>
            `${
              isActive && "text-red-500 dark:text-red-400"
            } flex items-center gap-1 transition`
          }
        >
          <FaHeadphonesSimple />
          هدفون، هندزفری، اسپیکر
        </NavLink>
      </div>
      <div className="mb-3">
        <NavLink
          to="/products/category/laptop"
          onClick={hideMenu}
          className={({ isActive }) =>
            `${
              isActive && "text-red-500 dark:text-red-400"
            } flex items-center gap-1 transition mb-1`
          }
        >
          <IoLaptop />
          لپ تاپ
        </NavLink>
        <NavLink
          to="/products/category/gaming"
          onClick={hideMenu}
          className={({ isActive }) =>
            `${
              isActive && "text-red-500 dark:text-red-400"
            } flex items-center gap-1 transition`
          }
        >
          <IoGameController />
          تجهیزات گیمینگ
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/products/category/tv"
          onClick={hideMenu}
          className={({ isActive }) =>
            `${
              isActive && "text-red-500 dark:text-red-400"
            } flex items-center gap-1 transition mb-1`
          }
        >
          <IoTv />
          تلویزیون
        </NavLink>
        <NavLink
          to="/products/category/appliances"
          onClick={hideMenu}
          className={({ isActive }) =>
            `${
              isActive && "text-red-500 dark:text-red-400"
            } flex items-center gap-1 transition`
          }
        >
          <FaCouch />
          لوازم خانگی
        </NavLink>
      </div>
    </div>
  );
}

export default NavbarCategoriesMenu;
