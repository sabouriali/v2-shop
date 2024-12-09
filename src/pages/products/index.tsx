import { useEffect, useState } from "react";

import { getProducts } from "../../utility/api";

import ProductCard from "../../components/ProductCard";

import { type TProduct } from "../../types/productTypes";

function ProductsPage() {
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);

  console.log(products);

  return (
    <div className="grid grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsPage;
