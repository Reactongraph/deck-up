import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: "account",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    addressLineOne: "",
    addressLineTwo: "",
    city: "",
    zip: "",
    country: "",
    state: "",
    billingAddress: {
      firstName: "",
      lastName: "",
      companyName: "",
      addressLineOne: "",
      addressLineTwo: "",
      city: "",
      zip: "",
      country: "",
      state: "",
    },
    redirectUrl: `${window.location.origin}/invoice`,
  },
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});

export const { updateField } = accountSlice.actions;

export default accountSlice.reducer;
