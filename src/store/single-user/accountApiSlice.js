import apiSlice from "../ApiSlice";

export const accountApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createAccount: builder.mutation({
      query: (data) => ({
        url: "/checkoutpage",
        method: "POST",
        body: data,
      }),
    }),
    createInvoice: builder.mutation({
      query: (hostedPageId) => ({
        url: "/checkoutpage/invoice",
        method: "POST",
        body: { hostedPageId: hostedPageId },
      }),
    }),
  }),
});

export const { useCreateAccountMutation, useCreateInvoiceMutation } =
  accountApiSlice;
