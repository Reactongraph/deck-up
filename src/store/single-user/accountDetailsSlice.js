import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  company: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  zip: "",
  country: "",
  state: "",
  billingSameAsShipping: false,
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

export const { setField, setBillingSameAsShipping } = accountDetailsSlice.actions;
export const selectAccountDetails = (state) => state.accountDetails;

export default accountDetailsSlice.reducer;
