import React from "react";
import { useNavigate } from "react-router-dom";
import CommonLoginLayout from "./common/CommonLoginLayout";
import CommonInput from "./common/CommonInput";
import CommonButton from "./common/CommonButton";
import { EnterpriseSchema } from "../form-validations/EnterpriseSchema";
import { Field, Form, Formik } from "formik";

export default function Enterprise() {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    organization: "",
    termsAccepted: false,
  };

  const handleSubmit = (values) => {
    console.log("Form Submitted:", values);
    alert("Enterprise request submitted successfully!");
  };

  const handleBack = () => {
    navigate("/plans");
  };

  return (
    <CommonLoginLayout
      className="pt-[80px] pb-[93px]"
      form={
        <Formik
          initialValues={initialValues}
          validationSchema={EnterpriseSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, values, handleChange, handleBlur }) => (
            <Form>
              <div onClick={handleBack} className="cursor-pointer mb-[15px]">
                <img src="/images/backIcon.svg" alt="" />
              </div>
              <div className="flex flex-col gap-10 font-inter">
                <h2 className="text-2xl font-semibold leading-[29.05px] text-paleBlue">
                  Enterprise request
                </h2>
                <div className="flex flex-col gap-4">
                  <Field
                    as={CommonInput}
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="name"
                    placeholder={"Your/Admin Name"}
                    className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-disableGray bg-lightBlue font-inter"
                    error={touched.name && errors.name}
                  />
                  <Field
                    as={CommonInput}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="email"
                    placeholder={"Your email ID"}
                    className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-disableGray bg-lightBlue font-inter"
                    error={touched.email && errors.email}
                  />
                  <Field
                    as={CommonInput}
                    value={values.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="phoneNumber"
                    placeholder={"Phone number"}
                    className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-disableGray bg-lightBlue font-inter"
                    error={touched.phoneNumber && errors.phoneNumber}
                  />
                  <Field
                    as={CommonInput}
                    value={values.organization}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="organization"
                    placeholder={"Organization"}
                    className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-disableGray bg-lightBlue font-inter"
                    error={touched.organization && errors.organization}
                  />
                </div>
                <div>
                  <div className="flex gap-2 items-center">
                    <CommonInput
                      type="checkbox"
                      name="termsAccepted"
                      value={values.termsAccepted}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-[18px] h-[18px]"
                    />
                    <p className="text-sm font-normal leading-[16.94px] text-bodyColor">
                      I agree to the Terms of Service & Privacy Policy
                    </p>
                  </div>
                  <p className="text-xs text-red-500 mt-2">
                    {touched.termsAccepted && errors.termsAccepted}
                  </p>
                  <CommonButton
                    type="submit"
                    text="Schedule a meet"
                    className="bg-primary text-white w-full py-[11px] font-semibold mt-[14px]"
                  />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      }
    />
  );
}
