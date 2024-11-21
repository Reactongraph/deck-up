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
    <div className="flex h-full gap-[41px] pt-12 pl-7 bg-lightBlue">
      <aside className="sidebar w-[20%]">
        <nav className="flex flex-col justify-start items-start mt-[71px]">
          <CommonButton
            text="User Management"
            onClick={() => setActiveTab("User Management")}
            className={`${
              activeTab === "User Management"
                ? "bg-primary text-white -ml-[25%] w-full"
                : "hover:bg-transparent"
            } `}
          />
          <CommonButton
            text="Account Info"
            onClick={() => setActiveTab("Account Info")}
            className={`${
              activeTab === "Account Info"
                ? "bg-primary text-white -ml-[25%] w-full"
                : "hover:bg-transparent"
            } `}
          />

          <CommonButton
            text="Billing History"
            onClick={() => setActiveTab("Billing History")}
            className={`${
              activeTab === "Billing History"
                ? "bg-primary text-white -ml-[25%] w-full"
                : "hover:bg-transparent"
            } `}
          />

          <CommonButton
            text="Support"
            onClick={() => setActiveTab("Support")}
            className={`${
              activeTab === "Support"
                ? "bg-primary text-white -ml-[25%] w-full"
                : "hover:bg-transparent"
            } `}
          />
        </nav>
      </aside>

      <div className="w-[70%] bg-gray-100 min-h-screen">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
