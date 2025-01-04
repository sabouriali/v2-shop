import { type ChangeEvent, useEffect, useMemo, useState } from "react";
import { BsEmojiFrownFill, BsSearch } from "react-icons/bs";

import { getAllProducts } from "../utility/api";

import Backdrop from "./UI/Backdrop";

import { type SearchProps } from "../types/componentTypes";
import { type TProduct } from "../types/productTypes";
import ProductCard from "./ProductCard";

function Search({ showSearch, hideSearch }: SearchProps) {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllProducts().then((res) => setProducts(res.products));
  }, []);

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  const searchResult = useMemo(() => {
    return products.filter((product) => {
      return (
        search === "" ||
        product.title
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase()) ||
        product.brand
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase()) ||
        product.model.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
    });
  }, [products, search]);

  return (
    <>
      <Backdrop showBackdrop={showSearch} hideBackdrop={hideSearch} />
      <div
        className={`fixed p-4 rounded-2xl h-[90vh] container z-20 top-0 right-1/2 translate-x-1/2 bg-gray-50 dark:bg-slate-800 transition ${
          showSearch
            ? "opacity-100 translate-y-10 visible"
            : "opacity-0 invisible"
        }`}
      >
        <div className="sticky top-0 mb-4">
          <input
            autoFocus={true}
            type="text"
            placeholder="جستجو"
            value={search}
            onChange={handleSearch}
            className={`w-full mx-auto shadow-lg bg-slate-100 dark:bg-slate-700 dark:text-slate-200 px-4 py-2 rounded-lg outline-none transition ${
              showSearch
                ? "opacity-100 visible"
                : "opacity-0 -translate-y-10 invisible"
            }`}
          />
        </div>
        {search.length < 3 ? (
          <div className="absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 text-center p-12 w-96 shadow-lg rounded-2xl text-gray-400 bg-white dark:bg-slate-700 transition-colors">
            <p className="text-xl mb-2">دنبال جی می‌گردی؟</p>
            <BsSearch size={46} className="mx-auto" />
          </div>
        ) : (
          <>
            {searchResult.length === 0 ? (
              <div className="absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 text-center p-12 w-96 shadow-lg rounded-2xl text-gray-400 bg-white dark:bg-slate-700 transition-colors">
                <p className="text-xl mb-2">محصول موردنظر یافت نشد</p>
                <BsEmojiFrownFill size={46} className="mx-auto" />
              </div>
            ) : (
              <div className="overflow-scroll h-[91.5%] grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 pb-6">
                {searchResult.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onCloseSearch={hideSearch}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Search;
