import { NavLink } from "react-router";
import { BsMoonFill, BsSearch } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";

import Navbar from "./Navbar";

function Header() {
  return (
    <header dir="rtl" className="shadow-md px-4 mb-6">
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-6 w-full">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-red-500" : "text-black"} text-3xl transition`
            }
          >
            مارکت‌لند
          </NavLink>
          <div className="flex items-center gap-4 px-4 py-2 rounded-lg bg-slate-100 text-slate-500 w-full">
            <BsSearch />
            <span>جستجو</span>
          </div>
        </div>
        <div className="flex items-center gap-2 mr-6">
          <button className="relative p-2 rounded-lg border hover:bg-slate-500 hover:text-white transition">
            <FaCartShopping size={20} />
            <span className="absolute -right-1 -bottom-1 text-white text-sm w-5 h-5 rounded-full bg-red-500">
              1
            </span>
          </button>
          <span className="text-3xl text-gray-300">|</span>
          <button className="p-2 rounded-lg border hover:bg-slate-500 hover:text-white transition">
            <BsMoonFill size={20} />
          </button>
        </div>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
