import { FaTrashCan, FaX } from "react-icons/fa6";

import Backdrop from "./UI/Backdrop";

import { type DeleteCartAlertProps } from "../types/componentTypes";

function DeleteCartAlert({
  showDeleteMessage,
  hideDeleteMessage,
  onDeleteCart,
}: DeleteCartAlertProps) {
  function handleClickDelete() {
    hideDeleteMessage();
    onDeleteCart();
  }

  return (
    <>
      <Backdrop
        showBackdrop={showDeleteMessage}
        hideBackdrop={hideDeleteMessage}
      />
      <div
        className={`fixed z-20 p-4 rounded-2xl w-[90%] sm:w-4/5 md:w-[70%] lg:w-3/5 xl:w-1/2 2xl:w-2/5 top-1/3 right-1/2 -translate-y-1/3 translate-x-1/2 bg-white dark:bg-slate-800 shadow-lg transition ${
          showDeleteMessage
            ? "opacity-100 visible"
            : "opacity-0 -translate-y-24 invisible"
        }`}
      >
        <p className="text-lg font-bold mb-4">
          از حذف سبد خرید خود مطمئن هستید؟
        </p>
        <div className="flex items-center justify-between">
          <button
            onClick={hideDeleteMessage}
            className="flex items-center gap-1 px-4 py-2 border rounded-lg border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 transition"
          >
            <FaX />
            انصراف
          </button>
          <button
            onClick={handleClickDelete}
            className="flex items-center gap-1 text-sm px-4 py-2 text-gray-500 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition"
          >
            <FaTrashCan />
            حذف
          </button>
        </div>
      </div>
    </>
  );
}

export default DeleteCartAlert;
