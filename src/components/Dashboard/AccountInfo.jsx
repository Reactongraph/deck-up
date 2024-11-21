import React, { useState } from "react";
import ProfileInfo from "./ProfileInfo";
import BuyLicenses from "./BuyLicenses";
import CancelSubscription from "./CancelSubscription";
import RenewLicense from "./RenewLicense";

const AccountInfo = () => {
  const [activeSubTab, setActiveSubTab] = useState("Profile Info");

  const renderSubContent = () => {
    switch (activeSubTab) {
      case "Profile Info":
        return <ProfileInfo setActiveSubTab={setActiveSubTab} />;
      case "Renew License":
        return <RenewLicense setActiveSubTab={setActiveSubTab} />;
      case "Buy Additional Licenses":
        return <BuyLicenses />;
      case "Cancel":
        return <CancelSubscription />;
      default:
        return <ProfileInfo setActiveSubTab={setActiveSubTab} />;
    }
  };

  return <div className="sub-tab-content">{renderSubContent()}</div>;
};

export default AccountInfo;
