import CartHoverItem from "./CartHoverItem";

import { type CartHoverProps } from "../types/componentTypes";

function CartHover({ cartHover, cart }: CartHoverProps) {
  return (
    <div
      className={`absolute top-[39px] left-0 z-10 w-96 max-h-96 px-4 py-2 overflow-scroll rounded-lg shadow-md bg-white dark:bg-slate-900 text-black dark:text-slate-50 transition ${
        cartHover
          ? "opacity-100 visible"
          : "opacity-0 invisible -translate-y-1"
      }`}
    >
      {cart.map((item) => (
        <CartHoverItem
          key={item.id}
          id={item.id}
          price={item.price}
          qty={item.qty}
        />
      ))}
    </div>
  );
}

export default CartHover;
