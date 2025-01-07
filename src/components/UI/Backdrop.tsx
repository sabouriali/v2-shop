import { BsXLg } from "react-icons/bs";

import { type BackdropProps } from "../../types/componentTypes";

function Backdrop({ showBackdrop, hideBackdrop }: BackdropProps) {
  return (
    <div
      className={
        showBackdrop
          ? "fixed top-0 left-0 opacity-100 visible min-h-screen w-full z-10 bg-[#00000080] backdrop-blur-sm transition"
          : "opacity-0 invisible"
      }
      onClick={hideBackdrop}
    >
      <button
        onClick={hideBackdrop}
        className="fixed left-0 top-0 z-20 p-2 rounded-full text-gray-300 hover:text-gray-600 hover:bg-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-700 transition"
      >
        <BsXLg size={24} />
      </button>
    </div>
  );
}

export default Backdrop;
