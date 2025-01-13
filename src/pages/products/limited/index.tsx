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
    document.title = `مارکت لند | محصولات - صفحه ${page}`;
    handleLoadOnTop();
    setIsLoading(true);
    getProducts(JSON.parse(page!))
      .then((res) => {
        setProducts(res.products);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        throw alert(err.message);
      });
  }, [page]);

  const screenWidth = window.screen.width;

  function handleNext() {
    if (JSON.parse(page!) < 8) {
      navigate(`/products/${JSON.parse(page!) + 1}`);
    }
  }

  function handleBack() {
    if (JSON.parse(page!) > 1) {
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
        <div className="absolute content-center top-1/3 right-1/2 -translate-y-1/3 translate-x-1/2">
          <Loading />
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold">محصولات | صفحه {page}</h2>
            <button
              onClick={handleShowAll}
              className="text-sm hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              نمایش همه محصولات یکجا
            </button>
          </div>
          <div className="grid gap-2 md:gap-4 lg:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mb-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                type={screenWidth < 640 ? "mobile" : undefined}
              />
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
