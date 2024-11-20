import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
};

const accountDetailsSlice = createSlice({
  name: "accountDetails",
  initialState,
  reducers: {
    setField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    setBillingSameAsShipping: (state, action) => {
      state.billingSameAsShipping = action.payload;
    },
  },
});

export const { setField, setBillingSameAsShipping } =
  accountDetailsSlice.actions;
export const selectAccountDetails = (state) => state.accountDetails;

export default accountDetailsSlice.reducer;
