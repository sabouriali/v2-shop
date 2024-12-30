import { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaMinus, FaPlus, FaTrashCan } from "react-icons/fa6";

import { useStoreDispatch } from "../hooks/useStore";
import { addToCart, removeFromCart } from "../redux/slices/cartSlice";

import { getSingleProduct } from "../utility/api";

import Loading from "./UI/Loading";

import { type CartItemProps } from "../types/componentTypes";
import { type TProduct } from "../types/productTypes";
import DeleteAlert from "./DeleteAlert";

function CartItem({ id, price, qty, discount }: CartItemProps) {
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
      <DeleteAlert
        showAlert={alert}
        closeAlert={handleCloseAlert}
        deleteProduct={handleDeleteFromCart}
        product={product}
      />
      <tr>
        {isLoading ? (
          <div className="p-4">
            <Loading />
          </div>
        ) : (
          <>
            <td className="text-left p-2">
              <Link to={`/products/${id}`} className="flex items-center gap-1">
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
                  className="p-2 border rounded-lg hover:bg-slate-500 hover:text-white transition"
                >
                  {qty === 1 ? <FaTrashCan /> : <FaMinus />}
                </button>
                <button
                  onClick={handleAddToCart}
                  className="p-2 border rounded-lg hover:bg-slate-500 hover:text-white transition"
                >
                  <FaPlus />
                </button>
              </div>
            </td>
          </>
        )}
      </tr>
    </>
  );
}

export default CartItem;
