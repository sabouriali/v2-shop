import { NavLink } from "react-router";
import { BsInfoCircleFill, BsList, BsPersonLinesFill } from "react-icons/bs";

function Navbar() {
  function handleScrollDown() {
    window.scrollTo({
      top: 10000,
      behavior: "smooth",
    });
  }

  return (
    <nav className="pb-4">
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
        <button onClick={handleScrollDown} className="flex items-center">
          <BsPersonLinesFill className="ml-1" />
          تماس با ما
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
