import { useEffect, useState } from "react";

import { getSingleProduct } from "../utility/api";

import { type TProduct } from "../types/productTypes";
import { type CartHoverItemProps } from "../types/componentTypes";

function CartHoverItem({ id, price, qty, discount }: CartHoverItemProps) {
  const [product, setProduct] = useState<TProduct>();

  useEffect(() => {
    getSingleProduct(id).then((res) => setProduct(res.product));
  }, [id]);

  return (
    <div dir="ltr" className="py-2 text-sm">
      <div className="flex items-center gap-1">
        <img src={product?.image} alt={product?.title} width={40} />
        <p className="line-clamp-2 text-justify">
          x{qty} {product?.title}
        </p>
      </div>
      <div className="flex items-center justify-between">
        {product?.discount ? (
          <>
            <p>{price * qty}$</p>
            <div className="flex items-center gap-1 text-xs">
              <p>تخفیف:</p>
              <p className="text-red-500">{(product.price - price) * qty}$</p>
            </div>
          </>
        ) : (
          <p>{price * qty}$</p>
        )}
      </div>
    </div>
  );
}

export default CartHoverItem;
