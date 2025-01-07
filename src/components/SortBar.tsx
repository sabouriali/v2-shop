import { useEffect, useState } from "react";
import { MdSort } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

import SortMenu from "./SortMenu";

import { type SortBarProps } from "../types/componentTypes";

function SortBar({ sort, handleSort, type, popular }: SortBarProps) {
  const [showSort, setShowSort] = useState(false);

  useEffect(() => {
    setShowSort(false);
  }, [sort]);

  return (
    <>
      {type === "mobile" ? (
        <div className="relative">
          <button
            onClick={() => setShowSort(!showSort)}
            className={`flex items-center gap-1 transition ${
              showSort && "text-blue-500 dark:text-blue-400"
            }`}
          >
            <MdSort />
            مرتب‌سازی
            <IoIosArrowDown
              className={`transition ${showSort && "rotate-180"}`}
            />
          </button>
          <SortMenu
            sort={sort}
            hideMenu={() => setShowSort(false)}
            showMenu={showSort}
            handleSort={handleSort}
            popular={popular}
          />
        </div>
      ) : (
        <div className="flex items-center gap-2 text-sm">
          <p className="flex items-center gap-1">
            <MdSort />
            مرتب‌سازی:
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleSort("def")}
              className={`hover:text-red-500 dark:hover:text-red-400 transition ${
                sort === "def" ? "text-red-500 dark:text-red-400" : ""
              }`}
            >
              پیش‌فرض
            </button>
            <button
              onClick={() => handleSort("desc")}
              className={`hover:text-red-500 dark:hover:text-red-400 transition ${
                sort === "desc" ? "text-red-500 dark:text-red-400" : ""
              }`}
            >
              گران‌ترین
            </button>
            <button
              onClick={() => handleSort("asc")}
              className={`hover:text-red-500 dark:hover:text-red-400 transition ${
                sort === "asc" ? "text-red-500 dark:text-red-400" : ""
              }`}
            >
              ارزان‌ترین
            </button>
            {!popular && (
              <button
                onClick={() => handleSort("popular")}
                className={`hover:text-red-500 dark:hover:text-red-400 transition ${
                  sort === "popular" ? "text-red-500 dark:text-red-400" : ""
                }`}
              >
                پیشنهاد خریداران
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default SortBar;
