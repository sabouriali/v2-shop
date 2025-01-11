import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { MdSell } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { RiDiscountPercentFill } from "react-icons/ri";

import { getAllProducts } from "../../utility/api";

import Loading from "../../components/UI/Loading";
import ProductCard from "../../components/ProductCard";

import { type TProduct } from "../../types/productTypes";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    document.title = "مارکت لند | صفحه اصلی";
    handleLoadOnTop();
    setIsLoading(true);
    getAllProducts().then((res) => {
      setProducts(res.products);
      setIsLoading(false);
    });
  }, []);

  const navigate = useNavigate();

  function handleLoadOnTop() {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }

  return (
    <>
      <div className="relative px-4 pt-4 mb-12 flex items-center gap-2 bg-gray-200 dark:bg-gray-600 rounded-3xl transition">
        {isLoading ? (
          <div className="h-80 mx-auto top-1/2 translate-y-1/2">
            <Loading />
          </div>
        ) : (
          <>
            <div className="w-[5.625rem]">
              <h2 className="font-bold mb-6">پیشنهاد شگفت‌انگیز</h2>
              <RiDiscountPercentFill size={46} />
              <button
                onClick={() => navigate("/products/onsale")}
                className="flex items-center text-sm w-[5.625rem] mt-6 hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                مشاهده همه
                <IoIosArrowBack />
              </button>
            </div>
            <div className="flex items-center gap-2 overflow-x-scroll pb-4">
              {products
                .filter((product) => product.onSale)
                .splice(0, 10)
                .map((product) => (
                  <div key={product.id}>
                    <ProductCard product={product} homePage />
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
      <div className="relative px-4 pt-4 flex items-center gap-2 bg-gray-200 dark:bg-gray-600 rounded-3xl transition">
        {isLoading ? (
          <div className="h-80 mx-auto top-1/2 translate-y-1/2">
            <Loading />
          </div>
        ) : (
          <>
            <div className="w-[5.625rem]">
              <h2 className="font-bold mb-6">محصولات پرفروش</h2>
              <MdSell size={46} />
              <button
                onClick={() => navigate("/products/popular")}
                className="flex items-center text-sm w-[5.625rem] mt-6 hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                مشاهده همه
                <IoIosArrowBack />
              </button>
            </div>
            <div className="flex items-center gap-2 overflow-x-scroll pb-4">
              {products
                .filter((product) => product.popular)
                .splice(0, 10)
                .map((product) => (
                  <div key={product.id}>
                    <ProductCard product={product} homePage />
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Home;
