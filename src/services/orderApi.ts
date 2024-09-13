import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import IOrder from "../models/order"

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    getOrders: builder.query<IOrder[], void>({
      query: () => "products",
    }),
    getOrderById: builder.query<IOrder, number>({
      query: (id) => `orders/${id}`,
    }),
    createOrder: builder.mutation<IOrder, IOrder>({
      query: (order) => ({
        url: "orders",
        method: "POST",
        body: order,
      }),
    }),
    updateOrder: builder.mutation<IOrder, IOrder>({
      query: (order) => ({
        url: "orders",
        method: "PUT",
        body: order,
      }),
    }),
    deleteOrder: builder.mutation<{ success: boolean }, number>({
      query: (id) => ({
        url: `orders/${id}`,
        method: "DELETE",
      }),
    }),
  }),
})

export const {
  useGetOrdersQuery,
  useGetOrderByIdQuery,
  useCreateOrderMutation,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
} = orderApi
