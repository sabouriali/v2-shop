import { useState } from "react";
import { NavLink } from "react-router";
import { BsMoonFill, BsSearch, BsSunFill } from "react-icons/bs";

import { useStoreDispatch, useStoreSelector } from "../hooks/useStore";

import { switchTheme } from "../redux/slices/themeSlice";

import Navbar from "./Navbar";
import Search from "./Search";

function Header() {
  const [openSearch, setOpenSearch] = useState(false);

  const theme = useStoreSelector((state) => state.theme.value);
  const dispatch = useStoreDispatch();

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
        <div className="flex items-center justify-between pt-4 pb-2">
          <div className="flex items-center gap-6 w-full">
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
          <div className="mr-6">
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
