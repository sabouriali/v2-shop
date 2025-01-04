import { HiOutlineLogout } from "react-icons/hi";

import { useStoreDispatch } from "../hooks/useStore";
import { setLogout } from "../redux/slices/loginSlice";

import { type UserHoverMenuProps } from "../types/componentTypes";

function UserHoverMenu({ showMenu }: UserHoverMenuProps) {
  const dispatch = useStoreDispatch();

  function handleLogout() {
    dispatch(setLogout());
  }

  return (
    <div
      className={`absolute top-[39px] left-0 z-10 min-w-full px-4 py-2 overflow-scroll rounded-lg shadow-md bg-white dark:bg-slate-900 text-black dark:text-slate-50 transition ${
        showMenu
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-1"
      }`}
    >
      <button
        onClick={handleLogout}
        className="flex items-center gap-1 w-full px-3 py-2 rounded-lg text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      >
        <HiOutlineLogout />
        خروج
      </button>
    </div>
  );
}

export default UserHoverMenu;
