import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toast } from "react-toastify";

const getAuthToken = () => {
  const token = localStorage.getItem("accessToken");
  return token;
};

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BASE_API_URI,
  prepareHeaders: async (headers) => {
    const token = getAuthToken();
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    headers.set("Content-Type", "application/json");
    headers.set("Access-Control-Allow-Origin", "*");

    return headers;
  },
});

const baseQueryWithReAuth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  const { data, error, meta } = result;

  if (error?.data?.message) toast.error(error?.data?.message);
  if (data?.message && !error) toast.success(data?.message);

  return result;
};

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReAuth,
  tagTypes: [""],
  endpoints: () => ({}),
});

export default apiSlice;
