import React from "react";
import { Field } from "formik";
import CommonInput from "../common/CommonInput";
import CommonDropdown from "../common/CommonDropdown";

const CommonAccountForm = ({
  handleFieldChange,
  values,
  touched,
  errors,
  email,
  countryOptions,
  stateOptions,
  prefix = "",
}) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 mb-4 mt-6">
        <div>
          <Field
            as={CommonInput}
            id={`${prefix}first-name`}
            name={`${prefix}firstName`}
            type="text"
            value={values[`${prefix}firstName`]}
            placeholder="First name"
            onChange={handleFieldChange}
            className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 bg-lightBlue font-inter"
            error={
              touched[`${prefix}firstName`] && errors[`${prefix}firstName`]
            }
          />
        </div>
        <div>
          <Field
            as={CommonInput}
            id={`${prefix}last-name`}
            name={`${prefix}lastName`}
            type="text"
            value={values[`${prefix}lastName`]}
            placeholder="Last name"
            onChange={handleFieldChange}
            className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 bg-lightBlue font-inter"
            error={touched[`${prefix}lastName`] && errors[`${prefix}lastName`]}
          />
        </div>
      </div>

      <div className="mb-4">
        <Field
          as={CommonInput}
          id={`${prefix}email`}
          name={`${prefix}email`}
          type="text"
          value={email}
          disabled
          placeholder="Email"
          className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 bg-lightBlue font-inter"
        />
      </div>

      <div className="mb-4">
        <Field
          as={CommonInput}
          id={`${prefix}company-name`}
          name={`${prefix}companyName`}
          type="text"
          value={values[`${prefix}companyName`]}
          placeholder="Company (optional)"
          onChange={handleFieldChange}
          className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 bg-lightBlue font-inter"
          error={
            touched[`${prefix}companyName`] && errors[`${prefix}companyName`]
          }
        />
      </div>

      <div className="mb-4">
        <Field
          as={CommonInput}
          id={`${prefix}address-line-one`}
          name={`${prefix}addressLineOne`}
          type="text"
          value={values[`${prefix}addressLineOne`]}
          placeholder="Address line 1"
          onChange={handleFieldChange}
          className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 bg-lightBlue font-inter"
          error={
            touched[`${prefix}addressLineOne`] &&
            errors[`${prefix}addressLineOne`]
          }
        />
      </div>

      <div className="mb-4">
        <Field
          as={CommonInput}
          id={`${prefix}address-line-two`}
          name={`${prefix}addressLineTwo`}
          type="text"
          value={values[`${prefix}addressLineTwo`]}
          placeholder="Address line 2 (optional)"
          onChange={handleFieldChange}
          className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 bg-lightBlue font-inter"
          error={
            touched[`${prefix}addressLineTwo`] &&
            errors[`${prefix}addressLineTwo`]
          }
        />
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div>
          <Field
            as={CommonInput}
            id={`${prefix}city`}
            name={`${prefix}city`}
            type="text"
            value={values[`${prefix}city`]}
            placeholder="City"
            onChange={handleFieldChange}
            className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 bg-lightBlue font-inter"
            error={touched[`${prefix}city`] && errors[`${prefix}city`]}
          />
        </div>
        <Field
          as={CommonInput}
          id={`${prefix}zip`}
          name={`${prefix}zip`}
          type="text"
          value={values[`${prefix}zip`]}
          placeholder="Zip (optional)"
          onChange={handleFieldChange}
          className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 bg-lightBlue font-inter"
          error={touched[`${prefix}zip`] && errors[`${prefix}zip`]}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <CommonDropdown
            name={`${prefix}country`}
            placeholder="Country"
            value={values[`${prefix}country`]}
            onChange={handleFieldChange}
            className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 bg-lightBlue font-inter"
            options={countryOptions}
            error={touched[`${prefix}country`] && errors[`${prefix}country`]}
          />
        </div>
        <div>
          <CommonDropdown
            name={`${prefix}state`}
            placeholder="State"
            value={values[`${prefix}state`]}
            onChange={handleFieldChange}
            className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 bg-lightBlue font-inter"
            options={stateOptions}
            error={touched[`${prefix}state`] && errors[`${prefix}state`]}
          />
        </div>
      </div>
    </>
  );
};

export default CommonAccountForm;
