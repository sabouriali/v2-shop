import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { MdRemoveShoppingCart } from "react-icons/md";
import { FaCheck, FaTrashCan } from "react-icons/fa6";

import { useStoreDispatch, useStoreSelector } from "../../hooks/useStore";

import {
  clearCart,
  getCartQty,
  getTotalDiscount,
  getTotalPrice,
} from "../../redux/slices/cartSlice";

import CartItem from "../../components/CartItem";
import DeleteCartAlert from "../../components/DeleteCartAlert";

function CartPage() {
  const [showDeleteCartAlert, setShowDeleteCartAlert] = useState(false);

  useEffect(() => {
    document.title = "مارکت لند | سبد خرید";
    handleLoadOnTop();
  }, []);

  const cart = useStoreSelector((state) => state.cart.items);
  const dispatch = useStoreDispatch();

  const cartQty = getCartQty(cart);
  const totalPrice = getTotalPrice(cart);
  const totalDiscount = getTotalDiscount(cart);

  const navigate = useNavigate();

  const screenWidth = window.screen.width;

  function handleLoadOnTop() {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }

  function handleContinue() {
    const cartExtras = {
      cartQty,
      totalPrice,
      totalDiscount,
    };

    sessionStorage.setItem("cart", JSON.stringify(cartExtras));

    navigate("checkout");
  }

  return (
    <>
      <DeleteCartAlert
        showDeleteMessage={showDeleteCartAlert}
        hideDeleteMessage={() => setShowDeleteCartAlert(false)}
        onDeleteCart={() => dispatch(clearCart())}
      />
      <h2 className="text-xl font-bold mb-6">سبد خرید</h2>
      {cartQty === 0 ? (
        <div className="absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 text-center p-12 w-96 shadow-lg rounded-2xl text-gray-400 bg-white dark:bg-slate-700 transition-colors">
          <p className="text-xl mb-4">سبد خرید خالی است</p>
          <MdRemoveShoppingCart size={46} className="mx-auto" />
        </div>
      ) : (
        <div
          dir="ltr"
          className="p-4 shadow-lg rounded-2xl bg-white dark:bg-slate-700 transition"
        >
          {screenWidth < 640 ? (
            <div className="bg-gray-100 dark:bg-slate-800 px-2 pt-2 max-h-[18.25rem] overflow-y-scroll rounded-lg mb-4 text-sm">
              {cart.map((item) => (
                <CartItem key={item.id} {...item} type="mobile" />
              ))}
            </div>
          ) : (
            <table className="w-full mb-4 border-b">
              <thead className="border-b">
                <tr>
                  <th className="py-1 px-2 text-left">عنوان</th>
                  <th className="py-1 px-2 text-center">تعداد</th>
                  <th className="py-1 px-2 text-center">
                    <p>قابل پرداخت</p>
                    <p>تخفیف</p>
                  </th>
                  <th className="py-1 px-2 text-right">تغییر</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {cart.map((item) => (
                  <CartItem key={item.id} {...item} />
                ))}
              </tbody>
            </table>
          )}
          <div
            dir="rtl"
            className={`border-b mb-4 ${screenWidth < 640 && "text-sm"}`}
          >
            <div className="flex items-center gap-1 mb-2 text-green-500">
              <p>سود شما از این خرید:</p>
              <p>{totalDiscount}$</p>
            </div>
            <div className="flex items-center gap-1 mb-2">
              <p>قابل پرداخت:</p>
              <p>{totalPrice}$</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowDeleteCartAlert(true)}
              className="flex items-center gap-1 text-sm px-4 py-2 text-gray-500 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition"
            >
              حذف سفارش
              <FaTrashCan />
            </button>
            <button
              onClick={handleContinue}
              className="flex items-center border px-4 py-2 rounded-lg border-green-500 text-green-500 hover:text-white hover:bg-green-500 transition"
            >
              ثبت سفارش
              <FaCheck className="ml-1" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CartPage;
