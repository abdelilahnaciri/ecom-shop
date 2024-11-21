import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../interface";
import { addItemToShoppingCart } from "../../../utils/functions";

interface ICartSlice {
  cartItems: IProduct[];
}

const initialState: ICartSlice = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Actions:
    setCartItems: (state, action: PayloadAction<IProduct>) => {
      // state.cartItems = [...state.cartItems, action.payload];
      state.cartItems = addItemToShoppingCart(state.cartItems, action.payload);
    },
  },
});

export const { setCartItems } = cartSlice.actions;
export default cartSlice.reducer;
