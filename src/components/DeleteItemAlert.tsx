import { FaTrashCan, FaX } from "react-icons/fa6";

import Backdrop from "./UI/Backdrop";

import { type DeleteItemAlertProps } from "../types/componentTypes";

function DeleteItemAlert({
  showAlert,
  closeAlert,
  deleteProduct,
  product,
}: DeleteItemAlertProps) {
  return (
    <>
      <Backdrop showBackdrop={showAlert} hideBackdrop={closeAlert} />
      <div
        className={`fixed z-20 p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-lg w-[90%] sm:w-4/5 md:w-[70%] lg:w-3/5 xl:w-1/2 2xl:w-2/5 top-1/3 right-1/2 -translate-y-1/3 translate-x-1/2 text-base transition ${
          showAlert
            ? "opacity-100 visible"
            : "opacity-0 -translate-y-24 invisible"
        }`}
      >
        <p className="text-right text-lg font-bold mb-4">
          از حذف محصول مطمئن هستید؟
        </p>
        <div className="flex items-center gap-1 mb-4">
          <img src={product?.image} alt={product?.title} width={60} />
          <p className="text-justify">{product?.title}</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={deleteProduct}
            className="flex items-center gap-1 text-sm px-3 py-2 text-gray-500 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition"
          >
            حذف
            <FaTrashCan />
          </button>
          <button
            onClick={closeAlert}
            className="flex items-center gap-1 px-4 py-2 border rounded-lg border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 transition"
          >
            انصراف
            <FaX />
          </button>
        </div>
      </div>
    </>
  );
}

export default DeleteItemAlert;
