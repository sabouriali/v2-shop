import { useEffect, useState } from "react";

import { getAllProducts } from "../../../utility/api";

import Loading from "../../../components/UI/Loading";
import ProductCard from "../../../components/ProductCard";

import { type TProduct } from "../../../types/productTypes";
import SortBar from "../../../components/SortBar";

function OnSalePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<TProduct[]>([]);
  const [sort, setSort] = useState("def");

  useEffect(() => {
    document.title = "مارکت لند | پیشنهاد شگفت‌انگیز";
    handleLoadOnTop();
    setIsLoading(true);
    getAllProducts().then((res) => {
      setProducts(res.products.filter((product) => product.onSale));
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    let sortedList = [...products];

    if (sort === "def") {
      sortedList.sort((a, b) => a.id - b.id);
    } else if (sort === "asc") {
      sortedList.sort((a, b) => a.price - b.price);
    } else if (sort === "desc") {
      sortedList.sort((a, b) => b.price - a.price);
    } else if (sort === "popular") {
      sortedList.sort((a, b) => {
        if (a.popular && !b.popular) return -1;
        if (!a.popular && b.popular) return 1;
        return 0;
      });
    }

    setProducts(sortedList);
  }, [sort]);

  const screenWidth = window.screen.width;

  function handleLoadOnTop() {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }

  const handleSort = (type: string) => {
    setSort(type);
  };

  return (
    <>
      {isLoading ? (
        <div className="absolute content-center top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2">
          <Loading />
        </div>
      ) : (
        <>
          <div
            className={`mb-6 ${
              screenWidth < 640 && "flex items-center justify-between"
            }`}
          >
            <h2 className="text-lg font-bold">پیشنهاد شگفت‌انگیز</h2>
            <SortBar
              sort={sort}
              handleSort={handleSort}
              type={screenWidth < 640 ? "mobile" : undefined}
            />
          </div>
          <div className="grid gap-2 md:gap-4 lg:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mb-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                type={screenWidth < 640 ? "mobile" : undefined}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default OnSalePage;
