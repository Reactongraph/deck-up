import * as Yup from "yup";

export const QuantitySchema = Yup.object({
  cardNumber: Yup.string()
    .matches(/^\d{16}$/, "Card number must be 16 digits")
    .required("Card number is required"),
  expiryMonth: Yup.string().required("Expiry month is required"),
  expiryYear: Yup.string().required("Expiry year is required"),
  name: Yup.string().required("Name on card is required"),
  securityCode: Yup.string()
    .matches(/^\d{3}$/, "CVV must be 3 digits")
    .required("Security code is required"),
});
