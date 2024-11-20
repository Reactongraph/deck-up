import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "../../store/single-user/accountSlice";
import CommonInput from "../common/CommonInput";
import CommonDropdown from "../common/CommonDropdown";
import CommonButton from "../common/CommonButton";
import CommonLoginLayout from "../common/CommonLoginLayout";
import { AccountDetailsSchema } from "../../form-validations/AccountDetailsSchema";
import { useCreateAccountMutation } from "../../store/single-user/accountApiSlice";
import { toast } from "react-toastify";
import { iso31661 } from "iso-3166";
import { statesByCountry } from "../../utils/data";

export default function AccountDetailsForm() {
  const dispatch = useDispatch();
  const [createUserApi, { isLoading }] = useCreateAccountMutation();
  const email = localStorage.getItem("email");
  const [stateOptions, setStateOptions] = useState([]);
  const [isSameAsAbove, setIsSameAsAbove] = useState(true);

  console.log("isSameAsAbove", isSameAsAbove)

  const {
    firstName,
    lastName,
    companyName,
    addressLineOne,
    addressLineTwo,
    city,
    zip,
    country,
    state,
  } = useSelector((state) => state.account);

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: name, value }));
    if (name === "country") {
      setStateOptions(statesByCountry[value] || []);
    }
  };

  useEffect(() => {
    if (country) {
      setStateOptions(statesByCountry[country] || []);
    }
  }, [country]);

  const countryOptions = iso31661?.map((country) => ({
    label: country.name,
    value: country.alpha2,
  }));

  const handleSubmit = async (values) => {
    try {
      const response = await createUserApi(values).unwrap();

      if (response.redirect_url) {
        toast.success("Account created successfully!");
        window.location.href = response.redirect_url;
      } else {
        toast.error("No URL provided in response.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to create account. Please try again.");
    }
  };

  const accountDetailsForm = (
    <Formik
      initialValues={{
        firstName,
        lastName,
        email,
        companyName,
        addressLineOne,
        addressLineTwo,
        itemPriceId: "cbdemo_sample_plan-inr-monthly",
        city,
        zip,
        country,
        state,
        billingAddress: isSameAsAbove,
        redirectUrl: `${window.location.origin}/invoice`,
      }}
      validationSchema={AccountDetailsSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ errors, touched, values }) => (
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
              id="email"
              name="email"
              type="text"
              value={email}
              disabled={true}
              className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 bg-lightBlue font-inter"
            />
          </div>

          <div className="mb-4">
            <Field
              as={CommonInput}
              id="company-name"
              name="companyName"
              type="text"
              value={companyName}
              placeholder="Company (optional)"
              onChange={handleFieldChange}
              className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 bg-lightBlue font-inter"
              error={touched.companyName && errors.companyName}
            />
          </div>

          <div className="mb-4">
            <Field
              as={CommonInput}
              id="address-line-one"
              name="addressLineOne"
              type="text"
              value={addressLineOne}
              placeholder="Address line 1"
              onChange={handleFieldChange}
              className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 bg-lightBlue font-inter"
              error={touched.addressLineOne && errors.addressLineOne}
            />
          </div>

          <div className="mb-4">
            <Field
              as={CommonInput}
              id="address-line-two"
              name="addressLineTwo"
              type="text"
              value={addressLineTwo}
              placeholder="Address line 2 (optional)"
              onChange={handleFieldChange}
              className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 bg-lightBlue font-inter"
              error={touched.addressLineTwo && errors.addressLineTwo}
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
                options={countryOptions}
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
                options={stateOptions}
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
                checked={isSameAsAbove}
                onChange={() => setIsSameAsAbove(!isSameAsAbove)}
                className="w-[18px] h-[18px]"
              />
              <p className="text-sm font-inter leading-[16.94px] text-bodyColor">
                Same as above
              </p>
            </div>
          </div>

          {!isSameAsAbove && (
            <div>
              <div className="grid grid-cols-2 gap-4 mb-4 mt-6">
                <div>
                  <Field
                    as={CommonInput}
                    id="first-name"
                    name="firstName"
                    type="text"
                    value={values.firstName}
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
                    value={values.lastName}
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
                  id="email"
                  name="email"
                  type="text"
                  value={values.email}
                  disabled={true}
                  className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 bg-lightBlue font-inter"
                />
              </div>

              <div className="mb-4">
                <Field
                  as={CommonInput}
                  id="company-name"
                  name="companyName"
                  type="text"
                  value={values.companyName}
                  placeholder="Company (optional)"
                  onChange={handleFieldChange}
                  className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 bg-lightBlue font-inter"
                  error={touched.companyName && errors.companyName}
                />
              </div>

              <div className="mb-4">
                <Field
                  as={CommonInput}
                  id="address-line-one"
                  name="addressLineOne"
                  type="text"
                  value={values.addressLineOne}
                  placeholder="Address line 1"
                  onChange={handleFieldChange}
                  className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 bg-lightBlue font-inter"
                  error={touched.addressLineOne && errors.addressLineOne}
                />
              </div>

              <div className="mb-4">
                <Field
                  as={CommonInput}
                  id="address-line-two"
                  name="addressLineTwo"
                  type="text"
                  value={values.addressLineTwo}
                  placeholder="Address line 2 (optional)"
                  onChange={handleFieldChange}
                  className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 bg-lightBlue font-inter"
                  error={touched.addressLineTwo && errors.addressLineTwo}
                />
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div>
                  <Field
                    as={CommonInput}
                    id="city"
                    name="city"
                    type="text"
                    value={values.city}
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
                  value={values.zip}
                  placeholder="Zip (optional)"
                  onChange={handleFieldChange}
                  className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 bg-lightBlue font-inter"
                  error={touched.zip && errors.zip}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <CommonDropdown
                    name="country"
                    placeholder="Country"
                    value={values.country}
                    onChange={handleFieldChange}
                    options={countryOptions}
                    className="text-bodyColor text-[14px] rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 bg-lightBlue font-inter"
                    error={touched.country && errors.country}
                  />
                </div>
                <div>
                  <CommonDropdown
                    name="state"
                    placeholder="State"
                    value={values.state}
                    onChange={handleFieldChange}
                    options={stateOptions}
                    className="text-bodyColor text-[14px] rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 bg-lightBlue font-inter"
                    error={touched.state && errors.state}
                  />
                </div>
              </div>
            </div>
          )}

          <CommonButton
            type="submit"
            className="font-inter group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-[20px] text-white bg-primary hover:bg-red-500"
            text={isLoading ? "Loading..." : "Go for payment"}
          />
        </Form>
      )}
    </Formik>
  );

  return <CommonLoginLayout form={accountDetailsForm} className="pb-[58px]" />;
}
