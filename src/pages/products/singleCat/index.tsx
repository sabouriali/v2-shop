import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MdFilterAltOff } from "react-icons/md";
import { FaFilter } from "react-icons/fa";

import { getSingleCatProducts } from "../../../utility/api";

import Loading from "../../../components/UI/Loading";
import ProductCard from "../../../components/ProductCard";
import SortBar from "../../../components/SortBar";
import FilterMenu from "../../../components/FilterMenu";

import { type TProduct } from "../../../types/productTypes";

function SingleCatPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<TProduct[]>([]);
  const [sort, setSort] = useState("def");
  const [onSale, setOnSale] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [filterBrands, setFilterBrands] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<TProduct[]>([]);

  const { cat } = useParams();

  useEffect(() => {
    document.title = `مارکت لند | ${handleCat()}`;
    handleLoadOnTop();
    setIsLoading(true);
    getSingleCatProducts(cat!)
      .then((res) => {
        setProducts(res.products);
        setOnSale(true);
        setFilterBrands([]);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        throw alert(err.message);
      });
  }, [cat]);

  // اعمال فیلترها و مرتب‌سازی
  useEffect(() => {
    handleLoadOnTop();

    let updatedProducts = [...products];

    // فیلتر برند
    if (filterBrands.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        filterBrands.includes(product.brand.toLocaleLowerCase())
      );
    }

    // فیلتر تخفیف
    if (!onSale) {
      updatedProducts = updatedProducts.filter((product) => product.onSale);
    }

    // مرتب‌سازی
    if (sort === "asc") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sort === "desc") {
      updatedProducts.sort((a, b) => b.price - a.price);
    } else if (sort === "popular") {
      updatedProducts.sort((a, b) => {
        if (a.popular && !b.popular) return -1;
        if (!a.popular && b.popular) return 1;
        return 0;
      });
    }

    setFilteredProducts(updatedProducts);
  }, [products, filterBrands, onSale, sort]);

  const screenWidth = window.screen.width;

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

  // مدیریت فیلتر برند
  const handleFilterBrands = (updatedBrands: string[]) => {
    setFilterBrands(updatedBrands);
  };

  // مدیریت فیلتر تخفیف
  const handleOnSale = (data: boolean) => {
    setOnSale(data);
  };

  // مدیریت مرتب‌سازی
  const handleSort = (type: string) => {
    setSort(type);
  };

  // بازنشانی تمام فیلترها
  const handleClearFilters = () => {
    setFilterBrands([]);
    setOnSale(true);
    setSort("def");
  };

  // محصولات برای نمایش
  const displayedProducts =
    filteredProducts.length > 0 || filterBrands.length > 0
      ? filteredProducts
      : products;

  function handleLoadOnTop() {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }

  const filters = filterBrands.length + (onSale ? 0 : 1);

  return (
    <>
      {isLoading ? (
        <div className="absolute content-center top-1/3 right-1/2 -translate-y-1/3 translate-x-1/2">
          <Loading />
        </div>
      ) : (
        <>
          <div
            className={`mb-6 ${
              screenWidth < 640 && "flex items-center justify-between"
            }`}
          >
            <h2 className="text-lg font-bold">{handleCat()}</h2>
            <SortBar
              sort={sort}
              handleSort={handleSort}
              type={screenWidth < 640 ? "mobile" : undefined}
            />
            {screenWidth < 640 && (
              <button
                onClick={() => setShowFilters(true)}
                className={`fixed bottom-4 left-4 z-[5] p-4 text-white rounded-full shadow-md ${
                  filters === 0 ? "bg-gray-500" : "bg-red-500"
                }`}
              >
                <FaFilter />
              </button>
            )}
          </div>
          <div className={screenWidth < 640 ? "" : "flex gap-6"}>
            {screenWidth < 640 ? (
              <FilterMenu
                type="mobile"
                showFilters={showFilters}
                hideFilters={() => setShowFilters(false)}
                brands={products.map((product) =>
                  product.brand.toLocaleLowerCase()
                )}
                onClearFilters={handleClearFilters}
                onFilterBrands={handleFilterBrands}
                onSale={handleOnSale}
              />
            ) : (
              <aside className="sticky top-6 w-1/3 md:w-1/4 lg:w-1/5 h-fit p-4 text-sm bg-white dark:bg-slate-700 shadow rounded-2xl transition">
                <FilterMenu
                  brands={products.map((product) =>
                    product.brand.toLocaleLowerCase()
                  )}
                  onClearFilters={handleClearFilters}
                  onFilterBrands={handleFilterBrands}
                  onSale={handleOnSale}
                />
              </aside>
            )}
            <div className="w-full grid gap-2 lg:gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
              {displayedProducts.length > 0 ? (
                displayedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    type={screenWidth < 640 ? "mobile" : undefined}
                  />
                ))
              ) : (
                <div className="absolute right-1/2 translate-x-1/2 top-1/4 -translate-y-1/4 text-center p-12 w-96 shadow-lg rounded-2xl text-gray-400 bg-white dark:bg-slate-700 transition-colors">
                  <p className="text-xl mb-4">محصولی برای نمایش وجود ندارد</p>
                  <MdFilterAltOff size={46} className="mx-auto" />
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default SingleCatPage;
