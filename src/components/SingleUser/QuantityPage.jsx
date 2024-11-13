import React from "react";
import CommonInput from "../common/CommonInput";
import CommonButton from "../common/CommonButton";

export default function QuantityPage() {
  return (
    <div className="flex justify-center pt-16 bg-lightBlue h-screen">
      <div className="flex gap-11 bg-white rounded-[10px] max-h-[600px] w-[69.7%] pb-16 pt-[89px] pl-20 pr-[79.67px]">
        <div className="w-1/2">
          <h2 className="text-2xl leading-[29.05px] font-medium text-paleBlue font-inter">
            Quantity & Payment
          </h2>
          <p className="leading-[19.36px] text-bodyColor mt-2">Single user</p>
          <div className="my-6">
            <div className="mb-4">
              <label className="block text-sm mb-2">Price</label>
              <CommonInput
                type="text"
                value="$99"
                disabled
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-2">Quantity</label>
              <CommonInput
                type="number"
                min="1"
                max="20"
                placeholder="Enter quantity"
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Subtotal</label>
              <CommonInput
                type="text"
                value="$3240"
                disabled
                className="w-full"
              />
            </div>
          </div>

          <div className="py-4 px-3 bg-lighCyan rounded-[10px]">
            <p className="text-[11px] text-darkBlue">
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
            <div className="mb-[18px] flex flex-col gap-2">
              <label className="text-sm text-bodyColor">Card Number</label>
              <CommonInput
                type="text"
                placeholder="Credit card number"
                className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-lightBlue font-inter"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-[18px]">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-bodyColor">Expiry Month</label>
                <CommonInput
                  type="text"
                  placeholder="MM"
                  className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-lightBlue font-inter"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-bodyColor">Expiry Year</label>
                <CommonInput
                  type="text"
                  placeholder="YYYY"
                  className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-lightBlue font-inter"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mb-[18px]">
              <label className="text-sm text-bodyColor">Name on Card</label>
              <CommonInput
                type="text"
                placeholder="Enter name"
                className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-lightBlue font-inter"
              />
            </div>
            <div className="flex flex-col gap-2 mb-[18px]">
              <label className="text-sm text-bodyColor">Security Code</label>
              <CommonInput
                type="password"
                placeholder="Enter CVV"
                className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-lightBlue font-inter"
              />
            </div>
          </div>
          <div>
            <CommonButton
              type="submit"
              className="font-inter group relative w-full h-[42px] flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-[20px] text-white text-[14px] bg-primary hover:bg-red-500"
              text={"Make payment"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
