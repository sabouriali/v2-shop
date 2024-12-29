import { type ChangeEvent, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import { MdFilterAltOff } from "react-icons/md";

import ToggleSwitch from "./UI/ToggleSwitch";

import { type FilterMenuProps } from "../types/componentTypes";

function FilterMenu({
  brands,
  sendOnSale,
  onFilterBrands,
  onClearFilters,
}: FilterMenuProps) {
  const [onSaleCheck, setOnSaleCheck] = useState(false);
  const [showBrand, setShowBrand] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  function handleOnSaleCheck() {
    setOnSaleCheck(!onSaleCheck);
    sendOnSale(onSaleCheck);
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
          <IoIosArrowDown
            className={`transition ${showBrand ? "rotate-180" : ""}`}
          />
        </button>
        <div
          className={`transition ${
            showBrand
              ? "visible opacity-100 translate-y-0 max-h-[72vh] overflow-scroll"
              : "invisible opacity-0 -translate-y-4 h-0"
          }`}
        >
          {brands.map((item) => (
            <div key={item} className="flex items-center justify-between">
              <input type="checkbox" id={item} onChange={handleFilterBrands} />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <button
          onClick={onClearFilters}
          className="flex items-center gap-1 justify-center px-3 py-2 rounded-lg w-full border border-red-500 text-red-500 hover:text-white hover:bg-red-500 transition"
        >
          حذف فیلترها
          <MdFilterAltOff />
        </button>
      </div>
    </>
  );
}

export default FilterMenu;
