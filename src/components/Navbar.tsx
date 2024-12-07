import { useState } from "react";
import { NavLink } from "react-router";
import { BsInfoCircleFill, BsList, BsPersonLinesFill } from "react-icons/bs";

function Navbar() {
  const [hover, setHover] = useState(false);

  function handleScrollDown() {
    window.scrollTo({
      top: 10000,
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
    <nav className="">
      <div className="flex items-center">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative"
        >
          <button
            className={`flex items-center pl-3 border-b-4 border-white dark:border-slate-700 ${
              hover && "!border-red-500"
            } transition`}
          >
            <BsList className="ml-1" />
            دسته‌بندی محصولات
          </button>
          <div
            className="absolute -right-4 w-screen h-10 shadow-md bg-white dark:bg-slate-700 rounded-b-2xl transition"
            style={{
              opacity: hover ? 1 : 0,
              visibility: hover ? "visible" : "hidden",
              transform: hover ? "translateY(0)" : "translateY(-1vh)",
            }}
          />
        </div>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${
              isActive && "!border-red-500"
            } flex items-center px-3 border-b-4 border-white dark:border-slate-700 hover:border-red-500 transition`
          }
        >
          <BsInfoCircleFill className="ml-1" />
          درباره ما
        </NavLink>
        <button
          onClick={handleScrollDown}
          className="flex items-center px-3 border-b-4 border-white dark:border-slate-700 hover:border-red-500 transition"
        >
          <BsPersonLinesFill className="ml-1" />
          تماس با ما
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
