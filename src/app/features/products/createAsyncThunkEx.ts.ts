import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../interface";
import axiosInstance from "../../../config/axios.config";

interface IProductsSlice {
  loading: boolean;
  data: {
    products: IProduct[];
  };
  error: null;
}

const initialState: IProductsSlice = {
  loading: true,
  data: {
    products: [],
  },
  error: null,
};

export const getProductList = createAsyncThunk(
  "products/getProductList",
  async (_, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      const { data } = await axiosInstance.get(
        "/products?limit=10&select=title,price,thumbnail"
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    // Pending
    [`${getProductList.pending}`]: (state) => {
      state.loading = true;
    },
    // Fulfilled
    [`${getProductList.fulfilled}`]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    // Rejected
    [`${getProductList.rejected}`]: (state, action) => {
      state.loading = false;
      state.data = { products: [] };
      state.error = action.payload;
    },
  },
});

export default productsSlice.reducer;
