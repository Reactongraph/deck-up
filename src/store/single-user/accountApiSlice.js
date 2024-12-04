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
    fetchEnterprisesDetails: builder.query({
      query: (id) => ({
        url: "/dupe-api/users",
        method: "GET",
        params: { value: id, by: "enterprise_id" },
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
    fetchCompanyInfo: builder.query({
      query: (id) => ({
        url: `/dupe-api/users/enterprises/${id}`,
        method: "GET",
      }),
    }),
    addSingleUser: builder.mutation({
      query: (payload) => ({
        url: `/dupe-api/users/enterprises/${payload?.id}`,
        method: "POST",
        body: payload?.body,
      }),
    }),
    addBulkUser: builder.mutation({
      query: (payload) => ({
        url: `/dupe-api/users/enterprises/${payload?.id}`,
        method: "PUT",
        body: payload?.body,
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
  useFetchCompanyInfoQuery,
  useAddSingleUserMutation,
  useFetchEnterprisesDetailsQuery,
  useAddBulkUserMutation,
} = accountApiSlice;
