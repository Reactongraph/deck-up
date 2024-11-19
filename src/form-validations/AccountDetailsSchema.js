import * as Yup from "yup";

export const AccountDetailsSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[a-zA-Z]+$/, "First name must contain only letters")
    .required("First name is required"),
  lastName: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Last name must contain only letters")
    .required("Last name is required"),
  company: Yup.string(),
  addressLine1: Yup.string()
    .matches(
      /^[a-zA-Z0-9\s,'-]*$/,
      "Address line 1 must contain only letters, numbers, spaces, and common punctuation"
    )
    .required("Address line 1 is required"),
  addressLine2: Yup.string(),
  city: Yup.string()
    .matches(/^[a-zA-Z]+$/, "City must contain only letters")
    .required("City is required"),
  zip: Yup.string(),
  country: Yup.string().required("Country is required"),
  state: Yup.string().required("State is required"),
});