import { HiMiniReceiptPercent } from "react-icons/hi2";

import { type CheckoutCartItemProps } from "../types/componentTypes";

function CheckoutCartItem({
  title,
  qty,
  price,
  discount,
}: CheckoutCartItemProps) {
  return (
    <div dir="ltr" className="border rounded p-2 mb-4 text-sm">
      <p title={title} className="line-clamp-1">
        x{qty} {title}
      </p>
      <div className="flex items-center gap-4">
        <p>{price * qty}$</p>
        {discount && <span>/</span>}
        {discount && (
          <div className="flex items-center gap-1 text-green-500">
            <HiMiniReceiptPercent />
            <p>{discount * qty}$</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutCartItem;
