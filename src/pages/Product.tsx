import { useDispatch } from "react-redux";
import { useGetProductByIdQuery } from "../app/features/products/productsSlice";
import Button from "../components/ui/Button";
import { setCartItems } from "../app/features/cart/cartSlice";

const ProductPage = () => {
  const dispatch = useDispatch();

  const { isLoading, data } = useGetProductByIdQuery({
    id: location.pathname.split("/").pop(),
  });

  // ** Handlers:
  const onAddToCart = () => {
    dispatch(setCartItems(data));
  };

  if (isLoading) return <h3>Loading...</h3>;
  const { id, thumbnail, title, price } = data;
  return (
    <div className="relative flex w-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <div className="mt-4 px-5 pb-5 flex flex-col items-center">
        <div className="relative flex justify-center overflow-hidden rounded-xl w-full">
          <img
            className="object-cover w-1/2"
            src={thumbnail}
            alt={`product ${id} image`}
          />
          <span className="absolute top-0 left-0 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            39% OFF
          </span>
        </div>
        <div>
          <h5 className="text-xl tracking-tight text-slate-900">{title}</h5>
        </div>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">${price}</span>
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
  );
};

export default ProductPage;
