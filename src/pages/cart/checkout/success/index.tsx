import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

import { useStoreDispatch } from "../../../../hooks/useStore";
import { clearCart } from "../../../../redux/slices/cartSlice";

function SuccessPage() {
  const dispatch = useStoreDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, []);

  return (
    <div className="absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 text-center p-12 w-96 shadow-lg rounded-2xl bg-white dark:bg-slate-700 transition-colors">
      <p className="text-xl">سفارش شما با موفقیت ثبت شد</p>
      <p className="text-sm mb-4 text-gray-400">با‌تشکر از خرید شما</p>
      <FaCheckCircle size={46} className="mx-auto text-green-500" />
    </div>
  );
}

export default SuccessPage;
