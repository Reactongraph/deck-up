import * as Yup from "yup";

export const EnterpriseSchema = Yup.object({
  name: Yup.string().required("Name is required."),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required."),
  phoneNumber: Yup.string()
    .matches(/^\d{10,15}$/, "Phone number must be between 10 and 15 digits.")
    .required("Phone number is required."),
  organization: Yup.string().required("Organization is required."),
  termsAccepted: Yup.boolean().oneOf([true], "You must accept the terms."),
});
