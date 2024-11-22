import React from "react";
import AccountDetailsForm from "../SingleUser/AccountDetailsForm";
import CommonButton from "../common/CommonButton";

export default function RenewLicense({ setActiveSubTab }) {
  const handleBack = () => {
    setActiveSubTab("Profile Info");
  };
  return (
    <div className="bg-white rounded-xl p-5">
      <CommonButton
        text="Back"
        onClick={handleBack}
        className="bg-white text-primary hover:text-white"
      />
      <AccountDetailsForm dashboardPage={true} />
    </div>
  );
}
