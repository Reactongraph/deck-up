import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import CommonInput from "../common/CommonInput";
import CommonButton from "../common/CommonButton";
import { QuantitySchema } from "../../form-validations/QuantitySchema";
import { Tooltip } from "react-tooltip";

export default function QuantityPage() {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [subtotal, setSubtotal] = useState(99);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
    setSubtotal((prev) => prev + 99);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    setSubtotal((prev) => (prev > 99 ? prev - 99 : 99));
  };

  const handleSubmit = (values) => {
    console.log("Form submit:", values);
    navigate("/payment");
  };

  const formik = useFormik({
    initialValues: {
      cardNumber: "",
      expiryMonth: "",
      expiryYear: "",
      name: "",
      securityCode: "",
    },
    validationSchema: QuantitySchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="flex justify-center pt-16 bg-lightBlue h-full">
      <div className="flex gap-11 bg-white rounded-[10px] w-[69.7%] pb-16 pt-[89px] pl-20 pr-[79.67px]">
        <div className="w-1/2">
          <h2 className="text-2xl leading-[29.05px] font-medium text-paleBlue font-inter">
            Quantity & Payment
          </h2>
          <p className="leading-[19.36px] text-bodyColor mt-2">Single user</p>
          <div className="my-6">
            <div className="w-full h-[45px] bg-lightBlue rounded-[10px] pl-4 pr-7 mb-[5px] flex justify-between items-center">
              <label className="text-bodyColor text-sm">Price</label>
              <label className="text-bodyColor text-sm">Quantity</label>
              <label className="text-bodyColor text-sm">Subtotal</label>
            </div>
            <div className="w-full min-h-[106px] flex items-center justify-between pl-4 pr-[38px] bg-lightBlue rounded-[10px] mb-6">
              <div className="flex flex-col gap-1 text-bodyColor">
                <h4 className="text-sm font-semibold leading-[16.94px]">$99</h4>
                <p className="text-xs leading-[14.52px]">/user/month</p>
              </div>
              <div className="flex flex-col gap-[7px]">
                <div className="flex gap-[5px]">
                  <CommonButton
                    text={"-"}
                    onClick={handleDecrement}
                    className="w-[36px] h-[36px] flex justify-center items-center border rounded-lg border-lightGray"
                  />
                  <CommonInput
                    type="text"
                    value={quantity}
                    className="w-[36px] text-sm h-[36px] pt-0 pb-0 pr-0 pl-0 text-center border rounded-lg border-lightGray"
                  />
                  <CommonButton
                    text={"+"}
                    onClick={handleIncrement}
                    className="w-[36px] h-[36px] flex justify-center items-center border rounded-lg border-lightGray"
                  />
                </div>
                <div>
                  <p className="text-[10px] leading-3 text-bodyColor">
                    *less than 20
                  </p>
                </div>
              </div>
              <div className="relative">
                <h4 className="absolute bottom-0 right-0 text-sm font-semibold text-bodyColor leading-[16.94px]">
                  ${subtotal}
                </h4>
              </div>
            </div>
          </div>

          <div className="py-4 px-3 flex items-start gap-[6px] bg-lighCyan rounded-[10px]">
            <img src={"/images/backlight_low.svg"} alt="icon" />
            <p className="text-[11px] font-normal leading-[13.31px] text-darkBlue">
              For more than 1 user, your plan will be shifted to a Multi-user
              plan.
            </p>
          </div>
        </div>
        <div className="border-r border-borderGray" />
        <div className="w-1/2">
          <h2 className="text-2xl leading-[29.05px] font-medium text-paleBlue font-inter">
            Payment Information
          </h2>
          <div className="mt-6 mb-[34px]">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-[18px] flex flex-col gap-2">
                <label className="text-sm text-bodyColor">Card Number</label>
                <CommonInput
                  type="text"
                  placeholder="Credit card number"
                  name="cardNumber"
                  value={formik.values.cardNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border ${
                    formik.touched.cardNumber && formik.errors.cardNumber
                      ? "border-red-500"
                      : "border-lightGray"
                  } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-lightBlue font-inter`}
                />
                {formik.touched.cardNumber && formik.errors.cardNumber && (
                  <div className="text-xs text-red-500">
                    {formik.errors.cardNumber}
                  </div>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4 mb-[18px]">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-bodyColor">Expiry Month</label>
                  <CommonInput
                    type="text"
                    name="expiryMonth"
                    placeholder="MM"
                    value={formik.values.expiryMonth}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border ${
                      formik.touched.expiryMonth && formik.errors.expiryMonth
                        ? "border-red-500"
                        : "border-lightGray"
                    } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-lightBlue font-inter`}
                  />
                  {formik.touched.expiryMonth && formik.errors.expiryMonth && (
                    <div className="text-xs text-red-500">
                      {formik.errors.expiryMonth}
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-bodyColor">Expiry Year</label>
                  <CommonInput
                    name="expiryYear"
                    type="text"
                    placeholder="YYYY"
                    value={formik.values.expiryYear}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border ${
                      formik.touched.expiryYear && formik.errors.expiryYear
                        ? "border-red-500"
                        : "border-lightGray"
                    } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-lightBlue font-inter`}
                  />
                  {formik.touched.expiryYear && formik.errors.expiryYear && (
                    <div className="text-xs text-red-500">
                      {formik.errors.expiryYear}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2 mb-[18px]">
                <label className="text-sm text-bodyColor">Name on Card</label>
                <CommonInput
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border ${
                    formik.touched.name && formik.errors.name
                      ? "border-red-500"
                      : "border-lightGray"
                  } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-lightBlue font-inter`}
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="text-xs text-red-500">
                    {formik.errors.name}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2 mb-[18px]">
                <div className="flex items-center gap-1">
                  <label className="text-sm text-bodyColor">
                    Security code
                  </label>
                  <a id="not-clickable" href="/">
                    <img src="/images/info.svg" alt="icon" />
                  </a>
                  <Tooltip anchorSelect="#not-clickable">
                    <img src="/images/tooltipBox.svg" alt="box" />
                  </Tooltip>
                </div>
                <CommonInput
                  type="text"
                  name="securityCode"
                  placeholder="Enter CVV"
                  value={formik.values.securityCode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border ${
                    formik.touched.securityCode && formik.errors.securityCode
                      ? "border-red-500"
                      : "border-lightGray"
                  } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-lightBlue font-inter`}
                />
                {formik.touched.securityCode && formik.errors.securityCode && (
                  <div className="text-xs text-red-500">
                    {formik.errors.securityCode}
                  </div>
                )}
              </div>
              <div className="mt-6">
                <CommonButton
                  text="Make payment"
                  type="submit"
                  className="w-full bg-hoverButton text-white py-2 font-semibold leading-[26px]"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
