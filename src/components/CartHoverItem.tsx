import { useEffect, useState } from "react";
import { HiMiniReceiptPercent } from "react-icons/hi2";

import { getSingleProduct } from "../utility/api";

import Loading from "./UI/Loading";

import { type TProduct } from "../types/productTypes";
import { type CartHoverItemProps } from "../types/componentTypes";

function CartHoverItem({ id, price, qty }: CartHoverItemProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState<TProduct>();

  useEffect(() => {
    setIsLoading(true);
    getSingleProduct(id).then((res) => {
      setProduct(res.product);
      setIsLoading(false);
    });
  }, [id]);

  return (
    <>
      {isLoading ? (
        <div className="p-4">
          <Loading />
        </div>
      ) : (
        <div dir="ltr" className="py-2 text-sm">
          <div className="flex items-center gap-1 mb-2">
            <img src={product?.image} alt={product?.title} width={40} />
            <p className="line-clamp-2 text-justify">
              x{qty} {product?.title}
            </p>
          </div>
          <div className="flex items-center justify-between">
            {product?.discount ? (
              <>
                <p>{price * qty}$</p>
                <div className="flex items-center gap-1 text-xs text-red-500 dark:text-red-400">
                  <HiMiniReceiptPercent />
                  <p>{(product.price - price) * qty}$</p>
                </div>
              </>
            ) : (
              <p>{price * qty}$</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default CartHoverItem;
