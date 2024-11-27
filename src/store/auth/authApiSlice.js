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

    loginWithGoogle: builder.mutation({
      query: (email, uid) => ({
        url: "auth/google/tokens",
        method: "POST",
        body: { email, uid: uid },
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useVerifyOtpForLoginMutation,
  useLoginWithGoogleMutation,
} = authApiSlice;
