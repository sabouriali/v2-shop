import { MdRemoveShoppingCart } from "react-icons/md";
import { FaCheck, FaX } from "react-icons/fa6";

import { useStoreDispatch, useStoreSelector } from "../../hooks/useStore";

import {
  clearCart,
  getCartQty,
  getTotalDiscount,
  getTotalPrice,
} from "../../redux/slices/cartSlice";

import CartItem from "../../components/CartItem";

function CartPage() {
  const cart = useStoreSelector((state) => state.cart.items);
  const dispatch = useStoreDispatch();

  const cartQty = getCartQty(cart);
  const totalPrice = getTotalPrice(cart);
  const totalDiscount = getTotalDiscount(cart);

  function handleClearCart() {
    dispatch(clearCart());
  }

  return (
    <>
      <h1 className="text-xl font-bold mb-6">سبد خرید</h1>
      {cartQty === 0 ? (
        <div className="absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 text-center p-12 w-96 shadow-lg rounded-2xl text-gray-400 bg-white dark:bg-slate-700 transition-colors">
          <p className="text-xl">سبد خرید خالی است.</p>
          <MdRemoveShoppingCart size={46} className="mx-auto" />
        </div>
      ) : (
        <div
          dir="ltr"
          className="p-4 shadow-lg rounded-2xl bg-white dark:bg-slate-700 transition"
        >
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
          <div className="text-sm border-b mb-4">
            <div className="flex items-center gap-1 mb-2 text-green-500">
              <p>سود شما از این خرید:</p>
              <p>{totalDiscount}$</p>
            </div>
            <div className="flex items-center gap-1 mb-2">
              <p>قابل پرداخت:</p>
              <p>{totalPrice}$</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <button className="flex items-center border px-4 py-2 rounded-lg border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition">
              ثبت سفارش
              <FaCheck className="ml-1" />
            </button>
            <button
              onClick={handleClearCart}
              className="flex items-center border px-4 py-2 rounded-lg border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition"
            >
              حذف سفارش
              <FaX className="ml-1" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CartPage;