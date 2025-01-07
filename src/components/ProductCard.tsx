import { Link } from "react-router";

import { type ProductCardProps } from "../types/componentTypes";

function ProductCard({ product, onCloseSearch, type }: ProductCardProps) {
  return (
    <>
      {type === "mobile" ? (
        <Link
          dir="ltr"
          to={`/products/category/${product.category}/${product.id}`}
          onClick={onCloseSearch}
          className="grid grid-rows-2 grid-cols-6 w-full h-36 pr-4 rounded-2xl bg-white dark:bg-slate-700 dark:hover:bg-slate-900 shadow hover:shadow-md transition"
        >
          <div className="row-span-2 col-span-2 rounded-l-2xl bg-white mr-2 content-center">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-full max-w-full mx-auto p-2"
            />
          </div>
          <div className="row-span-1 col-span-4 mt-4">
            <p className="line-clamp-2">{product.title}</p>
          </div>
          <div className="row-span-1 col-span-2">
            <div className="flex items-center justify-between">
              <p
                className={
                  product.discount
                    ? "line-through text-gray-300"
                    : "font-extrabold"
                }
              >
                {product.price}$
              </p>
              {product.discount && (
                <p className="px-1.5 py-0.5 bg-red-500 dark:bg-red-400 text-xs text-white rounded-full">
                  {product.discount}%
                </p>
              )}
            </div>
            {product.discount && (
              <p className="font-extrabold">
                {Math.floor(
                  product.price - (product.discount / 100) * product.price
                )}
                $
              </p>
            )}
          </div>
        </Link>
      ) : (
        <Link
          to={`/products/category/${product.category}/${product.id}`}
          onClick={onCloseSearch}
          className="grid grid-rows-4 rounded-2xl pb-4 min-w-56 h-96 bg-white shadow-md hover:shadow-xl dark:bg-slate-700 dark:hover:bg-slate-900 transition"
        >
          <div className="row-span-3 bg-white rounded-t-2xl mb-2 content-center">
            <img
              src={product.image}
              alt={product.title}
              className="p-4 max-h-full mx-auto"
            />
          </div>
          <div className="row-span-1 text-sm px-4">
            <div className="flex items-center justify-between">
              <p
                className={
                  product.discount
                    ? "line-through text-gray-300"
                    : "font-extrabold"
                }
              >
                {product.price}$
              </p>
              {product.discount && (
                <p className="px-1.5 py-0.5 bg-red-500 dark:bg-red-400 text-xs text-white rounded-full">
                  {product.discount}%
                </p>
              )}
            </div>
            {product.discount && (
              <p className="font-extrabold">
                {Math.floor(
                  product.price - (product.discount / 100) * product.price
                )}
                $
              </p>
            )}
            <p className="line-clamp-2 text-justify text-gray-600 dark:text-gray-300">
              {product.title}
            </p>
          </div>
        </Link>
      )}
    </>
  );
}

export default ProductCard;
