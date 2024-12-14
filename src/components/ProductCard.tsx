import { Link } from "react-router";
import { type ProductCardProps } from "../types/componentTypes";

function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to={`${product.id}`}
      className="grid grid-rows-4 rounded-2xl pb-4 bg-white shadow-md hover:shadow-xl dark:bg-slate-700 dark:hover:bg-slate-900 transition"
    >
      <div className="row-span-3 bg-white rounded-t-2xl mb-2 content-center">
        <img src={product.image} alt={product.title} className="p-4" />
      </div>
      <div className="row-span-1 text-sm px-4">
        <div className="flex items-center justify-between">
          <p
            className={
              product.discount ? "line-through text-gray-300" : "font-extrabold"
            }
          >
            {product.price}$
          </p>
          {product.discount && (
            <p className="px-1.5 py-0.5 bg-red-500 text-xs text-white rounded-full">
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
  );
}

export default ProductCard;
