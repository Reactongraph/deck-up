import React, { useState } from "react";
import UserManagement from "./UserManagement";
import AccountInfo from "./AccountInfo";
import BillingHistory from "./BillingHistory";
import Support from "./Support";
import CommonButton from "../common/CommonButton";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("User Management");

  const renderContent = () => {
    switch (activeTab) {
      case "User Management":
        return <UserManagement />;
      case "Account Info":
        return <AccountInfo />;
      case "Billing History":
        return <BillingHistory />;
      case "Support":
        return <Support />;
      default:
        return <UserManagement />;
    }
  };

  return (
    <div className="flex h-full gap-[41px] pt-12 pl-7 pb-4 bg-lightBlue">
      <aside className="sidebar w-[20%] flex flex-col justify-between mb-8">
        <nav className="flex flex-col justify-start items-start mt-[71px]">
          <CommonButton
            text={
              <div className="flex gap-4 items-center justify-center">
                <img src="/images/touch.svg" alt="" />
                <p>User Management</p>
              </div>
            }
            onClick={() => setActiveTab("User Management")}
            className={`${
              activeTab === "User Management"
                ? "bg-primary text-white -ml-[25%] w-full"
                : "hover:bg-transparent"
            } px-0 py-0 `}
          />
          <CommonButton
            text={
              <div className="flex gap-4 items-center justify-center">
                <img src="/images/groupAdd.svg" alt="" />
                <p>Account Info</p>
              </div>
            }
            onClick={() => setActiveTab("Account Info")}
            className={`${
              activeTab === "Account Info"
                ? "bg-primary text-white -ml-[25%] w-full"
                : "hover:bg-transparent"
            } `}
          />

          <CommonButton
            text={
              <div className="flex gap-4 items-center justify-center">
                <img src="/images/creditCard.svg" alt="" />
                <p>Billing History</p>
              </div>
            }
            onClick={() => setActiveTab("Billing History")}
            className={`${
              activeTab === "Billing History"
                ? "bg-primary text-white -ml-[25%] w-full"
                : "hover:bg-transparent"
            } `}
          />

          <CommonButton
            text={
              <div className="flex gap-4 items-center justify-center">
                <img src="/images/infoIcon.svg" alt="" />
                <p>Support</p>
              </div>
            }
            onClick={() => setActiveTab("Support")}
            className={`${
              activeTab === "Support"
                ? "bg-primary text-white -ml-[25%] w-full"
                : "hover:bg-transparent"
            } `}
          />
        </nav>
        <div className="flex flex-col gap-4 text-bodyColor">
          <p className="text-sm font-semibold leading-[16.94px]">
            Cerner Corporation
          </p>
          <div className="flex gap-2 items-center">
            <img src="/images/locationIcon.svg" alt="" />
            <p className="text-xs font-normal leading-[14.52px]">
              Michigan, USA 4000 048
            </p>
          </div>
        </div>
      </aside>

      <div className="w-[70%] bg-gray-100 min-h-screen">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
