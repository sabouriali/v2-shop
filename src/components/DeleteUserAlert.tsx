import Backdrop from "./UI/Backdrop";

import { type DeleteUserAlertProps } from "../types/componentTypes";

function DeleteUserAlert({
  showDeleteMessage,
  hideDeleteMessage,
  onDeleteUser,
}: DeleteUserAlertProps) {
  function handleClickDelete() {
    hideDeleteMessage();
    onDeleteUser();
  }

  return (
    <>
      <Backdrop
        showBackdrop={showDeleteMessage}
        hideBackdrop={hideDeleteMessage}
      />
      <div
        className={`fixed z-20 p-4 rounded-2xl w-1/2 top-1/3 right-1/2 -translate-y-1/3 translate-x-1/2 bg-white dark:bg-slate-800 shadow-lg transition ${
          showDeleteMessage
            ? "opacity-100 visible"
            : "opacity-0 -translate-y-24 invisible"
        }`}
      >
        <p className="text-lg font-bold mb-4">از حذف حساب خود مطمئن هستید؟</p>
        <div className="flex items-center justify-between">
          <button
            onClick={hideDeleteMessage}
            className="px-3 py-2 border rounded-lg border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 transition"
          >
            انصراف
          </button>
          <button
            onClick={handleClickDelete}
            className="text-sm px-3 py-2 text-gray-300 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition"
          >
            حذف
          </button>
        </div>
      </div>
    </>
  );
}

export default DeleteUserAlert;
