import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import Backdrop from "./UI/Backdrop";

import { type RegisterAlertProps } from "../types/componentTypes";

function RegisterAlert({ showMessage, hideMessage }: RegisterAlertProps) {
  return (
    <>
      <Backdrop showBackdrop={showMessage} hideBackdrop={hideMessage} />
      <div
        className={`fixed z-20 p-4 rounded-2xl w-[90%] sm:w-4/5 md:w-[70%] lg:w-3/5 xl:w-1/2 2xl:w-2/5 top-1/3 right-1/2 -translate-y-1/3 translate-x-1/2 bg-white dark:bg-slate-800 shadow-lg transition ${
          showMessage
            ? "opacity-100 visible"
            : "opacity-0 -translate-y-28 invisible"
        }`}
      >
        <h3 className="text-lg font-bold mb-4">لطفا در نظر داشته باشید</h3>
        <p className="text-justify mb-4">
          با توجه به اینکه در سایت از فیک api استفاده شده، شما پس از ثبت نام
          قادر به ورود با اطلاعاتی که با آن ثبت نام کرده‌اید نیستید.
          <br />
          تنها می‌توانید از اطلاعاتی که توسط{" "}
          <a
            href="https://fakestoreapi.in"
            target="_blank"
            className="text-blue-600 dark:text-blue-500"
          >
            api
          </a>{" "}
          ارائه شده استفاده کنید.
          <br />
          با تشکر
        </p>
        <button
          onClick={hideMessage}
          className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm border border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 hover:text-white hover:bg-blue-500 dark:hover:bg-blue-400 transition"
        >
          <IoMdCheckmarkCircleOutline />
          متوجه شدم
        </button>
      </div>
    </>
  );
}

export default RegisterAlert;
