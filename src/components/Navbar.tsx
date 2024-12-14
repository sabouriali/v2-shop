import { useState } from "react";
import { NavLink } from "react-router";
import { BsInfoCircleFill, BsList, BsPersonLinesFill } from "react-icons/bs";

import CategoriesMenu from "./CategoriesMenu";

function Navbar() {
  const [hover, setHover] = useState(false);

  function handleScrollDown() {
    window.scrollTo({
      top: 100000,
      behavior: "smooth",
    });
  }

  function handleMouseEnter() {
    setHover(true);
  }

  function handleMouseLeave() {
    setHover(false);
  }

  return (
    <nav>
      <div className="flex items-center">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative"
        >
          <button
            id="allCategories"
            className={`flex items-center pl-4 border-b-2 pb-1 border-white dark:border-slate-700 ${
              hover && "!border-red-500"
            } transition`}
          >
            <BsList className="ml-1" />
            دسته‌بندی محصولات
          </button>
          <CategoriesMenu categoriesMenuHover={hover} />
        </div>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${
              isActive && "!border-red-500"
            } flex items-center px-4 border-b-2 pb-1 border-white dark:border-slate-700 hover:border-red-500 transition`
          }
        >
          <BsInfoCircleFill className="ml-1" />
          درباره ما
        </NavLink>
        <button
          onClick={handleScrollDown}
          className="flex items-center px-4 border-b-2 pb-1 border-white dark:border-slate-700 hover:border-red-500 transition"
        >
          <BsPersonLinesFill className="ml-1" />
          تماس با ما
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
