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
      transformResponse: (response) =>
        response?.sort((a, b) => a.name.localeCompare(b.name)),
    }),
    fetchUsersDetails: builder.query({
      query: (email) => ({
        url: "/dupe-api/users",
        method: "GET",
        params: { value: email, by: "email" },
      }),
    }),
    fetchAccountInfo: builder.query({
      query: (email) => `dashboard/${email}`,
    }),
    fetchLicenseDetails: builder.query({
      query: (email) => ({
        url: `/dupe-api/users/licenses/${email}`,
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
  useFetchUsersDetailsQuery,
  useFetchAccountInfoQuery,
  useFetchLicenseDetailsQuery,
} = accountApiSlice;
