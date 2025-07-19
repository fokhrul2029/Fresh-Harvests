// src/redux/api/apiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API}/api/v1/`,
  }),
  endpoints: (builder) => ({
    //  Get All Products
    getProducts: builder.query({
      query: () => "/products",
    }),

    //  Get Single Product by ID
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),

    //  Get All Categories
    getCategory: builder.query({
      query: () => `/category`,
    }),
  }),
});

//  Export hooks for usage in components
export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetCategoryQuery,
} = apiSlice;
