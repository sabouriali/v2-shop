import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { HiOutlineLogin } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import {
  BsInfoCircleFill,
  BsList,
  BsPersonFill,
  BsPersonLinesFill,
} from "react-icons/bs";

import { getCartQty } from "../redux/slices/cartSlice";
import { useStoreSelector } from "../hooks/useStore";

import CategoriesMenu from "./CategoriesMenu";
import CartHover from "./CartHover";
import UserHoverMenu from "./UserHoverMenu";
import NavbarMenu from "./NavbarMenu";

function Navbar() {
  const [allCatsHover, setAllCatsHover] = useState(false);
  const [cartHover, setCartHover] = useState(false);
  const [userHover, setUserHover] = useState(false);
  const [showNavbarMenu, setShowNavbarMenu] = useState(false);

  const cart = useStoreSelector((state) => state.cart.items);
  const isLogin = useStoreSelector((state) => state.login.isLogin);

  const user = sessionStorage.getItem("user");

  const cartQty = getCartQty(cart);

  const { pathname } = useLocation();

  const screenWidth = window.screen.width;

  function handleScrollDown() {
    window.scrollTo({
      top: 100000,
      behavior: "smooth",
    });
  }

  function handleAllCatsHover(action: "enter" | "leave") {
    if (action === "enter") {
      setAllCatsHover(true);
    } else setAllCatsHover(false);
  }

  function handleCartHover(action: "enter" | "leave") {
    if (action === "enter") {
      if (pathname !== "/cart") setCartHover(true);
    } else setCartHover(false);
  }

  function handleUserHover(action: "enter" | "leave") {
    if (action === "enter") {
      if (pathname !== `/user/${JSON.parse(user!).id}`) setUserHover(true);
    } else setUserHover(false);
  }

  return (
    <nav
      className={`flex items-center justify-between ${
        screenWidth < 640 && "pb-2"
      }`}
    >
      {screenWidth < 640 ? (
        <div className="relative">
          <button
            onClick={() => setShowNavbarMenu(!showNavbarMenu)}
            className={`p-2 rounded-lg border transition ${
              showNavbarMenu
                ? "border-blue-500 dark:border-blue-400 text-white bg-blue-500 dark:bg-blue-400"
                : "hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-500 dark:hover:bg-blue-400 hover:text-white"
            }`}
          >
            <BsList size={20} />
          </button>
          <NavbarMenu
            showNavbarMenu={showNavbarMenu}
            hideNavbarMenu={() => setShowNavbarMenu(false)}
          />
        </div>
      ) : (
        <div className="flex items-center">
          <div
            onMouseEnter={() => handleAllCatsHover("enter")}
            onMouseLeave={() => handleAllCatsHover("leave")}
            className="relative"
          >
            <button
              id="allCategories"
              className={`flex items-center gap-1 pl-4 border-b-4 py-3 transition ${
                allCatsHover
                  ? "border-red-500 dark:border-red-400"
                  : "border-transparent"
              }`}
            >
              <BsList />
              دسته‌بندی محصولات
            </button>
            <CategoriesMenu categoriesMenuHover={allCatsHover} />
          </div>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${
                isActive && "border-red-500 dark:border-red-400"
              } flex items-center gap-1 px-4 border-b-4 py-3 border-transparent hover:border-red-500 dark:hover:border-red-400 transition`
            }
          >
            <BsInfoCircleFill />
            درباره من
          </NavLink>
          <button
            onClick={handleScrollDown}
            className="flex items-center gap-1 px-4 border-b-4 py-3 border-transparent hover:border-red-500 dark:hover:border-red-400 transition"
          >
            <BsPersonLinesFill />
            تماس با من
            <FaCaretDown />
          </button>
        </div>
      )}
      <div className="flex items-center gap-2">
        {isLogin ? (
          <div
            className="relative"
            onMouseEnter={() => handleUserHover("enter")}
            onMouseLeave={() => handleUserHover("leave")}
          >
            {screenWidth < 640 ? (
              <>
                <button
                  onClick={() => handleUserHover("enter")}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm border transition ${
                    userHover
                      ? "border-blue-500 dark:border-blue-400 text-white bg-blue-500 dark:bg-blue-400"
                      : "hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-500 dark:hover:bg-blue-400 hover:text-white"
                  }`}
                >
                  <BsPersonFill />
                  {JSON.parse(user!).name}
                  {pathname !== `/user/${JSON.parse(user!).id}` && (
                    <IoIosArrowDown />
                  )}
                </button>
                {userHover && (
                  <div
                    onClick={() => handleUserHover("leave")}
                    className="fixed top-0 right-0 w-full h-full z-10"
                  />
                )}
              </>
            ) : (
              <Link
                to={`/user/${JSON.parse(user!).id}`}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm border transition ${
                  userHover
                    ? "border-blue-500 dark:border-blue-400 text-white bg-blue-500 dark:bg-blue-400"
                    : "hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-500 dark:hover:bg-blue-400 hover:text-white"
                }`}
              >
                <BsPersonFill />
                {JSON.parse(user!).name}
                {pathname !== `/user/${JSON.parse(user!).id}` && (
                  <IoIosArrowDown />
                )}
              </Link>
            )}
            <UserHoverMenu
              showMenu={userHover}
              hideMenu={() => handleUserHover("leave")}
              profileUrl={`/user/${JSON.parse(user!).id}`}
            />
          </div>
        ) : (
          <Link
            to="/user/login"
            className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm border hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-500 dark:hover:bg-blue-400 hover:text-white transition"
          >
            <HiOutlineLogin />
            ورود | ثبت نام
          </Link>
        )}
        <span className="text-3xl text-gray-300">|</span>
        <NavLink
          to="/cart"
          end
          onMouseEnter={() => handleCartHover("enter")}
          onMouseLeave={() => handleCartHover("leave")}
          onClick={() => handleCartHover("leave")}
          className={({ isActive }) =>
            `${
              isActive &&
              "bg-blue-500 dark:bg-blue-400 border-blue-500 dark:border-blue-400 text-white"
            } relative p-2 rounded-lg border hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-500 dark:hover:bg-blue-400 hover:text-white transition`
          }
        >
          <FaCartShopping size={20} />
          {cartQty > 0 && (
            <span className="absolute -right-1 -bottom-1 text-white text-xs text-center content-center w-5 h-5 rounded-full bg-red-500 dark:bg-red-400">
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
