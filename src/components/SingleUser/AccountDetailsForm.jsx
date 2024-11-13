import React from "react";
import CommonInput from "../common/CommonInput";
import CommonDropdown from "../common/CommonDropdown";
import CommonButton from "../common/CommonButton";

export default function AccountDetailsForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-subhead text-paleBlue font-inter">Account Details</h2>

      <div className="grid grid-cols-2 gap-4 mb-4 mt-6">
        <div>
          <CommonInput
            id="first-name"
            name="firstName"
            type="text"
            autoComplete="firstName"
            required
            className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-lightBlue font-inter"
            placeholder="First name"
          />
        </div>
        <div>
          <CommonInput
            id="last-name"
            name="lastName"
            type="text"
            autoComplete="lastName"
            required
            className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-lightBlue font-inter"
            placeholder="Last name"
          />
        </div>
      </div>

      <div className="mb-4">
        <CommonInput
          id="company"
          name="company"
          type="text"
          autoComplete="company"
          required
          className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-lightBlue font-inter"
          placeholder="Company (optional)"
        />
      </div>

      <div className="mb-4">
        <CommonInput
          id="addressLine1"
          name="addressLine1"
          type="text"
          autoComplete="addressLine1"
          required
          className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-lightBlue font-inter"
          placeholder="Address line 1"
        />
      </div>
      <div className="mb-4">
        <CommonInput
          id="addressLine2"
          name="addressLine2"
          type="text"
          autoComplete="addressLine2"
          required
          className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-lightBlue font-inter"
          placeholder="Address line 2 (optional)"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <CommonInput
          id="city"
          name="city"
          type="text"
          autoComplete="city"
          required
          className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-lightBlue font-inter"
          placeholder="City"
        />
        <CommonInput
          id="zip"
          name="zip"
          type="text"
          autoComplete="zip"
          required
          className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-lightBlue font-inter"
          placeholder="Zip (optional)"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <CommonDropdown
            name="country"
            placeholder="Country"
            value={""}
            // onChange={(e) => setSelectedValue(e.target.value)}
            options={[
              { label: "United States", value: "US" },
              { label: "Canada", value: "CA" },
            ]}
            className="text-bodyColor text-[14px] rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-lightBlue font-inter"
          />
        </div>
        <div>
          <CommonDropdown
            name="state"
            placeholder="State"
            value={""}
            // onChange={(e) => setSelectedValue(e.target.value)}
            options={[
              { label: "United States", value: "US" },
              { label: "Canada", value: "CA" },
            ]}
            className="text-bodyColor text-[14px] rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-lightBlue font-inter"
          />
        </div>
      </div>

      <div className="w-full my-6 border-t border-borderGray" />

      <div className="mb-10 flex items-center justify-between mr-[45px]">
        <h2 className="text-subhead text-paleBlue font-inter">
          Billing address
        </h2>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="billing-address"
            className="w-[18px] h-[18px]"
          />
          <p className="text-sm font-inter leading-[16.94px] text-bodyColor">
            Same as above
          </p>
        </div>
      </div>

      <div>
        <CommonButton
          type="submit"
          className="font-inter group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-[20px] text-white text-[14px] bg-primary hover:bg-red-500"
          text={"Go for payment"}
        />
      </div>
    </form>
  );
}
