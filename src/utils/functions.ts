import { IProduct } from "../interface";

export const addItemToShoppingCart = (
  cartItems: IProduct[],
  product: IProduct
) => {
  const exist = cartItems.find((item) => item.id === product.id);
  if (exist) {
    return cartItems.map((item) =>
      item.id === product.id ? { ...item, qty: item.qty + 1 } : item
    );
  }
  return [...cartItems, { ...product, qty: 1 }];
};

export const calcTotal = (cartItems: IProduct[]) => {
  const total = cartItems
    .map((item) => item.price * item.qty)
    .reduce((prev, curr) => (prev += curr));
  // console.log(total);
};
