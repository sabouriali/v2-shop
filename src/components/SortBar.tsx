import { MdSort } from "react-icons/md";

import { type SortBarProps } from "../types/componentTypes";

function SortBar({ sort, handleSort }: SortBarProps) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <p className="flex items-center gap-1">
        <MdSort />
        مرتب‌سازی:
      </p>
      <div className="flex flex-wrap items-center gap-4">
        <button
          onClick={() => handleSort("def")}
          className={`hover:text-red-500 transition ${
            sort === "def" ? "text-red-500" : ""
          }`}
        >
          پیش‌فرض
        </button>
        <button
          onClick={() => handleSort("desc")}
          className={`hover:text-red-500 transition ${
            sort === "desc" ? "text-red-500" : ""
          }`}
        >
          گران‌ترین
        </button>
        <button
          onClick={() => handleSort("asc")}
          className={`hover:text-red-500 transition ${
            sort === "asc" ? "text-red-500" : ""
          }`}
        >
          ارزان‌ترین
        </button>
        <button
          onClick={() => handleSort("popular")}
          className={`hover:text-red-500 transition ${
            sort === "popular" ? "text-red-500" : ""
          }`}
        >
          پیشنهاد خریداران
        </button>
      </div>
    </div>
  );
}

export default SortBar;
