import React from "react";
import AccountDetailsForm from "../SingleUser/AccountDetailsForm";

export default function RenewLicense({ setActiveSubTab }) {
  const handleBack = () => {
    setActiveSubTab("Profile Info");
  };
  return (
    <div className="bg-white rounded-xl p-5">
      <div onClick={handleBack} className="cursor-pointer mb-[15px]">
        <img src="/images/backIcon.svg" alt="" />
      </div>
      <AccountDetailsForm dashboardPage={true} />
    </div>
  );
}
