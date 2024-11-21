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
        <nav className="flex flex-col justify-start items-start">
          <CommonButton
            text="User Management"
            onClick={() => setActiveTab("User Management")}
            className={`${
              activeTab ? "bg-primary text-white" : "bg-black"
            } w-full`}
          />

          <button onClick={() => setActiveTab("Account Info")}>
            Account Info
          </button>
          <button onClick={() => setActiveTab("Billing History")}>
            Billing History
          </button>
          <button onClick={() => setActiveTab("Support")}>Support</button>
        </nav>
      </aside>

      <div className="w-[70%] bg-gray-100 min-h-screen">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
