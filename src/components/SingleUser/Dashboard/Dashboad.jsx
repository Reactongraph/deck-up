import React, { useState } from "react";
import UserManagement from "./UserManagement";
import AccountInfo from "./AccountInfo";
import BillingHistory from "./BillingHistory";
import Support from "./Support";

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
      <aside className="sidebar">
        <nav className="flex flex-col justify-start items-start">
          <button onClick={() => setActiveTab("User Management")}>
            User Management
          </button>
          <button onClick={() => setActiveTab("Account Info")}>
            Account Info
          </button>
          <button onClick={() => setActiveTab("Billing History")}>
            Billing History
          </button>
          <button onClick={() => setActiveTab("Support")}>Support</button>
        </nav>
      </aside>

      <div>{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
