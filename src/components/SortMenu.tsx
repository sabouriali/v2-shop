import { type SortMenuProps } from "../types/componentTypes";

function SortMenu({
  showMenu,
  hideMenu,
  sort,
  handleSort,
  popular,
}: SortMenuProps) {
  return (
    <>
      {showMenu && (
        <div
          onClick={hideMenu}
          className="fixed top-0 right-0 w-full h-full z-10"
        />
      )}
      <div
        className={`absolute left-0 z-20 p-4 text-sm w-32 rounded-lg shadow-md bg-white dark:bg-slate-900 transition ${
          showMenu
            ? "opacity-100 visible"
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <div className="mb-2">
          <button
            onClick={() => handleSort("def")}
            className={`hover:text-red-500 dark:hover:text-red-400 transition ${
              sort === "def" ? "text-red-500 dark:text-red-400" : ""
            }`}
          >
            پیش‌فرض
          </button>
        </div>
        <div className="mb-2">
          <button
            onClick={() => handleSort("desc")}
            className={`hover:text-red-500 dark:hover:text-red-400 transition ${
              sort === "desc" ? "text-red-500 dark:text-red-400" : ""
            }`}
          >
            گران‌ترین
          </button>
        </div>
        <div className={popular ? "" : "mb-2"}>
          <button
            onClick={() => handleSort("asc")}
            className={`hover:text-red-500 dark:hover:text-red-400 transition ${
              sort === "asc" ? "text-red-500 dark:text-red-400" : ""
            }`}
          >
            ارزان‌ترین
          </button>
        </div>
        {!popular && (
          <div>
            <button
              onClick={() => handleSort("popular")}
              className={`hover:text-red-500 dark:hover:text-red-400 transition ${
                sort === "popular" ? "text-red-500 dark:text-red-400" : ""
              }`}
            >
              پیشنهاد خریداران
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default SortMenu;
