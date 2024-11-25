import React, { useState } from "react";
import CommonButton from "../common/CommonButton";

export default function CancelSubscription({ setActiveSubTab }) {
  const [selectedReason, setSelectedReason] = useState("");
  const [customReason, setCustomReason] = useState("");

  const handleBack = () => {
    setActiveSubTab("Profile Info");
  };

  const reasons = [
    "I don't need the product anymore",
    "My project requirements are over",
    "Required features not available",
    "I am using some other product",
    "I don't use ppt that much now",
  ];

  const handleCancel = () => {
    const reason = selectedReason || customReason;
    if (!reason) {
      alert("Please provide a reason for cancellation.");
      return;
    }
  };

  return (
    <div className="bg-white max-w-[536px] rounded-[10px] shadow-md mt-[22px] pt-[59px] px-20 pb-2 font-inter">
      <div onClick={handleBack} className="cursor-pointer mb-[15px]">
        <img src="/images/backIcon.svg" alt="" />
      </div>
      <h2 className="text-2xl leading-[29.05px] font-semibold text-paleBlue mb-2">
        Cancel Subscription
      </h2>
      <p className="text-base font-normal text-bodyColor mb-6">
        Are you sure? Can you tell us the reason?
      </p>
      <div className="flex flex-col gap-2">
        {reasons.map((reason, index) => (
          <button
            key={index}
            onClick={() => setSelectedReason(reason)}
            className={`px-4 py-3 border border-disableGray text-center font-medium rounded-[10px] text-sm ${
              selectedReason === reason
                ? "border-blue-500 text-blue-500 bg-blue-100"
                : "border-gray-300 text-bodyColor hover:bg-gray-100"
            }`}
          >
            {reason}
          </button>
        ))}
      </div>
      <textarea
        value={customReason}
        onChange={(e) => {
          setSelectedReason("");
          setCustomReason(e.target.value);
        }}
        placeholder="Type your reason here"
        className="w-full border border-disableGray rounded-[10px] mt-8 p-3 text-sm text-textAreaGray focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
      <div className="flex flex-col items-center justify-between mt-[42px]">
        <CommonButton
          text="Cancel"
          onClick={handleCancel}
          className="w-full px-6 py-2 font-semibold bg-primary text-white"
        />

        <p className="text-xs text-bodyColor font-light leading-[14.52px] text-center mt-4">
          * Subscription will be active as per your purchase period. No refunds
          will be processed for the same.
        </p>
      </div>
    </div>
  );
}
