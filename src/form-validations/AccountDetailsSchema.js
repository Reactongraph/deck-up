import * as Yup from "yup";

export const AccountDetailsSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  company: Yup.string(),
  addressLine1: Yup.string().required("Address line 1 is required"),
  addressLine2: Yup.string(),
  city: Yup.string().required("City is required"),
  zip: Yup.string(),
  country: Yup.string().required("Country is required"),
  state: Yup.string().required("State is required"),
});
