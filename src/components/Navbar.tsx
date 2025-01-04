import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import {
  BsInfoCircleFill,
  BsList,
  BsPersonFill,
  BsPersonLinesFill,
} from "react-icons/bs";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { HiOutlineLogin } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

import { getCartQty } from "../redux/slices/cartSlice";
import { useStoreSelector } from "../hooks/useStore";

import CategoriesMenu from "./CategoriesMenu";
import CartHover from "./CartHover";
import UserHoverMenu from "./UserHoverMenu";

function Navbar() {
  const [allCatsHover, setAllCatsHover] = useState(false);
  const [cartHover, setCartHover] = useState(false);
  const [userHover, setUserHover] = useState(false);

  const cart = useStoreSelector((state) => state.cart.items);
  const isLogin = useStoreSelector((state) => state.login.isLogin);

  const user = sessionStorage.getItem("user");

  const cartQty = getCartQty(cart);

  const { pathname } = useLocation();

  function handleScrollDown() {
    window.scrollTo({
      top: 100000,
      behavior: "smooth",
    });
  }

  function handleAllCatsMouseEnter() {
    setAllCatsHover(true);
  }

  function handleAllCatsMouseLeave() {
    setAllCatsHover(false);
  }

  function handleCartMouseEnter() {
    if (pathname === "/cart") {
      setCartHover(false);
    } else {
      setCartHover(true);
    }
  }

  function handleCartMouseLeave() {
    setCartHover(false);
  }

  function handleUserMouseEnter() {
    if (pathname === `/user/${JSON.parse(user!).id}`) {
      setUserHover(false);
    } else {
      setUserHover(true);
    }
  }

  function handleUserMouseLeave() {
    setUserHover(false);
  }

  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center">
        <div
          onMouseEnter={handleAllCatsMouseEnter}
          onMouseLeave={handleAllCatsMouseLeave}
          className="relative"
        >
          <button
            id="allCategories"
            className={`flex items-center pl-4 border-b-4 py-3 border-white dark:border-slate-700 ${
              allCatsHover && "!border-red-500"
            } transition`}
          >
            <BsList className="ml-1" />
            دسته‌بندی محصولات
          </button>
          <CategoriesMenu categoriesMenuHover={allCatsHover} />
        </div>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${
              isActive && "!border-red-500"
            } flex items-center px-4 border-b-4 py-3 border-white dark:border-slate-700 hover:border-red-500 transition`
          }
        >
          <BsInfoCircleFill className="ml-1" />
          درباره ما
        </NavLink>
        <button
          onClick={handleScrollDown}
          className="flex items-center gap-1 px-4 border-b-4 py-3 border-white dark:border-slate-700 hover:border-red-500 transition"
        >
          <BsPersonLinesFill />
          تماس با ما
          <FaCaretDown />
        </button>
      </div>
      <div className="flex items-center gap-2">
        {isLogin ? (
          <div
            className="relative"
            onMouseEnter={handleUserMouseEnter}
            onMouseLeave={handleUserMouseLeave}
          >
            <NavLink
              to={`/user/${JSON.parse(user!).id}`}
              className={({ isActive }) =>
                `${
                  isActive && "bg-red-500 text-white"
                } flex items-center gap-1 px-3 py-2 rounded-lg border text-sm hover:bg-red-500 hover:text-white transition ${
                  userHover ? "bg-red-500 text-white" : ""
                }`
              }
            >
              <BsPersonFill />
              {JSON.parse(user!).name}
              {pathname !== `/user/${JSON.parse(user!).id}` && (
                <IoIosArrowDown />
              )}
            </NavLink>
            <UserHoverMenu showMenu={userHover} />
          </div>
        ) : (
          <Link
            to="/user/login"
            className="flex items-center gap-1 px-3 py-2 rounded-lg border text-sm hover:bg-red-500 hover:text-white transition"
          >
            <HiOutlineLogin />
            ورود | ثبت نام
          </Link>
        )}
        <span className="text-3xl text-gray-300">|</span>
        <NavLink
          to="/cart"
          end
          onMouseEnter={handleCartMouseEnter}
          onMouseLeave={handleCartMouseLeave}
          className={({ isActive }) =>
            `${
              isActive && "bg-red-500 text-white"
            } relative p-2 rounded-lg border hover:bg-red-500 hover:text-white transition`
          }
        >
          <FaCartShopping size={20} />
          {cartQty > 0 && (
            <span className="absolute -right-1 -bottom-1 text-white text-sm text-center w-5 h-5 rounded-full bg-amber-500">
              {cartQty}
            </span>
          )}
          {cartQty > 0 && <CartHover cart={cart} cartHover={cartHover} />}
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
