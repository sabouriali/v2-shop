import { useEffect, useState } from "react";
import { Link } from "react-router";
import { HiMiniReceiptPercent } from "react-icons/hi2";
import { FaMinus, FaPlus, FaTrashCan } from "react-icons/fa6";

import { useStoreDispatch } from "../hooks/useStore";
import { addToCart, removeFromCart } from "../redux/slices/cartSlice";

import { getSingleProduct } from "../utility/api";

import Loading from "./UI/Loading";
import DeleteItemAlert from "./DeleteItemAlert";

import { type CartItemProps } from "../types/componentTypes";
import { type TProduct } from "../types/productTypes";

function CartItem({ id, title, price, qty, discount, type }: CartItemProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState<TProduct>();
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getSingleProduct(id).then((res) => {
      setProduct(res.product);
      setIsLoading(false);
    });
  }, [id]);

  const dispatch = useStoreDispatch();

  function handleAddToCart() {
    dispatch(
      addToCart({
        id,
        title,
        price,
        discount,
      })
    );
  }

  function handleRemoveFromCart() {
    if (qty === 1) {
      setAlert(true);
      return;
    }

    dispatch(removeFromCart(id));
  }

  function handleCloseAlert() {
    setAlert(false);
  }

  function handleDeleteFromCart() {
    dispatch(removeFromCart(id));
  }

  return (
    <>
      <DeleteItemAlert
        showAlert={alert}
        closeAlert={handleCloseAlert}
        deleteProduct={handleDeleteFromCart}
        product={product}
      />
      {type === "mobile" ? (
        <div className="pb-2 pr-2 mb-2 bg-white dark:bg-slate-700 rounded transition">
          <Link
            to={`/products/category/${product?.category}/${id}`}
            className="flex items-center gap-1"
          >
            <img src={product?.image} className="w-10 h-10 rounded-tl" />
            <p className="line-clamp-2 text-justify mt-2">
              x{qty} {product?.title}
            </p>
          </Link>
          <div className="flex items-center justify-between ml-2">
            <div className="flex items-center justify-start gap-4">
              <p>{price * qty}$</p>
              {discount && (
                <>
                  <span>/</span>
                  <p className="flex items-center gap-1 text-green-500">
                    <HiMiniReceiptPercent />
                    {discount * qty}$
                  </p>
                </>
              )}
            </div>
            <div className="flex items-center justify-end gap-2">
              <button
                onClick={handleRemoveFromCart}
                className={`p-2 border rounded-lg transition ${
                  qty === 1
                    ? "border-transparent text-gray-300 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400"
                    : "border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 hover:text-white hover:bg-blue-500 dark:hover:bg-blue-400"
                }`}
              >
                {qty === 1 ? <FaTrashCan /> : <FaMinus />}
              </button>
              <button
                onClick={handleAddToCart}
                className="p-2 rounded-lg border border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 hover:text-white hover:bg-blue-500 dark:hover:bg-blue-400 transition"
              >
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <tr>
          {isLoading ? (
            <div className="p-4">
              <Loading />
            </div>
          ) : (
            <>
              <td className="text-left p-2">
                <Link
                  to={`/products/category/${product?.category}/${id}`}
                  className="flex items-center gap-1"
                >
                  <img src={product?.image} width={40} />
                  <p className="line-clamp-2 text-justify">{product?.title}</p>
                </Link>
              </td>
              <td className="text-center p-2 w-1/12">x{qty}</td>
              <td className="text-center p-2 w-[15%]">
                <p>{price * qty}$</p>
                {discount ? (
                  <p className="text-green-500">{discount * qty}$</p>
                ) : (
                  <p>---</p>
                )}
              </td>
              <td className="text-right p-2 w-[10%]">
                <div className="flex items-center justify-end gap-2">
                  <button
                    onClick={handleRemoveFromCart}
                    className={`p-2 border rounded-lg transition ${
                      qty === 1
                        ? "border-transparent text-gray-300 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400"
                        : "border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 hover:text-white hover:bg-blue-500 dark:hover:bg-blue-400"
                    }`}
                  >
                    {qty === 1 ? <FaTrashCan /> : <FaMinus />}
                  </button>
                  <button
                    onClick={handleAddToCart}
                    className="p-2 rounded-lg border border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 hover:text-white hover:bg-blue-500 dark:hover:bg-blue-400 transition"
                  >
                    <FaPlus />
                  </button>
                </div>
              </td>
            </>
          )}
        </tr>
      )}
    </>
  );
}

export default CartItem;
