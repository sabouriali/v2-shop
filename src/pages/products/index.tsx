// ***کد خودم***
// import { useEffect, useState } from "react";
// import { MdFilterAltOff, MdSort } from "react-icons/md";

// import { getAllProducts } from "../../utility/api";

// import Loading from "../../components/UI/Loading";
// import ProductCard from "../../components/ProductCard";
// import FilterMenu from "../../components/FilterMenu";

// import { type TProduct } from "../../types/productTypes";

// function ProductsPage() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [products, setProducts] = useState<TProduct[]>([]);
//   const [sort, setSort] = useState("def");
//   const [onSale, setOnSale] = useState<boolean>();
//   const [filterBrands, setFilterBrands] = useState<string[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<TProduct[]>([]);

//   useEffect(() => {
//     setIsLoading(true);
//     getAllProducts().then((res) => {
//       setProducts(res.products);
//       setIsLoading(false);
//     });
//   }, []);

//   useEffect(() => {
//     let filtered = products;

//     if (filterBrands.length > 0) {
//       filtered = filtered.filter((product) =>
//         filterBrands.includes(product.brand)
//       );
//     }
//     if (onSale) {
//       filtered = filtered.filter((product) => product.onSale);
//     }

//     setFilteredProducts(filtered);
//   }, [products, filterBrands, onSale]);

//   const brands = products.map((item) => item.brand);
//   const filteredBrands = brands.filter(
//     (item, index) => brands.indexOf(item) === index
//   );
//   const sortedBrands = filteredBrands.sort();

//   function getOnSale(data: boolean) {
//     setOnSale(!data);

//     setFilteredProducts(products.filter((item) => item.onSale));
//   }

//   function getFilteredBrands(updatedBrands: string[]) {
//     setFilterBrands(updatedBrands);

//     const updatedFilteredProducts = products.filter((product) =>
//       updatedBrands.includes(product.brand)
//     );

//     setFilteredProducts(updatedFilteredProducts);
//   }

//   function handleSortDef() {
//     setProducts([]);
//     const sortedProducts = [...products].sort((a, b) => a.id - b.id);
//     setProducts(sortedProducts);
//     setSort("def");
//     localStorage.setItem("sort", sort);
//   }

//   function handleSortPriceAsc() {
//     setProducts([]);
//     const sortedProducts = [...products].sort((a, b) => a.price - b.price);
//     setProducts(sortedProducts);
//     setSort("asc");
//     localStorage.setItem("sort", sort);
//   }

//   function handleSortPriceDesc() {
//     setProducts([]);
//     const sortedProducts = [...products].sort((a, b) => b.price - a.price);
//     setProducts(sortedProducts);
//     setSort("desc");
//     localStorage.setItem("sort", sort);
//   }

//   function handleSortPopular() {
//     setProducts([]);
//     const sortedProducts = [...products].sort((a, b) => {
//       if (a.popular && !b.popular) {
//         return -1;
//       } else if (!a.popular && b.popular) {
//         return 1;
//       } else return 0;
//     });
//     setProducts(sortedProducts);
//     setSort("popular");
//     localStorage.setItem("sort", sort);
//   }

//   function handleClearFilters() {
//     setFilterBrands([]);
//     setOnSale(false);
//     setFilteredProducts([]);
//   }

