import React, { useState } from "react";
import ProfileInfo from "./ProfileInfo";
import BuyLicenses from "./BuyLicenses";
import CancelSubscription from "./CancelSubscription";
import RenewLicense from "./RenewLicense";
import { useFetchAccountInfoQuery } from "../../store/single-user/accountApiSlice";

const AccountInfo = () => {
  const [activeSubTab, setActiveSubTab] = useState("Profile Info");
  const email = localStorage.getItem("email");

  const { data, isLoading, isError, error } = useFetchAccountInfoQuery(email);

  const renderSubContent = () => {
    switch (activeSubTab) {
      case "Profile Info":
        return <ProfileInfo data={data} setActiveSubTab={setActiveSubTab} />;
      case "Renew License":
        return <RenewLicense setActiveSubTab={setActiveSubTab} />;
      case "Buy Additional Licenses":
        return <BuyLicenses data={data} />;
      case "Cancel":
        return <CancelSubscription />;
      default:
        return <ProfileInfo data={data} setActiveSubTab={setActiveSubTab} />;
    }
  };

  if (isLoading) {
    return <div>Loading account information...</div>;
  }

  if (isError) {
    return (
      <div>
        <p className="text-red-500">
          Error loading account information:{" "}
          {error?.data?.message || "An error occurred"}
        </p>
      </div>
    );
  }

  return <div className="sub-tab-content">{renderSubContent()}</div>;
};

export default AccountInfo;
