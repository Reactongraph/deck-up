import React from "react";
import CommonInput from "../common/CommonInput";
import CommonButton from "../common/CommonButton";

export default function QuantityPage() {
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
                    className="w-[36px] h-[36px] flex justify-center items-center border rounded-lg border-lightGray"
                  />
                  <CommonInput
                    type="text"
                    value={"01"}
                    className="w-[36px] text-sm h-[36px] px-0 py-0 pl-2 flex justify-center items-center border rounded-lg border-lightGray"
                  />
                  <CommonButton
                    text={"+"}
                    className="w-[36px] h-[36px] flex justify-center items-center border rounded-lg border-lightGray"
                  />
                </div>
                <div>
                  <p className="text-[10px] leading-3 text-bodyColor">
                    *less than 20
                  </p>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-bodyColor leading-[16.94px]">
                  $3240
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
                  type="date"
                  name={"expiryMonth"}
                  placeholder="MM"
                  className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-lightBlue font-inter"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-bodyColor">Expiry Year</label>
                <CommonInput
                  name={"expiryYear"}
                  type="date"
                  placeholder="YYYY"
                  className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-lightBlue font-inter"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mb-[18px]">
              <label className="text-sm text-bodyColor">Name on Card</label>
              <CommonInput
                type="text"
                name={"name"}
                placeholder="Enter name"
                className="text-bodyColor text-[14px] appearance-none rounded-lg relative block w-full px-3 py-3 border border-lightGray placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-lightBlue font-inter"
              />
            </div>
            <div className="flex flex-col gap-2 mb-[18px]">
              <label className="text-sm text-bodyColor">Security Code</label>
              <CommonInput
                type="text"
                name={"cvv"}
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
