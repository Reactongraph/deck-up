import React from "react";

export default function ProfileInfo({ setActiveSubTab }) {
  return (
    <div>
      <div className="text-2xl font-semibold">Account Info</div>

      {/* Profile Info */}
      <div className="bg-white rounded-lg shadow-md col-span-2 px-[38px] pb-6 pt-4">
        <h2 className="text-lg font-medium mb-2">Profile Info</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p>
              <strong>Type:</strong> Single user
            </p>
            <p>
              <strong>Organization:</strong> Cerner Corporation
            </p>
            <p>
              <strong>Address:</strong> Michigan, USA
            </p>
            <p>
              <strong>No. of licenses:</strong> 01
            </p>
          </div>
          <div>
            <p>
              <strong>Pricing:</strong> $12/user/month
            </p>
            <p>
              <strong>Last payment:</strong> $254
            </p>
            <p>
              <strong>Payment date:</strong> 1st March 2023
            </p>
            <p>
              <strong>Renewal date:</strong> 2nd March 2024
            </p>
          </div>
        </div>
        <button
          onClick={() => setActiveSubTab("Buy Additional Licenses")}
          className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg"
        >
          Buy additional licenses
        </button>
      </div>

      {/* Payment Modes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        <div className="bg-white rounded-lg shadow-md px-10 pb-6 pt-4">
          <h2 className="text-lg font-medium mb-2">Payment modes</h2>
          <div className="text-sm mb-2">
            <p>
              <strong>Card Number:</strong> XXXX XXXX XXXX 4249
            </p>
            <p>
              <strong>Exp:</strong> 04/25
            </p>
            <p>
              <strong>Card Holder Name:</strong> Samuel Biggott
            </p>
          </div>
          <button
            onClick={() => setActiveSubTab("Renew License")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-2"
          >
            Renew license
          </button>
          <button
            onClick={() => setActiveSubTab("Cancel")}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Cancel subscription
          </button>
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
