import React from "react";
import CommonButton from "../common/CommonButton";

export default function ProfileInfo({ data, setActiveSubTab }) {
  console.log("data......", data);
  return (
    <div className="flex flex-col gap-6 font-inter">
      <div className="text-2xl font-semibold leading-[29.05px] text-paleBlue">
        Account Info
      </div>

      {/* Profile Info */}
      <div className="bg-white rounded-lg shadow-md col-span-2 px-[38px] pb-6">
        <div className="border-b border-borderGray py-[19.5px] mb-6">
          <h2 className="text-sm font-semibold leading-[16.94px] text-paleBlue mb-2">
            Profile Info
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="w-[63%] flex gap-4 justify-between">
            <div className="flex flex-col gap-4">
              <p>Type: </p>
              <p>Organization:</p>
              <p>Address:</p>
              <p>No. of licenses:</p>
            </div>
            <div className="flex flex-col gap-4">
              <p>Single user</p>
              <p>Cerner Corporation</p>
              <p>Michigan, USA</p>
              <p>01</p>
            </div>
          </div>
          <div className="w-[66%] flex gap-4 justify-between">
            <div className="flex flex-col gap-4">
              <p>Pricing:</p>
              <p>Last payment:</p>
              <p>Payment date:</p>
              <p>Renewal date:</p>
            </div>
            <div className="flex flex-col gap-4">
              <p>$12/user/month</p>
              <p>$254</p>
              <p>1st March 2023</p>
              <p>2nd March 2024</p>
            </div>
          </div>
        </div>
        <CommonButton
          text="Buy additional licenses"
          onClick={() => setActiveSubTab("Buy Additional Licenses")}
          className="mt-6 bg-primary text-white px-4 py-2"
        />
      </div>

      {/* Payment Modes */}
      <div className="grid grid-cols-2 gap-6 ">
        <div className="bg-white rounded-lg shadow-md px-10 pb-6 pt-4">
          <h2 className="text-lg font-medium mb-2">Payment modes</h2>
          <div className="text-sm mb-2">
            <p>
              <p>Card Number:</p> XXXX XXXX XXXX 4249
            </p>
            <p>
              <p>Exp:</p> 04/25
            </p>
            <p>
              <p>Card Holder Name:</p> Samuel Biggott
            </p>
          </div>
          <div className="flex gap-2">
            <CommonButton
              text="Renew License"
              onClick={() => setActiveSubTab("Renew License")}
              className="mt-6 bg-primary text-white px-4 py-2"
            />
            <CommonButton
              text="Cancel subscription"
              onClick={() => setActiveSubTab("Cancel")}
              className="mt-6 text-primary hover:text-white px-4 py-2 border border-primary bg-white"
            />
          </div>
        </div>

        {/* Owner */}
        <div className="bg-white rounded-lg shadow-md py-4 px-5">
          <h2 className="text-lg font-medium mb-2">Owner</h2>
          <p className="text-sm">Ravi Shah - ravi.shah@cerner.com</p>
          <h2 className="text-lg font-medium mt-4 mb-2">Admins</h2>
          <p className="text-sm">Swapnil Shukla - swapnil.s@cerner.com</p>
          <p className="text-sm">Nilesh Ahire - nilesh.a@cerner.com</p>
        </div>
      </div>
    </div>
  );
}
