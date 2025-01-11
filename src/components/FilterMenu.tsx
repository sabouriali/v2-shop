import { type ChangeEvent, useMemo, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { MdFilterAltOff } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import Backdrop from "./UI/Backdrop";
import ToggleSwitch from "./UI/ToggleSwitch";

import { type FilterMenuProps } from "../types/componentTypes";

function FilterMenu({
  brands,
  onSale,
  onFilterBrands,
  onClearFilters,
  type,
  showFilters,
  hideFilters,
}: FilterMenuProps) {
  const [onSaleCheck, setOnSaleCheck] = useState(false);
  const [showBrand, setShowBrand] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const sortedBrands = useMemo(() => {
    return Array.from(new Set(brands)).sort();
  }, [brands]);

  function handleOnSaleCheck() {
    setOnSaleCheck(!onSaleCheck);
    onSale(onSaleCheck);
  }

  function handleShowBrand() {
    setShowBrand(!showBrand);
  }

  function handleFilterBrands(e: ChangeEvent<HTMLInputElement>) {
    const updatedBrands = e.target.checked
      ? [...selectedBrands, e.target.id]
      : selectedBrands.filter((item) => item !== e.target.id);
    setSelectedBrands(updatedBrands);

    onFilterBrands(updatedBrands);
  }

  function handleClearFilters() {
    onClearFilters();
    setOnSaleCheck(false);
    setSelectedBrands([]);
    setShowBrand(false);
    if (type === "mobile") hideFilters!();
  }

  const filters = selectedBrands.length + (onSaleCheck ? 1 : 0);

  return (
    <>
      {type === "mobile" ? (
        <>
          <Backdrop showBackdrop={showFilters!} hideBackdrop={hideFilters!} />
          <div
            className={`fixed z-20 w-full max-h-[50%] bottom-0 right-1/2 translate-x-1/2 bg-white dark:bg-slate-700 p-4 rounded-t-2xl shadow-lg transition ${
              showFilters
                ? "opacity-100 visible"
                : "opacity-0 invisible translate-y-96"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="flex items-center gap-1 text-lg font-bold">
                <FaFilter />
                فیلتر
              </h3>
              {filters !== 0 && (
                <span className="w-5 h-5 text-xs text-center content-center rounded-full bg-red-500 dark:bg-red-400 text-white">
                  {filters}
                </span>
              )}
            </div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="onSale" className="cursor-pointer">
                پیشنهاد ویژه
              </label>
              <ToggleSwitch
                checked={onSaleCheck}
                changeCheck={handleOnSaleCheck}
                checkId="onSale"
              />
            </div>
            <div className="mb-2">
              <button
                onClick={handleShowBrand}
                className="w-full flex items-center justify-between"
              >
                برند
                <IoIosArrowUp
                  className={`transition ${showBrand ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`transition ${
                  showBrand
                    ? "visible opacity-100 translate-y-0 max-h-[27vh] overflow-scroll"
                    : "invisible opacity-0 translate-y-4 h-0"
                }`}
              >
                {sortedBrands.map((item) => (
                  <div key={item} className="flex items-center justify-between">
                    <input
                      type="checkbox"
                      id={item}
                      onChange={handleFilterBrands}
                    />
                    <label htmlFor={item}>{item}</label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <button
                onClick={handleClearFilters}
                className={`flex items-center gap-1 justify-center px-3 py-2 rounded-lg w-full border transition ${
                  onSaleCheck || selectedBrands.length > 0
                    ? "border-red-500 dark:border-red-400 text-red-500 dark:text-red-400 hover:text-white hover:bg-red-500 dark:hover:bg-red-400"
                    : "border-gray-300 bg-gray-300 text-white dark:border-gray-400 dark:bg-gray-400"
                }`}
              >
                حذف فیلترها
                <MdFilterAltOff />
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="max-h-[90vh]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="flex items-center gap-1 text-lg font-bold">
              <FaFilter />
              فیلتر
            </h3>
            {filters !== 0 && (
              <span className="w-5 h-5 text-xs text-center content-center rounded-full bg-red-500 dark:bg-red-400 text-white">
                {filters}
              </span>
            )}
          </div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="onSale" className="cursor-pointer">
              پیشنهاد ویژه
            </label>
            <ToggleSwitch
              checked={onSaleCheck}
              changeCheck={handleOnSaleCheck}
              checkId="onSale"
            />
          </div>
          <div className="mb-2">
            <button
              onClick={handleShowBrand}
              className="w-full flex items-center justify-between"
            >
              برند
              <IoIosArrowDown
                className={`transition ${showBrand ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`transition ${
                showBrand
                  ? "visible opacity-100 translate-y-0 max-h-[73vh] overflow-scroll"
                  : "invisible opacity-0 -translate-y-4 h-0"
              }`}
            >
              {sortedBrands.map((item) => (
                <div key={item} className="flex items-center justify-between">
                  <input
                    type="checkbox"
                    id={item}
                    onChange={handleFilterBrands}
                  />
                  <label htmlFor={item}>{item}</label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <button
              onClick={handleClearFilters}
              className={`flex items-center gap-1 justify-center px-3 py-2 rounded-lg w-full border transition ${
                onSaleCheck || selectedBrands.length > 0
                  ? "border-red-500 dark:border-red-400 text-red-500 dark:text-red-400 hover:text-white hover:bg-red-500 dark:hover:bg-red-400"
                  : "border-gray-300 bg-gray-300 text-white dark:border-gray-400 dark:bg-gray-400 cursor-not-allowed"
              }`}
            >
              <MdFilterAltOff />
              حذف فیلترها
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default FilterMenu;
