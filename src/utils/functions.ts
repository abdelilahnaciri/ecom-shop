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
  return cartItems
    .reduce((total, item) => total + item.price * item.qty, 0)
    .toFixed(2);
};
