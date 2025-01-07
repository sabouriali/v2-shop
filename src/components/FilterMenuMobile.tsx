import { type ChangeEvent, useEffect, useMemo, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { MdFilterAltOff } from "react-icons/md";

import Backdrop from "./UI/Backdrop";
import ToggleSwitch from "./UI/ToggleSwitch";

import { type FilterMenuMobileProps } from "../types/componentTypes";

function FilterMenuMobile({
  showFilters,
  hideFilters,
  brands,
  onSale,
  onFilterBrands,
  onClearFilters,
}: FilterMenuMobileProps) {
  const [onSaleCheck, setOnSaleCheck] = useState(false);
  const [showBrand, setShowBrand] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  useEffect(() => {
    if (!showFilters) setShowBrand(false);
  }, [showFilters]);

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

  return (
    <>
      <Backdrop showBackdrop={showFilters} hideBackdrop={hideFilters} />
      <div
        className={`fixed z-20 w-full max-h-[50%] bottom-0 right-1/2 translate-x-1/2 bg-white dark:bg-slate-700 p-4 rounded-t-2xl shadow-lg transition ${
          showFilters
            ? "opacity-100 visible"
            : "opacity-0 invisible translate-y-96"
        }`}
      >
        <h3 className="flex items-center gap-1 text-lg font-bold mb-4">
          <FaFilter />
          فیلتر
        </h3>
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
            onClick={onClearFilters}
            className="flex items-center gap-1 justify-center px-3 py-2 rounded-lg w-full border border-red-500 dark:border-red-400 text-red-500 dark:text-red-400 hover:text-white hover:bg-red-500 dark:hover:bg-red-400 transition"
          >
            حذف فیلترها
            <MdFilterAltOff />
          </button>
        </div>
      </div>
    </>
  );
}

export default FilterMenuMobile;
