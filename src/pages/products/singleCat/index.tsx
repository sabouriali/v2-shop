import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MdSort } from "react-icons/md";

import { getSingleCatProducts } from "../../../utility/api";

import Loading from "../../../components/UI/Loading";
import ProductCard from "../../../components/ProductCard";

import { type TProduct } from "../../../types/productTypes";

function SingleCatPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<TProduct[]>([]);
  const [sort, setSort] = useState("def");

  const { cat } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setSort("def");
    getSingleCatProducts(cat!).then((res) => {
      setProducts(res.products);
      setIsLoading(false);
    });
  }, [cat]);

  function handleCat() {
    let category: string = "";

    if (cat === "tv") {
      category = "تلویزیون";
    } else if (cat === "audio") {
      category = "هدفون، هندزفری، اسپیکر";
    } else if (cat === "laptop") {
      category = "لپ تاپ";
    } else if (cat === "mobile") {
      category = "گوشی موبایل";
    } else if (cat === "gaming") {
      category = "تجهیزات گیمینگ";
    } else if (cat === "appliances") {
      category = "لوازم خانگی";
    }

    return category;
  }

  function handleSortDef() {
    setProducts([]);
    const sortedProducts = [...products].sort((a, b) => a.id - b.id);
    setProducts(sortedProducts);
    setSort("def");
  }

  function handleSortPriceAsc() {
    setProducts([]);
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
    setSort("asc");
  }

  function handleSortPriceDesc() {
    setProducts([]);
    const sortedProducts = [...products].sort((a, b) => b.price - a.price);
    setProducts(sortedProducts);
    setSort("desc");
  }

  function handleSortPopular() {
    setProducts([]);
    const sortedProducts = [...products].sort((a, b) => {
      if (a.popular && !b.popular) {
        return -1;
      } else if (!a.popular && b.popular) {
        return 1;
      } else return 0;
    });
    setProducts(sortedProducts);
    setSort("popular");
  }

  return (
    <>
      {isLoading ? (
        <div className="absolute content-center top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 w-full h-full cursor-wait">
          <Loading />
        </div>
      ) : (
        <>
          <div className="mb-6">
            <h2 className="text-lg font-bold">{handleCat()}</h2>
            <div className="flex items-center gap-2 text-sm">
              <p className="flex items-center gap-1">
                <MdSort />
                مرتب‌سازی:
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={handleSortDef}
                  className={`hover:text-red-500 transition ${
                    sort === "def" ? "text-red-500" : ""
                  }`}
                >
                  پیش‌فرض
                </button>
                <button
                  onClick={handleSortPriceDesc}
                  className={`hover:text-red-500 transition ${
                    sort === "desc" ? "text-red-500" : ""
                  }`}
                >
                  گران‌ترین
                </button>
                <button
                  onClick={handleSortPriceAsc}
                  className={`hover:text-red-500 transition ${
                    sort === "asc" ? "text-red-500" : ""
                  }`}
                >
                  ارزان‌ترین
                </button>
                <button
                  onClick={handleSortPopular}
                  className={`hover:text-red-500 transition ${
                    sort === "popular" ? "text-red-500" : ""
                  }`}
                >
                  پیشنهاد خریداران
                </button>
              </div>
            </div>
          </div>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default SingleCatPage;
