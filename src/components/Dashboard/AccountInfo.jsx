import React, { useState } from "react";
import ProfileInfo from "./ProfileInfo";
import BuyLicenses from "./BuyLicenses";
import CancelSubscription from "./CancelSubscription";
import RenewLicense from "./RenewLicense";
import { useFetchAccountInfoQuery } from "../../store/single-user/accountApiSlice";
import QuantityPage from "../SingleUser/QuantityPage";
import PaymentPage from "../SingleUser/PaymentPage";

const AccountInfo = (CompanyInfo) => {
  const [activeSubTab, setActiveSubTab] = useState("Profile Info");
  const email = localStorage.getItem("email");

  const { data, isLoading, isError, error } = useFetchAccountInfoQuery(email);
  const [plan, setPlan] = useState("Single user");

  const renderSubContent = () => {
    switch (activeSubTab) {
      case "Profile Info":
        return (
          <ProfileInfo
            data={data}
            isLoading={isLoading}
            isError={isError}
            error={error}
            setActiveSubTab={setActiveSubTab}
            CompanyInfo={CompanyInfo}
          />
        );
      case "Renew License":
        return <RenewLicense setActiveSubTab={setActiveSubTab} />;
      case "Buy Additional Licenses":
        return (
          <BuyLicenses
            data={data}
            setActiveSubTab={setActiveSubTab}
            plan={CompanyInfo?.CompanyInfo?.configuration?.plan}
            setPlan={setPlan}
            from="account"
          />
        );
      case "Quantity":
        return (
          <QuantityPage
            mainClassName="bg-white pt-1 rounded-[10px]"
            subClassName="w-full md:pt-[58px]"
            heading="Upgrade plan"
            subHeading=""
            setActiveSubTab={setActiveSubTab}
            bottomText={"Your plan has been shifted to Teams plan"}
            plan={plan}
          />
        );
      case "payment":
        return (
          <PaymentPage
            mainClassName="bg-white pt-1 rounded-[10px]"
            subClassName="w-full md:pt-[83px] md:pb-[81px]"
          />
        );
      case "Cancel":
        return <CancelSubscription setActiveSubTab={setActiveSubTab} />;
      default:
        return <ProfileInfo data={data} setActiveSubTab={setActiveSubTab} />;
    }
  };

  return <div className="sub-tab-content">{renderSubContent()}</div>;
};

export default AccountInfo;
