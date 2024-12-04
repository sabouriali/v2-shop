import { NavLink } from "react-router";
import { BsInfoCircleFill, BsList, BsPersonLinesFill } from "react-icons/bs";
import { HiOutlineLogin } from "react-icons/hi";

function Navbar() {
  return (
    <nav className="flex items-center justify-between pb-4">
      <div className="flex items-center gap-6">
        <button className="flex items-center">
          <BsList className="ml-1" />
          دسته‌بندی محصولات
        </button>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${
              isActive ? "text-red-500" : "text-black"
            } flex items-center transition`
          }
        >
          <BsInfoCircleFill className="ml-1" />
          درباره ما
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${
              isActive ? "text-red-500" : "text-black"
            } flex items-center transition`
          }
        >
          <BsPersonLinesFill className="ml-1" />
          تماس با ما
        </NavLink>
      </div>
      <div>
        <button className="flex items-center px-3 py-2 rounded-lg border text-sm hover:bg-slate-500 hover:text-white transition">
          <HiOutlineLogin className="ml-1" />
          ورود | ثبت نام
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
