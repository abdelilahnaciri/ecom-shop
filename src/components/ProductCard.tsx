import Button from "./ui/Button";
import { useDispatch } from "react-redux";
import { setCartItems } from "../app/features/cart/cartSlice";
import { IProduct } from "../interface";
import { NavLink } from "react-router-dom";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, title, thumbnail, price } = product;

  const dispatch = useDispatch();

  // ** Handlers:
  const onAddToCart = () => {
    dispatch(setCartItems(product));
  };

  return (
    <div>
      <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <div className="mt-4 px-5 pb-5">
          <NavLink
            className="relative flex overflow-hidden rounded-xl"
            to={`/products/${id}`}
          >
            <img
              className="object-cover"
              src={thumbnail}
              alt={`product ${id} image`}
            />
            <span className="absolute top-0 left-0 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
              39% OFF
            </span>
          </NavLink>
          <NavLink to={`/products/${id}`}>
            <h5 className="text-xl tracking-tight text-slate-900">
              {title.length >= 20 ? `${title.slice(0, 20)}...` : title}
            </h5>
          </NavLink>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-slate-900">
                ${price}
              </span>
              <span className="text-sm text-slate-900 line-through">$699</span>
            </p>
          </div>

          <Button className="w-full" onClick={onAddToCart}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
