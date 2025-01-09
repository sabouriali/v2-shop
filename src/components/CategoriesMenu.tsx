import { useState } from "react";
import { NavLink } from "react-router";
import { AiFillProduct } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { IoGameController, IoLaptop, IoTv } from "react-icons/io5";
import { FaCouch, FaHeadphonesSimple, FaMobile } from "react-icons/fa6";

import { type CategoriesMenuProps } from "../types/componentTypes";

function CategoriesMenu({ categoriesMenuHover }: CategoriesMenuProps) {
  const [mobileHover, setMobileHover] = useState(false);
  const [laptopHOver, setLaptopHover] = useState(false);
  const [appliancesHover, setAppliancesHover] = useState(false);

  function handleMobileHover(action: "enter" | "leave") {
    if (action === "enter") {
      setMobileHover(true);
    } else setMobileHover(false);
  }

  function handleLaptopHover(action: "enter" | "leave") {
    if (action === "enter") {
      setLaptopHover(true);
    } else setLaptopHover(false);
  }

  function handleAppliancesHover(action: "enter" | "leave") {
    if (action === "enter") {
      setAppliancesHover(true);
    } else setAppliancesHover(false);
  }

  return (
    <div
      className={`absolute z-10 -right-4 w-[11.5rem] shadow-md bg-gray-100 dark:bg-slate-700 transition ${
        categoriesMenuHover
          ? "opacity-100 visible"
          : "opacity-0 invisible -translate-y-4"
      }`}
    >
      <div className="hover:bg-white dark:hover:bg-slate-900 pr-4 py-2 transition">
        <NavLink
          to="/products/1"
          className={({ isActive }) =>
            `${
              isActive && "text-red-500 dark:text-red-400"
            } flex items-center gap-1 transition`
          }
          end
        >
          <AiFillProduct />
          همه محصولات
        </NavLink>
      </div>
      <div
        className="relative hover:bg-white dark:hover:bg-slate-900 pr-4 py-2 transition"
        onMouseEnter={() => handleMobileHover("enter")}
        onMouseLeave={() => handleMobileHover("leave")}
      >
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-1">
            <FaMobile />
            موبایل
          </button>
          <IoIosArrowBack />
        </div>
        <div
          className={`absolute right-[11.5rem] -top-10 h-40 w-60 shadow-md bg-white dark:bg-slate-900 transition ${
            mobileHover
              ? "opacity-100 visible translate-x-0"
              : "opacity-0 invisible translate-x-1"
          }`}
        >
          <NavLink
            to="/products/category/mobile"
            className={({ isActive }) =>
              `${
                isActive && "text-red-500 dark:text-red-400"
              } flex items-center gap-1 pr-4 py-2 border-l-2 border-transparent hover:border-red-500 dark:hover:border-red-400 transition`
            }
          >
            <FaMobile />
            گوشی موبایل
          </NavLink>
          <NavLink
            to="/products/category/audio"
            className={({ isActive }) =>
              `${
                isActive && "text-red-500 dark:text-red-400"
              } flex items-center gap-1 pr-4 py-2 border-l-2 border-transparent hover:border-red-500 dark:hover:border-red-400 transition`
            }
          >
            <FaHeadphonesSimple />
            هدفون، هندزفری، اسپیکر
          </NavLink>
        </div>
      </div>
      <div
        className="relative hover:bg-white dark:hover:bg-slate-900 pr-4 py-2 transition"
        onMouseEnter={() => handleLaptopHover("enter")}
        onMouseLeave={() => handleLaptopHover("leave")}
      >
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-1 transition">
            <IoLaptop />
            لپ تاپ
          </button>
          <IoIosArrowBack />
        </div>
        <div
          className={`absolute right-[11.5rem] -top-20 h-40 w-60 shadow-md bg-white dark:bg-slate-900 transition ${
            laptopHOver
              ? "opacity-100 visible translate-x-0"
              : "opacity-0 invisible translate-x-1"
          }`}
        >
          <NavLink
            to="/products/category/laptop"
            className={({ isActive }) =>
              `${
                isActive && "text-red-500 dark:text-red-400"
              } flex items-center gap-1 pr-4 py-2 border-l-2 border-transparent hover:border-red-500 dark:hover:border-red-400 transition`
            }
          >
            <IoLaptop />
            لپ تاپ
          </NavLink>
          <NavLink
            to="/products/category/gaming"
            className={({ isActive }) =>
              `${
                isActive && "text-red-500 dark:text-red-400"
              } flex items-center gap-1 pr-4 py-2 border-l-2 border-transparent hover:border-red-500 dark:hover:border-red-400 transition`
            }
          >
            <IoGameController />
            تجهیزات گیمینگ
          </NavLink>
        </div>
      </div>
      <div
        className="relative hover:bg-white dark:hover:bg-slate-900 pr-4 py-2 transition"
        onMouseEnter={() => handleAppliancesHover("enter")}
        onMouseLeave={() => handleAppliancesHover("leave")}
      >
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-1 transition">
            <IoTv />
            لوازم خانگی
          </button>
          <IoIosArrowBack />
        </div>
        <div
          className={`absolute right-[11.5rem] top-[-7.5rem] h-40 w-60 shadow-md bg-white dark:bg-slate-900 transition ${
            appliancesHover
              ? "opacity-100 visible translate-x-0"
              : "opacity-0 invisible translate-x-1"
          }`}
        >
          <NavLink
            to="/products/category/tv"
            className={({ isActive }) =>
              `${
                isActive && "text-red-500 dark:text-red-400"
              } flex items-center gap-1 pr-4 py-2 border-l-2 border-transparent hover:border-red-500 dark:hover:border-red-400 transition`
            }
          >
            <IoTv />
            تلویزیون
          </NavLink>
          <NavLink
            to="/products/category/appliances"
            className={({ isActive }) =>
              `${
                isActive && "text-red-500 dark:text-red-400"
              } flex items-center gap-1 pr-4 py-2 border-l-2 border-transparent hover:border-red-500 dark:hover:border-red-400 transition`
            }
          >
            <FaCouch />
            لوازم خانگی
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CategoriesMenu;
