import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { TiArrowBack } from "react-icons/ti";
import { FaCartPlus, FaMinus, FaPlus, FaTrashCan } from "react-icons/fa6";

import { useStoreDispatch, useStoreSelector } from "../../../hooks/useStore";

import {
  addToCart,
  getProductQty,
  removeFromCart,
} from "../../../redux/slices/cartSlice";

import { getSingleProduct } from "../../../utility/api";

import Loading from "../../../components/UI/Loading";

import { type TProduct } from "../../../types/productTypes";

function ProductPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState<TProduct>();

  const { id } = useParams();
  const navigate = useNavigate();

  const cart = useStoreSelector((state) => state.cart.items);
  const dispatch = useStoreDispatch();

  const productQty = getProductQty(cart, JSON.parse(id!));

  useEffect(() => {
    handleLoadOnTop();
    setIsLoading(true);
    getSingleProduct(id!).then((res) => {
      setProduct(res.product);
      setIsLoading(false);
    });
  }, [id]);

  function computePrice() {
    let price: number;

    if (product!.discount) {
      price = Math.floor(
        product!.price - (product!.discount / 100) * product!.price
      );
    } else {
      price = product!.price;
    }

    return price;
  }

  function handleLoadOnTop() {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }

  function handleAddToCart() {
    dispatch(
      addToCart({
        id: product!.id,
        price: computePrice(),
        discount: product!.discount
          ? product!.price - computePrice()
          : undefined,
      })
    );
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(product!.id));
  }

  return (
    <>
      {isLoading ? (
        <div className="absolute content-center top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 w-full h-full cursor-wait">
          <Loading />
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between text-sm mb-6">
            <div className="flex items-center gap-4 text-gray-400 dark:text-gray-500 transition">
              <Link
                to="/"
                className="hover:text-black dark:hover:text-white transition"
              >
                مارکت‌لند
              </Link>
              <span>|</span>
              <Link
                to={`/products/category/${product?.category}`}
                className="hover:text-black dark:hover:text-white transition"
              >
                {product?.category}
              </Link>
            </div>
            <button
              onClick={() => navigate(-1)}
              className="flex items-center px-2 py-2 border rounded-lg hover:bg-slate-500 hover:text-white transition"
            >
              بازگشت
              <TiArrowBack className="mr-1" />
            </button>
          </div>
          <div
            dir="ltr"
            className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-3 rounded-2xl shadow-md w-full bg-white dark:bg-slate-700 transition"
          >
            <div className="md:col-span-5 lg:col-span-4 md:row-span-2 rounded-tl-2xl bg-white">
              <img src={product?.image} alt={product?.title} className="p-4" />
            </div>
            <div className="md:col-span-7 lg:col-span-8 md:row-span-3 px-4 py-2">
              <p className="font-bold text-justify">{product?.title}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">
                {product?.category}
              </p>
              {product?.color && (
                <p className="text-sm mt-2">{`(${product?.color})`}</p>
              )}
              <div className="my-3">
                <div className="flex items-center gap-8">
                  <p
                    className={
                      product?.discount
                        ? "line-through text-gray-300 dark:text-gray-400 text-sm"
                        : "font-extrabold"
                    }
                  >
                    {product?.price}$
                  </p>
                  {product?.discount && (
                    <p className="px-1.5 py-0.5 text-xs bg-red-500 text-white rounded-full">
                      {product?.discount}%
                    </p>
                  )}
                </div>
                {product?.discount && (
                  <p className="font-extrabold">
                    {Math.floor(
                      product.price - (product.discount / 100) * product.price
                    )}
                    $
                  </p>
                )}
              </div>
              <p className="text-justify">{product?.description}</p>
            </div>
            <div className="my-4 p-4 md:col-span-5 lg:col-span-4 md:row-span-1">
              {productQty > 0 ? (
                <div className="flex items-center justify-between">
                  <button
                    onClick={handleRemoveFromCart}
                    className="p-2 border rounded-lg hover:bg-slate-500 hover:text-white transition"
                  >
                    {productQty === 1 ? <FaTrashCan /> : <FaMinus />}
                  </button>
                  <span>{productQty}</span>
                  <button
                    onClick={handleAddToCart}
                    className="p-2 border rounded-lg hover:bg-slate-500 hover:text-white transition"
                  >
                    <FaPlus />
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleAddToCart}
                  className="flex items-center justify-center w-full px-4 py-2 border rounded-lg text-green-500 border-green-500 hover:bg-green-500 hover:text-white transition"
                >
                  <FaCartPlus className="mr-1" />
                  افزودن به سبد خرید
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ProductPage;
