import React, { useState } from "react";
import CommonButton from "../common/CommonButton";
import {
  useCancelSubscriptionMutation,
  useFetchAccountInfoQuery,
  useGetReasonForCancelQuery,
} from "../../store/single-user/accountApiSlice";
import { ToastContainer } from "react-toastify";

export default function CancelSubscription({ setActiveSubTab }) {
  const [selectedReason, setSelectedReason] = useState("");
  const [customReason, setCustomReason] = useState("");
  const { data: reasons, isLoading: isReasonLoading } =
    useGetReasonForCancelQuery();
  const email = localStorage.getItem("email");
  const { data: accountInfo } = useFetchAccountInfoQuery(email);
  const [canceApi, { isLoading }] = useCancelSubscriptionMutation();

  const handleBack = () => {
    setActiveSubTab("Profile Info");
  };

  // const reasons = [
  // "I don't need the product anymore",
  // "My project requirements are over",
  // "Required features not available",
  // "I am using some other product",
  // "I don't use ppt that much now",
  // ];

  const handleCancel = async () => {
    const reason = selectedReason || customReason;
    try {
      const responseData = await canceApi({
        id: accountInfo?.subscriptions?.id,
        reason,
        other: customReason ? true : false,
      });

      if (responseData) {
        setTimeout(() => {
          setActiveSubTab("Profile Info");
        }, 3000);
      } else {
        console.error("Failed to cancel subscription:", responseData);
      }
    } catch (error) {
      console.error("Error cancelling subscription:", error);
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
        {isReasonLoading
          ? "Loading Reasons..."
          : reasons?.cancelReasons?.map((reason, index) => (
              <button
                key={index}
                disabled={customReason ? true : false}
                onClick={() => setSelectedReason(reason)}
                className={`px-4 py-3 border border-disableGray text-center font-medium rounded-[10px] text-sm ${
                  selectedReason === reason
                    ? "border-paleBlue text-paleBlue bg-lightBlue font-semibold"
                    : customReason
                    ? "border-disableGray text-disableGray hover:text-disableGray hover:bg-white"
                    : "border-disableGray text-bodyColor hover:text-paleBlue hover:bg-lightBlue"
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
        placeholder={selectedReason ? "Disabled" : "Type your reason here"}
        disabled={selectedReason ? true : false}
        className="w-full border border-disableGray rounded-[10px] mt-8 p-3 text-sm text-textAreaGray focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
      <div className="flex flex-col items-center justify-between mt-[42px]">
        <CommonButton
          text={isLoading ? "Processing..." : "Cancel"}
          onClick={handleCancel}
          disabled={isLoading}
          className="w-full px-6 py-2 font-semibold bg-primary text-white"
        />

        <p className="text-xs text-bodyColor font-light leading-[14.52px] text-center mt-4">
          * Subscription will be active as per your purchase period. No refunds
          will be processed for the same.
        </p>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
    </div>
  );
}
