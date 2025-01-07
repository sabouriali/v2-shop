import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { IoIosArrowBack } from "react-icons/io";

import { getAllProducts } from "../../utility/api";

import Loading from "../../components/UI/Loading";
import ProductCard from "../../components/ProductCard";

import { type TProduct } from "../../types/productTypes";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
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
      <section>
        <h2 className="font-bold mb-4">پیشنهاد شگفت‌انگیز</h2>
        <div className="relative pb-10 flex items-center gap-2 overflow-x-scroll overflow-y-clip">
          {isLoading ? (
            <div className="h-96 top-1/2 mx-auto translate-y-1/2">
              <Loading />
            </div>
          ) : (
            <>
              {products
                .filter((product) => product.onSale)
                .splice(0, 6)
                .map((product) => (
                  <div key={product.id}>
                    <ProductCard product={product} />
                  </div>
                ))}
              <div className="min-w-[7.5rem]">
                <button
                  onClick={() => navigate("/products/onsale")}
                  className="flex items-center hover:text-blue-500 dark:hover:text-blue-400 transition"
                >
                  محصولات بیشتر
                  <IoIosArrowBack />
                </button>
              </div>
            </>
          )}
        </div>
      </section>
      <section>
        <h2 className="font-bold mb-4">محصولات پرفروش</h2>
        <div className="pb-10 flex items-center gap-2 overflow-x-scroll overflow-y-clip">
          {isLoading ? (
            <div className="h-96 top-1/2 mx-auto translate-y-1/2">
              <Loading />
            </div>
          ) : (
            <>
              {products
                .filter((product) => product.popular)
                .splice(0, 6)
                .map((product) => (
                  <div key={product.id}>
                    <ProductCard product={product} />
                  </div>
                ))}
              <div className="min-w-[7.5rem]">
                <button
                  onClick={() => navigate("/products/popular")}
                  className="flex items-center hover:text-blue-500 dark:hover:text-blue-400 transition"
                >
                  محصولات بیشتر
                  <IoIosArrowBack />
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;
