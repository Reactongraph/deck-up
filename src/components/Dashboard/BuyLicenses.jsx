import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import CommonButton from "../common/CommonButton";
import AccountDetailsForm from "../SingleUser/AccountDetailsForm";
import { singleUserOrderData } from "../../utils/data";

const planToDisabled = {
  "Single user": ["Single user"],
  Multiuser: ["Single user", "Multiuser"],
  enterprises: ["Single user", "Multiuser", "enterprise"],
  individual: ["Single user"],
  team: ["Single user", "Multiuser"],
};
export default function BuyLicenses({
  setActiveSubTab,
  plan,
  from,
  setPlan = () => {},
  handleBackButton = () => {},
  CompanyInfo = [],
}) {
  const navigate = useNavigate();
  const [showAccountDetails, setShowAccountDetails] = useState(false);
  const handleBack = () => {
    if (from === "account") {
      setActiveSubTab("Profile Info");
    } else {
      handleBackButton();
    }
  };

  const handleGetStarted = (isDisabled, planData) => {
    if (planData.title === "Enterprise plan") {
      navigate("/enterprise");
    }
    if (!isDisabled) {
      setPlan(planData.title);
      // setActiveSubTab("account_details");
      setShowAccountDetails(true);
    }
  };
  const isDisabled = useMemo(() => {
    return singleUserOrderData?.findIndex(
      (planData) => planToDisabled[plan]?.includes(planData.title) || false
    );
  }, [singleUserOrderData, plan]);
  return (
    <div className="bg-white font-inter flex flex-col gap-6 mt-[14px] rounded-[10px] pl-20 pt-[59px] pb-[39px] pr-8 lg:pr-[107px]">
      {!showAccountDetails && (
        <>
          <div>
            <div onClick={handleBack} className="cursor-pointer mb-[15px]">
              <img src="/images/backIcon.svg" alt="" />
            </div>
            <h2 className="text-2xl font-semibold leading-[29.05px] text-paleBlue">
              Plans & Pricing
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-[9999]">
            {singleUserOrderData.map((planData, index) => {
              return (
                <div
                  key={index}
                  className={`bg-white rounded-lg shadow-lg p-10 flex flex-col justify-between lg:h-[467px] md:h-[340px] ${
                    index <= isDisabled ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <div>
                    <h3 className="text-2xl font-semibold text-[#2B3674] mb-2 font-inter max-sm:text-[24px]">
                      {planData.title}
                    </h3>
                    <p
                      className={`${
                        index <= isDisabled ? "text-bodyColor" : "text-primary"
                      } mb-6 font-inter max-sm:text-[14px]`}
                    >
                      {planData.subtitle}
                    </p>
                    <div className="text-4xl md:text-5xl font-bold text-[#2B3674] mb-2 font-inter max-sm:text-[48px]">
                      {planData.price}{" "}
                      <span className="text-base font-normal text-[#5C6E81] font-inter">
                        {planData.period}
                      </span>
                    </div>
                    <p className="pt-10 text-[#5C6E81] font-inter">
                      {planData.description}
                    </p>
                  </div>
                  <CommonButton
                    className={`w-full mt-8 border  ${
                      index <= isDisabled
                        ? "cursor-not-allowed border-bodyColor text-bodyColor"
                        : "border border-primary text-primary hover:text-white"
                    }`}
                    variant="outline"
                    text={planData.buttonText}
                    onClick={() =>
                      handleGetStarted(index <= isDisabled, planData)
                    }
                    disabled={index <= isDisabled}
                  />
                </div>
              );
            })}
          </div>
          <div>
            <p className="text-sm font-normal leading-[16.94px] text-bodyColor">
              *Current plan
            </p>
          </div>{" "}
        </>
      )}
      {showAccountDetails && (
        <AccountDetailsForm dashboardPage={true} CompanyInfo={CompanyInfo} />
      )}
    </div>
  );
}
