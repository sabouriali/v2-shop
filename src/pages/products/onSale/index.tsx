import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { TiArrowBack } from "react-icons/ti";

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

  const navigate = useNavigate();

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
        <div className="absolute content-center top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 w-full h-full cursor-wait">
          <Loading />
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold">پیشنهاد شگفت‌انگیز</h2>
              <SortBar sort={sort} handleSort={handleSort} />
            </div>
            <div>
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-1 px-2 py-2 border rounded-lg hover:bg-slate-500 hover:text-white transition"
              >
                بازگشت
                <TiArrowBack />
              </button>
            </div>
          </div>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mb-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default OnSalePage;
