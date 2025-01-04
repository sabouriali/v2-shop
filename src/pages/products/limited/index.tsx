import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { getProducts } from "../../../utility/api";

import Loading from "../../../components/UI/Loading";
import ProductCard from "../../../components/ProductCard";

import { type TProduct } from "../../../types/productTypes";

function LimitedProductsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<TProduct[]>([]);

  const { page } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getProducts(JSON.parse(page!)).then((res) => {
      setProducts(res.products);
      setIsLoading(false);
    });
  }, [page]);

  function handleNext() {
    if (JSON.parse(page!) < 8) {
      handleLoadOnTop();
      navigate(`/products/${JSON.parse(page!) + 1}`);
    }
  }

  function handleBack() {
    if (JSON.parse(page!) > 1) {
      handleLoadOnTop();
      navigate(`/products/${JSON.parse(page!) - 1}`);
    }
  }

  function handleShowAll() {
    handleLoadOnTop();
    navigate("/products");
  }

  function handleLoadOnTop() {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }

  return (
    <>
      {isLoading ? (
        <div className="absolute content-center top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 w-full h-full cursor-wait">
          <Loading />
        </div>
      ) : (
        <>
          <h2 className="text-lg font-bold mb-6">محصولات | صفحه {page}</h2>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mb-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex items-center justify-between text-sm">
            <button
              onClick={handleNext}
              className={`flex items-center px-4 py-2 transition ${
                page === "8"
                  ? "cursor-not-allowed text-gray-300 dark:text-gray-500"
                  : "hover:text-blue-500 dark:hover:text-blue-400"
              }`}
            >
              <IoIosArrowForward />
              بعدی
            </button>
            <button
              onClick={handleShowAll}
              className="px-4 py-2 hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              نمایش همه محصولات یکجا
            </button>
            <button
              onClick={handleBack}
              className={`flex items-center px-4 py-2 transition ${
                page === "1"
                  ? "cursor-not-allowed text-gray-300 dark:text-gray-500"
                  : "hover:text-blue-500 dark:hover:text-blue-400"
              }`}
            >
              قبلی
              <IoIosArrowBack />
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default LimitedProductsPage;
