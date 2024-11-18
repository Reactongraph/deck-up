import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateField } from "../../store/single-user/accountSlice";
import CommonInput from "../common/CommonInput";
import CommonDropdown from "../common/CommonDropdown";
import CommonButton from "../common/CommonButton";
import CommonLoginLayout from "../common/CommonLoginLayout";
import { AccountDetailsSchema } from "../../form-validations/AccountDetailsSchema";

export default function AccountDetailsForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    firstName,
    lastName,
    company,
    addressLine1,
    addressLine2,
    city,
    zip,
    country,
    state,
  } = useSelector((state) => state.account);

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: name, value }));
  };

  const handleSubmit = (values) => {
    console.log("Form Data:", values);
    navigate("/quantity");
  };

  const accountDetailsForm = (
    <Formik
      initialValues={{
        firstName,
        lastName,
        company,
        addressLine1,
        addressLine2,
        city,
        zip,
        country,
        state,
      }}
      validationSchema={AccountDetailsSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ errors, touched }) => (
        <Form>
          <h2 className="text-subhead text-paleBlue font-inter">
            Account Details
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-4 mt-6">
            <div>
              <Field
                as={CommonInput}
                id="first-name"
                name="firstName"
                type="text"
                value={firstName}
                placeholder="First name"
                onChange={handleFieldChange}
                className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 bg-lightBlue font-inter"
                error={touched.firstName && errors.firstName}
              />
            </div>
            <div>
              <Field
                as={CommonInput}
                id="last-name"
                name="lastName"
                type="text"
                value={lastName}
                placeholder="Last name"
                onChange={handleFieldChange}
                className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 bg-lightBlue font-inter"
                error={touched.lastName && errors.lastName}
              />
            </div>
          </div>

          <div className="mb-4">
            <Field
              as={CommonInput}
              id="company"
              name="company"
              type="text"
              value={company}
              placeholder="Company (optional)"
              onChange={handleFieldChange}
              className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 bg-lightBlue font-inter"
              error={touched.company && errors.company}
            />
          </div>

          <div className="mb-4">
            <Field
              as={CommonInput}
              id="address-Line-1"
              name="addressLine1"
              type="text"
              value={addressLine1}
              placeholder="Address line 1"
              onChange={handleFieldChange}
              className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 bg-lightBlue font-inter"
              error={touched.addressLine1 && errors.addressLine1}
            />
          </div>

          <div className="mb-4">
            <Field
              as={CommonInput}
              id="addressLine2"
              name="addressLine2"
              type="text"
              value={addressLine2}
              placeholder="Address line 2 (optional)"
              onChange={handleFieldChange}
              className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 bg-lightBlue font-inter"
              error={touched.addressLine2 && errors.addressLine2}
            />
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div>
              <Field
                as={CommonInput}
                id="city"
                name="city"
                type="text"
                value={city}
                placeholder="City"
                onChange={handleFieldChange}
                className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 bg-lightBlue font-inter"
                error={touched.city && errors.city}
              />
            </div>
            <Field
              as={CommonInput}
              id="zip"
              name="zip"
              type="text"
              value={zip}
              placeholder="Zip (optional)"
              onChange={handleFieldChange}
              className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 bg-lightBlue font-inter"
              error={touched.zip && errors.zip}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <CommonDropdown
                name="country"
                placeholder="Country"
                value={country}
                onChange={handleFieldChange}
                options={[
                  { label: "United States", value: "US" },
                  { label: "Canada", value: "CA" },
                ]}
                className="text-bodyColor text-[14px] rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 bg-lightBlue font-inter"
                error={touched.country && errors.country}
              />
            </div>
            <div>
              <CommonDropdown
                name="state"
                placeholder="State"
                value={state}
                onChange={handleFieldChange}
                options={[
                  { label: "State 1", value: "ST1" },
                  { label: "State 2", value: "ST2" },
                ]}
                className="text-bodyColor text-[14px] rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 bg-lightBlue font-inter"
                error={touched.state && errors.state}
              />
            </div>
          </div>

          <div className="w-full my-6 border-t border-borderGray" />

          <div className="mb-10 flex items-center justify-between mr-[45px]">
            <h2 className="text-subhead text-paleBlue font-inter">
              Billing address
            </h2>
            <div className="flex items-center gap-2">
              <CommonInput
                type="checkbox"
                name="billing-address"
                value={addressLine1}
                className="w-[18px] h-[18px]"
              />
              <p className="text-sm font-inter leading-[16.94px] text-bodyColor">
                Same as above
              </p>
            </div>
          </div>

          <CommonButton
            type="submit"
            className="font-inter group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-[20px] text-white bg-primary hover:bg-red-500"
            text="Go for payment"
          />
        </Form>
      )}
    </Formik>
  );

  return <CommonLoginLayout form={accountDetailsForm} className="pb-[58px]" />;
}
