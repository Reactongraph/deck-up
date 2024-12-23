import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import CommonInput from "../common/CommonInput";
import CommonButton from "../common/CommonButton";
import { QuantitySchema } from "../../form-validations/QuantitySchema";
import { Tooltip } from "react-tooltip";
import CommonDropdown from "../common/CommonDropdown";
import { months } from "../../utils/data";
import { years } from "../../helper/helper";

export default function QuantityPage({
  mainClassName,
  subClassName,
  heading = "Quantity & Payment",
  subHeading = "Single user",
  setActiveSubTab,
  bottomText = "For more than 1 user, your plan will be shifted to a Multi-user plan.",
  plan = "",
}) {
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (plan) {
      setActiveSubTab("payment");
    } else {
      navigate("/payment");
    }
  };

  const formik = useFormik({
    initialValues: {
      quantity: 1,
      subTotal: 99,
      cardNumber: "",
      expiryMonth: "",
      expiryYear: "",
      name: "",
      securityCode: "",
    },
    validationSchema: QuantitySchema,
    onSubmit: handleSubmit,
  });

  const handleIncrement = () => {
    formik.setFieldValue("quantity", formik.values.quantity + 1);
    formik.setFieldValue("subTotal", (formik.values.quantity + 1) * 99);
  };

  const handleDecrement = () => {
    if (formik.values.quantity > 1) {
      formik.setFieldValue("quantity", formik.values.quantity - 1);
      formik.setFieldValue("subTotal", (formik.values.quantity - 1) * 99);
    }
  };

  const handleBack = () => {
    setActiveSubTab("Profile Info");
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div
        className={`${mainClassName} flex justify-center pt-0 md:pt-16 bg-lightBlue h-full`}
      >
        <div
          className={`${subClassName} flex flex-col md:flex-row gap-11 bg-white pl-8 pr-8 pb-10 rounded-[10px] w-[69.7%] md:pb-16 pt-8 md:pt-[89px] md:pl-20 md:pr-[79.67px]`}
        >
          <div className="flex flex-col w-full md:w-[52%]">
            {heading === "Upgrade plan" && (
              <div onClick={handleBack} className="cursor-pointer mb-[15px]">
                <img src="/images/backIcon.svg" alt="" />
              </div>
            )}
            <div className="w-full">
              <h2
                className={` ${
                  heading === "Upgrade plan" ? "font-semibold" : "font-medium"
                } text-2xl leading-[29.05px] text-paleBlue font-inter`}
              >
                {heading}
              </h2>
              <p className="leading-[19.36px] text-bodyColor mt-2">
                {subHeading}
              </p>
              <div className="my-6">
                <div className="w-full h-[45px] bg-lightBlue rounded-[10px] pl-4 pr-7 mb-[5px] flex justify-between items-center">
                  <label className="text-bodyColor text-sm">Price</label>
                  <label className="text-bodyColor text-sm">Quantity</label>
                  <label className="text-bodyColor text-sm">Subtotal</label>
                </div>
                <div className="w-full min-h-[106px] flex items-center justify-between pl-4 pr-[38px] bg-lightBlue rounded-[10px] mb-6">
                  <div className="flex flex-col gap-1 text-bodyColor">
                    <h4 className="text-sm font-semibold leading-[16.94px]">
                      $99
                    </h4>
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
                        value={formik.values.quantity}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-[36px] text-sm h-[36px] pt-0 pb-0 pr-0 pl-0 text-center border rounded-lg border-lightGray"
                      />
                      <CommonButton
                        text={"+"}
                        onClick={handleIncrement}
                        className="w-[36px] h-[36px] flex justify-center items-center border rounded-lg border-lightGray"
                      />
                    </div>
                    {formik.touched.quantity && formik.errors.quantity && (
                      <p className="text-[10px] leading-3 text-bodyColor">
                        {formik.errors.quantity}
                      </p>
                    )}
                  </div>
                  <div className="relative">
                    <h4 className="absolute bottom-0 right-0 text-sm font-semibold text-bodyColor leading-[16.94px]">
                      ${formik.values.subTotal}
                    </h4>
                  </div>
                </div>
              </div>

              <div className="py-4 px-3 flex items-center gap-[6px] bg-lighCyan rounded-[10px]">
                <img src={"/images/backlight_low.svg"} alt="icon" />
                <p className="text-[11px] font-normal leading-[13.31px] text-darkBlue">
                  {bottomText}
                </p>
              </div>
            </div>
          </div>
          <div className="border-r border-borderGray" />
          <div
            className={` ${
              heading === "Upgrade plan" ? "mt-[15px]" : "mt-0"
            } w-full md:w-1/2`}
          >
            <h2
              className={` ${
                heading === "Upgrade plan" ? "font-semibold" : "font-medium"
              } text-2xl leading-[29.05px] text-paleBlue font-inter`}
            >
              Payment Information
            </h2>
            <div className="mt-6 mb-[34px]">
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
                  <CommonDropdown
                    name="expiryMonth"
                    placeholder=""
                    value={formik.values.expiryMonth}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    options={months}
                    className="text-bodyColor text-[14px] rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 bg-lightBlue font-inter"
                  />
                  {formik.touched.expiryMonth && formik.errors.expiryMonth && (
                    <div className="text-xs text-red-500">
                      {formik.errors.expiryMonth}
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-bodyColor">Expiry Year</label>
                  <CommonDropdown
                    name="expiryYear"
                    placeholder=""
                    value={formik.values.expiryYear}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    options={years}
                    className="text-bodyColor text-[14px] rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 bg-lightBlue font-inter"
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
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
