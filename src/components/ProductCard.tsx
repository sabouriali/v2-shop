import { Link } from "react-router";
import { type ProductCardProps } from "../types/componentTypes";

function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`${product.id}`} className="grid grid-rows-4 rounded-2xl">
      <section className="row-span-3">
        <img
          src={product.images[0]}
          alt={product.title}
          className="rounded-t-2xl"
        />
      </section>
      <section className="row-span-1">
        <div className="flex items-center justify-between">
          <p>{product.title}</p>
          <p>{product.price}$</p>
        </div>
      </section>
    </Link>
  );
}

export default ProductCard;
