import Backdrop from "./UI/Backdrop";

import { type DeleteAlertProps } from "../types/componentTypes";

function DeleteAlert({
  showAlert,
  closeAlert,
  deleteProduct,
  product,
}: DeleteAlertProps) {
  return (
    <>
      <Backdrop showBackdrop={showAlert} hideBackdrop={closeAlert} />
      <div
        className={`fixed z-20 p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-lg w-1/3 bottom-1/2 right-1/2 translate-y-1/2 translate-x-1/2 text-base transition ${
          showAlert
            ? "opacity-100 visible"
            : "opacity-0 translate-y-10 invisible"
        }`}
      >
        <p className="text-right mb-2">از حذف محصول مطمئن هستید؟</p>
        <div className="flex items-center gap-1 mb-2">
          <img src={product?.image} alt={product?.title} width={60} />
          <p className="text-justify">{product?.title}</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={closeAlert}
            className="px-2 py-1 rounded-lg border hover:bg-slate-500 hover:text-white transition"
          >
            انصراف
          </button>
          <button
            onClick={deleteProduct}
            className="px-2 py-1 rounded-lg border hover:bg-slate-500 hover:text-white transition"
          >
            حذف
          </button>
        </div>
      </div>
    </>
  );
}

export default DeleteAlert;
