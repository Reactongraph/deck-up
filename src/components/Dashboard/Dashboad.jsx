import React, { useState } from "react";
import UserManagement from "./UserManagement";
import AccountInfo from "./AccountInfo";
import BillingHistory from "./BillingHistory";
import Support from "./Support";
import CommonButton from "../common/CommonButton";
import {
  useFetchCompanyInfoQuery,
  useFetchUsersDetailsQuery,
} from "../../store/single-user/accountApiSlice";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("User Management");
  const email = localStorage.getItem("email");
  const { data: userDetails } = useFetchUsersDetailsQuery(email);

  const userId = userDetails?.[0]?.enterprise_id;

  const { data: CompanyInfo } = useFetchCompanyInfoQuery(userId, {
    skip: !userId,
  });

  const AddressDetails = CompanyInfo?.address;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "User Management":
        return <UserManagement />;
      case "Account Info":
        return <AccountInfo CompanyInfo={CompanyInfo} />;
      case "Billing History":
        return <BillingHistory />;
      case "Support":
        return <Support />;
      default:
        return <UserManagement />;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-full gap-[41px] pt-12 pl-7 pb-4 pr-7 lg:pr-0 bg-lightBlue">
      <div
        onClick={toggleSidebar}
        className="lg:hidden cursor-pointer flex items-center text-paleBlue"
      >
        <img src="/images/hamburger.svg" alt="" />
      </div>

      <div
        className={`fixed lg:static lg:hidden top-0 left-0 h-full bg-white shadow-lg z-50 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:w-[20%] p-6`}
      >
        <div className="flex justify-end lg:hidden">
          <CommonButton
            text="✕"
            onClick={toggleSidebar}
            className="text-paleBlue hover:text-white px-[10px] py-[5px]"
          />
        </div>
        <aside className="sidebar w-full h-[700px] flex flex-col justify-between mb-8">
          <nav className="flex flex-col justify-start items-start mt-[71px]">
            <div
              onClick={() => setActiveTab("User Management")}
              className={`${
                activeTab === "User Management"
                  ? "bg-primary font-extrabold py-3 px-9 text-white -ml-[22%] w-full"
                  : "hover:bg-transparent font-semibold text-bodyColor"
              } px-0 text-sm leading-[16.94px] cursor-pointer rounded-full`}
            >
              <div className="flex gap-4 items-center justify-center">
                <img src="/images/touch.svg" alt="" />
                <p>User Management</p>
              </div>
            </div>
            <div
              onClick={() => setActiveTab("Account Info")}
              className={`${
                activeTab === "Account Info"
                  ? "bg-primary font-extrabold py-3 px-9 text-white -ml-[29%] w-full"
                  : "hover:bg-transparent font-semibold text-bodyColor"
              } text-sm leading-[16.94px] mt-8 cursor-pointer rounded-full`}
            >
              <div className="flex gap-4 items-center justify-center">
                <img src="/images/groupAdd.svg" alt="" />
                <p>Account Info</p>
              </div>
            </div>
            <div
              onClick={() => setActiveTab("Billing History")}
              className={`${
                activeTab === "Billing History"
                  ? "bg-primary  font-extrabold py-3 px-9 text-white -ml-[29%] w-full"
                  : "hover:bg-transparent font-semibold text-bodyColor"
              } text-sm leading-[16.94px] mt-8 cursor-pointer rounded-full`}
            >
              <div className="flex gap-4 items-center justify-center">
                <img src="/images/creditCard.svg" alt="" />
                <p>Billing History</p>
              </div>
            </div>
            <div
              onClick={() => setActiveTab("Support")}
              className={`${
                activeTab === "Support"
                  ? "bg-primary text-white font-extrabold py-3 px-9 -ml-[34%] w-full"
                  : "hover:bg-transparent font-semibold text-bodyColor"
              } text-sm leading-[16.94px] mt-8 cursor-pointer rounded-full`}
            >
              <div className="flex gap-4 items-center justify-center">
                <img src="/images/infoIcon.svg" alt="" />
                <p>Support</p>
              </div>
            </div>
          </nav>
          <div className="flex flex-col gap-4 text-bodyColor">
            <p className="text-sm font-semibold leading-[16.94px]">
              {CompanyInfo?.organisation}
            </p>
            <div className="flex gap-2 items-center">
              <img src="/images/locationIcon.svg" alt="" />
              <p className="text-xs font-normal leading-[14.52px]">
                {AddressDetails?.address1} {AddressDetails?.address2}{" "}
                {AddressDetails?.city} {AddressDetails?.state}{" "}
                {AddressDetails?.postalcode}
              </p>
            </div>
          </div>
        </aside>
      </div>

      <aside className="hidden lg:flex sidebar font-inter w-[20%] h-[700px] flex-col justify-between mb-8">
        <nav className="flex flex-col justify-start items-start mt-[71px]">
          <div
            onClick={() => setActiveTab("User Management")}
            className={`${
              activeTab === "User Management"
                ? "bg-primary font-extrabold py-3  text-white -ml-[22%] w-full"
                : "hover:bg-transparent font-semibold text-bodyColor"
            } px-0 text-sm leading-[16.94px] cursor-pointer rounded-full`}
          >
            <div className="flex gap-4 items-center justify-center">
              <img src="/images/touch.svg" alt="" />
              <p>User Management</p>
            </div>
          </div>
          <div
            onClick={() => setActiveTab("Account Info")}
            className={`${
              activeTab === "Account Info"
                ? "bg-primary font-extrabold py-3  text-white -ml-[29%] w-full"
                : "hover:bg-transparent font-semibold text-bodyColor"
            } text-sm leading-[16.94px] mt-8 cursor-pointer rounded-full`}
          >
            <div className="flex gap-4 items-center justify-center">
              <img src="/images/groupAdd.svg" alt="" />
              <p>Account Info</p>
            </div>
          </div>
          <div
            onClick={() => setActiveTab("Billing History")}
            className={`${
              activeTab === "Billing History"
                ? "bg-primary  font-extrabold py-3 text-white -ml-[29%] w-full"
                : "hover:bg-transparent font-semibold text-bodyColor"
            } text-sm leading-[16.94px] mt-8 cursor-pointer rounded-full`}
          >
            <div className="flex gap-4 items-center justify-center">
              <img src="/images/creditCard.svg" alt="" />
              <p>Billing History</p>
            </div>
          </div>
          <div
            onClick={() => setActiveTab("Support")}
            className={`${
              activeTab === "Support"
                ? "bg-primary text-white font-extrabold py-3  -ml-[34%] w-full"
                : "hover:bg-transparent font-semibold text-bodyColor"
            } text-sm leading-[16.94px] mt-8 cursor-pointer rounded-full`}
          >
            <div className="flex gap-4 items-center justify-center">
              <img src="/images/infoIcon.svg" alt="" />
              <p>Support</p>
            </div>
          </div>
        </nav>
        <div className="flex flex-col gap-4 text-bodyColor">
          <p className="text-sm font-semibold leading-[16.94px]">
            {CompanyInfo?.organisation}
          </p>
          <div className="flex gap-2 items-center">
            <img src="/images/locationIcon.svg" alt="" />
            <p className="text-xs font-normal leading-[14.52px]">
              {AddressDetails?.address1} {AddressDetails?.address2}{" "}
              {AddressDetails?.city} {AddressDetails?.state}{" "}
              {AddressDetails?.postalcode}
            </p>
          </div>
        </div>
      </aside>

      <div className="w-full lg:w-[70%] bg-gray-100 min-h-screen">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
