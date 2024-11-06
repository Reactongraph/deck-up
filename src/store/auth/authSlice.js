import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: '',
    otp: ['', '', '', '', '', ''],
    loading: false,
    toastMessage: '',
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setOtp: (state, action) => {
      state.otp = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setToastMessage: (state, action) => {
      state.toastMessage = action.payload;
    },
  },
});

export const { setEmail, setOtp, setLoading, setToastMessage } = authSlice.actions;
export const selectAuthState = (state) => state.auth;
export default authSlice.reducer;
