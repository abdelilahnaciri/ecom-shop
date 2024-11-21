import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApiSlice = createApi({
  reducerPath: "products",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getProductList: builder.query({
      query: () => {
        return { url: "/products?limit=10&select=title,price,thumbnail" };
      },
    }),
    getProductById: builder.query({
      query: (arg) => {
        return {
          url: `/products/${arg.id}`,
        };
      },
    }),
  }),
});

export const { useGetProductListQuery, useGetProductByIdQuery } =
  productsApiSlice;