//   return (
//     <>
//       {isLoading ? (
//         <div className="absolute content-center top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 w-full h-full cursor-wait">
//           <Loading />
//         </div>
//       ) : (
//         <>
//           <div className="mb-6">
//             <h2 className="text-lg font-bold">همه محصولات</h2>
//             <div className="flex items-center gap-2 text-sm">
//               <p className="flex items-center gap-1">
//                 <MdSort />
//                 مرتب‌سازی:
//               </p>
//               <div className="flex flex-wrap items-center gap-4">
//                 <button
//                   onClick={handleSortDef}
//                   className={`hover:text-red-500 transition ${
//                     sort === "def" ? "text-red-500" : ""
//                   }`}
//                 >
//                   پیش‌فرض
//                 </button>
//                 <button
//                   onClick={handleSortPriceDesc}
//                   className={`hover:text-red-500 transition ${
//                     sort === "desc" ? "text-red-500" : ""
//                   }`}
//                 >
//                   گران‌ترین
//                 </button>
//                 <button
//                   onClick={handleSortPriceAsc}
//                   className={`hover:text-red-500 transition ${
//                     sort === "asc" ? "text-red-500" : ""
//                   }`}
//                 >
//                   ارزان‌ترین
//                 </button>
//                 <button
//                   onClick={handleSortPopular}
//                   className={`hover:text-red-500 transition ${
//                     sort === "popular" ? "text-red-500" : ""
//                   }`}
//                 >
//                   پیشنهاد خریداران
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="flex gap-6">
//             <aside className="sticky top-6 w-1/4 lg:w-1/5 h-fit p-4 text-sm bg-white dark:bg-slate-700 shadow rounded-2xl transition">
//               <FilterMenu
//                 brands={sortedBrands}
//                 sendOnSale={getOnSale}
//                 onFilterBrands={getFilteredBrands}
//                 onClearFilters={handleClearFilters}
//               />
//             </aside>
//             <div className="w-full grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
//               {filteredProducts.length > 0 ? (
//                 filteredProducts.map((product) => (
//                   <ProductCard key={product.id} product={product} />
//                 ))
//               ) : filterBrands.length > 0 ? (
//                 <div className="absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 text-center p-12 w-96 shadow-lg rounded-2xl text-gray-400 bg-white dark:bg-slate-700 transition-colors">
//                   <p className="text-xl">محصولی برای نمایش وجود ندارد</p>
//                   <MdFilterAltOff size={46} className="mx-auto" />
//                 </div>
//               ) : (
//                 products.map((product) => (
//                   <ProductCard key={product.id} product={product} />
//                 ))
//               )}
//             </div>
//           </div>
//         </>
//       )}
//     </>
//   );
// }

// export default ProductsPage;

// ***بهینه سازی chatgpt***
import { useEffect, useState, useRef } from "react";
import { MdFilterAltOff } from "react-icons/md";

import { getAllProducts } from "../../utility/api";

import Loading from "../../components/UI/Loading";
import ProductCard from "../../components/ProductCard";
import FilterMenu from "../../components/FilterMenu";
import SortBar from "../../components/SortBar";

import { type TProduct } from "../../types/productTypes";

function ProductsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<TProduct[]>([]);
  const [sort, setSort] = useState("def");
  const [onSale, setOnSale] = useState<boolean>(true);
  const [filterBrands, setFilterBrands] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<TProduct[]>([]);

  const productsRef = useRef<TProduct[]>([]);

  // دریافت محصولات از API
  useEffect(() => {
    setIsLoading(true);
    getAllProducts().then((res) => {
      productsRef.current = res.products; // ذخیره نسخه اولیه
      setProducts(res.products);
      setIsLoading(false);
    });
  }, []);

  // اعمال فیلترها و مرتب‌سازی
  useEffect(() => {
    let updatedProducts = [...productsRef.current];

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
  }, [filterBrands, onSale, sort]);

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

  return (
    <>
      {isLoading ? (
        <div className="absolute content-center top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 w-full h-full cursor-wait">
          <Loading />
        </div>
      ) : (
        <>
          <div className="mb-6">
            <h2 className="text-lg font-bold">همه محصولات</h2>
            <SortBar sort={sort} handleSort={handleSort} />
          </div>
          <div className="flex gap-6">
            <aside className="sticky top-6 w-1/3 md:w-1/4 lg:w-1/5 h-fit p-4 text-sm bg-white dark:bg-slate-700 shadow rounded-2xl transition">
              <FilterMenu
                brands={products.map((product) =>
                  product.brand.toLocaleLowerCase()
                )}
                onSale={handleOnSale}
                onFilterBrands={handleFilterBrands}
                onClearFilters={handleClearFilters}
              />
            </aside>
            <div className="w-full grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
              {displayedProducts.length > 0 ? (
                displayedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <div className="absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 text-center p-12 w-96 shadow-lg rounded-2xl text-gray-400 bg-white dark:bg-slate-700 transition-colors">
                  <p className="text-xl">محصولی برای نمایش وجود ندارد</p>
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

export default ProductsPage;
