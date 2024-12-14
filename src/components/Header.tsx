import { useState } from "react";
import { NavLink } from "react-router";
import { BsMoonFill, BsSearch, BsSunFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { HiOutlineLogin } from "react-icons/hi";

import { useStoreDispatch, useStoreSelector } from "../hooks/useStore";

import { switchTheme } from "../redux/slices/themeSlice";
import { getCartQty } from "../redux/slices/cartSlice";

import Navbar from "./Navbar";
import Search from "./Search";

function Header() {
  const [openSearch, setOpenSearch] = useState(false);

  const theme = useStoreSelector((state) => state.theme.value);
  const cart = useStoreSelector((state) => state.cart.items);
  const dispatch = useStoreDispatch();

  const cartQty = getCartQty(cart);

  function handleSwitchTheme() {
    dispatch(switchTheme());
  }

  function handleOpenSearch() {
    setOpenSearch(true);
  }

  function handleCloseSearch() {
    setOpenSearch(false);
  }

  return (
    <>
      <Search showSearch={openSearch} hideSearch={handleCloseSearch} />
      <header className="shadow-md px-4 w-full bg-white dark:bg-slate-700 dark:text-slate-50 transition">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-6 w-2/3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive && "text-red-500"} text-3xl transition`
              }
            >
              مارکت‌لند
            </NavLink>
            <div
              onClick={handleOpenSearch}
              className={`flex items-center gap-4 px-4 py-2 rounded-lg bg-slate-100 text-slate-500 w-full dark:bg-slate-800 transition ${
                openSearch
                  ? "-translate-y-10 opacity-0 invisible"
                  : "opacity-100 visible"
              }`}
            >
              <BsSearch />
              <span>جستجو</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mr-6">
            <button className="flex items-center px-3 py-2 rounded-lg border text-sm hover:bg-slate-500 hover:text-white transition">
              <HiOutlineLogin className="ml-1" />
              ورود | ثبت نام
            </button>
            <span className="text-3xl text-gray-300">|</span>
            <button className="relative p-2 rounded-lg border hover:bg-slate-500 hover:text-white transition">
              <FaCartShopping size={20} />
              {cartQty > 0 && (
                <span className="absolute -right-1 -bottom-1 text-white text-sm w-5 h-5 rounded-full bg-red-500">
                  {cartQty}
                </span>
              )}
            </button>
            <span className="text-3xl text-gray-300">|</span>
            <button
              onClick={handleSwitchTheme}
              className="p-2 rounded-lg border hover:bg-slate-500 hover:text-white transition"
            >
              {theme === "dark" ? (
                <BsSunFill size={20} />
              ) : (
                <BsMoonFill size={20} />
              )}
            </button>
          </div>
        </div>
        <Navbar />
      </header>
    </>
  );
}

export default Header;
