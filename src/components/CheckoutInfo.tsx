import { useNavigate } from "react-router";

import { useStoreDispatch, useStoreSelector } from "../hooks/useStore";
import { setPayed } from "../redux/slices/cartSlice";

import Backdrop from "./UI/Backdrop";
import CheckoutCartItem from "./CheckoutCartItem";

import { type CheckoutInfoProps } from "../types/componentTypes";

function CheckoutInfo({
  userName,
  userContact,
  showInfo,
  hideInfo,
}: CheckoutInfoProps) {
  const sessionCart = sessionStorage.getItem("cart");

  const cart = useStoreSelector((state) => state.cart.items);
  const dispatch = useStoreDispatch();

  const navigate = useNavigate();

  function handlePay() {
    dispatch(setPayed());
    navigate("/success");
  }

  return (
    <>
      <Backdrop showBackdrop={showInfo} hideBackdrop={hideInfo} />
      <section
        className={`fixed z-20 p-4 rounded-2xl w-[90%] sm:w-4/5 md:w-[70%] lg:w-3/5 xl:w-1/2 2xl:w-2/5 max-h-[85vh] overflow-y-scroll top-1/3 right-1/2 -translate-y-1/3 translate-x-1/2 bg-white dark:bg-slate-800 shadow-lg transition ${
          showInfo
            ? "opacity-100 visible"
            : "opacity-0 -translate-y-96 invisible"
        }`}
      >
        <h2 className="text-lg font-bold mb-6">فاکتور نهایی</h2>
        <div className="relative border p-4 mb-6 rounded-lg">
          <h3 className="absolute -top-3 right-2 text-sm px-1.5 bg-white dark:bg-slate-800 transition">
            مشخصات گیرنده
          </h3>
          <div className="flex items-center gap-1">
            <p className="text-gray-500 dark:text-gray-400">نام:</p>
            <p>
              {userName?.firstname} {userName?.lastname}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-gray-500 dark:text-gray-400">شماره تماس:</p>
            <p>{userContact.phone}</p>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-gray-500 dark:text-gray-400">آدرس:</p>
            <p>
              {userContact.address.city} - {userContact.address.street} -{" "}
              {userContact.address.number}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-gray-500 dark:text-gray-400">کد پستی:</p>
            <p>{userContact.address.zipcode}</p>
          </div>
        </div>
        <div className="relative border p-4 pb-0 mb-6 rounded-lg">
          <h3 className="absolute -top-3 right-2 text-sm px-1.5 bg-white dark:bg-slate-800 transition">
            سبد خرید
          </h3>
          <div>
            {cart.map((item) => (
              <CheckoutCartItem key={item.id} {...item} />
            ))}
          </div>
        </div>
        <div className="relative border p-4 mb-4 rounded-lg">
          <h3 className="absolute -top-3 right-2 text-sm px-1.5 bg-white dark:bg-slate-800 transition">
            پرداخت
          </h3>
          <div className="flex items-center gap-1 text-green-500">
            <p className="text-gray-500 dark:text-gray-400">سود شما:</p>
            <p>{JSON.parse(sessionCart!).totalDiscount}$</p>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-gray-500 dark:text-gray-400">قابل پرداخت:</p>
            <p>{JSON.parse(sessionCart!).totalPrice}$</p>
          </div>
        </div>
        <div>
          <button
            onClick={handlePay}
            className="px-4 py-2 rounded-lg border border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 hover:text-white hover:bg-blue-500 dark:hover:bg-blue-400 transition"
          >
            پرداخت
          </button>
        </div>
      </section>
    </>
  );
}

export default CheckoutInfo;
