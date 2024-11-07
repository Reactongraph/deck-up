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

  const { data, error,} = result;

  if (error?.message) toast.error(error?.message);
  if (
    data?.message === "Invalid OTP " ||
    data?.message === "Invalid OTP  " ||
    data?.message === "Invalid email address"
  ) {
    toast.error(data?.message);
  } else if (
    data?.message ||
    data?.message === "OTP sent to your email please check"
  )
    toast.success(data?.message);

  return result;
};

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReAuth,
  tagTypes: [""],
  endpoints: () => ({}),
});

export default apiSlice;
