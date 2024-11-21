import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import Button from "../components/ui/Button";
import { IProduct } from "../interface";

const CartPage = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);

  return (
    <div>
      {cartItems.map(({ id, thumbnail, title, price, qty }: IProduct) => (
        <div
          key={id}
          className="relative flex w-full flex-col mt-3 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
        >
          <div className="mt-4 px-5 pb-5 flex justify-between items-center">
            <div className="relative flex justify-center items-center overflow-hidden rounded-xl">
              <img
                className="object-cover w-48"
                src={thumbnail}
                alt={`product ${id} image`}
              />
              <span className="absolute top-0 left-0 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                39% OFF
              </span>
              <h5 className="text-xl tracking-tight text-slate-900 ml-3">
                {title}
              </h5>
            </div>
            <div className="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-slate-900">
                  ${price}
                </span>
                <span className="text-sm text-slate-900 line-through">
                  $699
                </span>
                <span className="font-bold text-slate-900 ml-3">
                  Qty: {qty}
                </span>
              </p>
            </div>
            <p className="font-bold text-slate-900 ml-3">
              Total: ${price * qty}
            </p>
          </div>
        </div>
      ))}
      <Button className="mx-auto my-5 w-1/2">
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
        Checkout Now
      </Button>
    </div>
  );
};

export default CartPage;
