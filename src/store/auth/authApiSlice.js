import apiSlice from "../ApiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Register user using email
    registerUser: builder.mutation({
      query: (email) => ({
        url: "auth/email",
        method: "POST",
        body: { email },
      }),
    }),

    // Verify OTP for login
    verifyOtpForLogin: builder.mutation({
      query: ({ email, otp }) => ({
        url: "auth/email/verify",
        method: "POST",
        body: { email, otp },
      }),
    }),

    // Check if user exists
    checkUserExists: builder.query({
      query: (email) => ({
        url: `/dupe-api/check?email=${email}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useVerifyOtpForLoginMutation,
  useCheckUserExistsQuery,
} = authApiSlice;
