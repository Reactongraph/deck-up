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
    fetchCountries: builder.query({
      query: () => ({
        url: "/countries",
        method: "GET",
      }),
    }),
    fetchStates: builder.query({
      query: (country) => ({
        url: `/countries/${country}/states`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateAccountMutation,
  useCreateInvoiceMutation,
  useFetchCountriesQuery,
  useFetchStatesQuery,
} = accountApiSlice;
