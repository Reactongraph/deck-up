import React, { useState } from "react";
import CommonButton from "../common/CommonButton";
import { formatCurrency, formatDate } from "../../helper/helper";
import {
  useFetchLicenseDetailsQuery,
  useFetchUsersDetailsQuery,
} from "../../store/single-user/accountApiSlice";

export default function ProfileInfo({
  data,
  isLoading,
  isError,
  error,
  setActiveSubTab,
}) {
  const [showCVV, setShowCVV] = useState(false);

  const handleToggleCVV = () => {
    setShowCVV((prev) => !prev);
  };

  const email = localStorage.getItem("email");
  const { data: LicenseDetails } = useFetchLicenseDetailsQuery(email);
  const { data: userDetails } = useFetchUsersDetailsQuery(email);

  const SubscriptionsDetails = data?.subscriptions;
  const CardDetails = data?.subscriptions?.card;
  return (
    <div className="flex flex-col gap-6 font-inter">
      <div className="text-2xl font-semibold leading-[29.05px] text-paleBlue">
        Account Info
      </div>
      {isLoading ? (
        "Loading account information..."
      ) : (
        <div className="flex flex-col gap-6">
          {/* Profile Info */}
          <div className="bg-white rounded-lg shadow-md col-span-2 px-[38px] pb-6">
            <div className="border-b border-borderGray py-[19.5px] mb-6">
              <h2 className="text-sm font-semibold leading-[16.94px] text-paleBlue mb-2">
                Profile Info
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="w-[63%] flex gap-4 justify-between">
                <div className="flex flex-col gap-4">
                  <p>Type: </p>
                  <p>Organization:</p>
                  <p>Address:</p>
                  <p>No. of licenses:</p>
                </div>
                <div className="flex flex-col gap-4">
                  <p>Single user</p>
                  <p>Cerner Corporation</p>
                  <p>Michigan, USA</p>
                  <p>{LicenseDetails?.activatedUsers || 0}</p>
                </div>
              </div>
              <div className="w-[66%] flex gap-4 justify-between">
                <div className="flex flex-col gap-4">
                  <p>Pricing:</p>
                  <p>Last payment:</p>
                  <p>Payment date:</p>
                  <p>Renewal date:</p>
                </div>
                <div className="flex flex-col gap-4">
                  <p>
                    {formatCurrency(
                      SubscriptionsDetails?.base_currency_code,
                      SubscriptionsDetails?.subscription_items[0]?.unit_price /
                        100
                    )}
                    /user/
                    {SubscriptionsDetails?.billing_period_unit}
                  </p>
                  <p>
                    {formatCurrency(
                      SubscriptionsDetails?.base_currency_code,
                      SubscriptionsDetails?.subscription_items[0]?.amount / 100
                    )}
                  </p>
                  <p>{formatDate(SubscriptionsDetails?.current_term_start)}</p>
                  <p>{formatDate(SubscriptionsDetails?.current_term_end)}</p>
                </div>
              </div>
            </div>
            <CommonButton
              text="Buy additional licenses"
              onClick={() => setActiveSubTab("Buy Additional Licenses")}
              className="mt-6 bg-primary text-white px-4 py-2"
            />
          </div>

          {/* Payment Modes */}
          <div className="w-full flex gap-6 ">
            <div className="w-[58%] bg-white rounded-lg shadow-md">
              <div className="py-[18px] px-[38px] border-b border-disableGray">
                <h2 className="text-sm font-semibold leading-[16.94px] text-paleBlue">
                  Payment modes
                </h2>
              </div>
              <div className="px-10 pt-[18px] pb-6">
                <div className="flex gap-3">
                  <div className="w-[63%] bg-lightBlue rounded-[10px] p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-[10px] font-semibold leading-[12.1px] text-bodyColor mb-6">
                          My Personal Card
                        </p>
                        <div className="text-[10px] flex flex-col gap-[6px]">
                          <p className="leading-[12.1px]">Card Number:</p>
                          <p className="font-semibold leading-[12.1px]">
                            {CardDetails?.masked_number}
                          </p>
                        </div>

                        <div className="text-[10px] flex flex-col gap-[6px] mt-[14px]">
                          <p className="leading-[12.1px]">Card Holder Name:</p>
                          <p className="font-semibold leading-[12.1px]">
                            {CardDetails?.first_name} {CardDetails?.last_name}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-xl mb-[20px] font-extrabold italic text-paleBlue">
                          {CardDetails?.card_type}
                        </p>
                        <div className="text-[10px] flex flex-col gap-[14px]">
                          <div className="flex flex-col gap-[6px]">
                            <p>Exp:</p>{" "}
                            <p className="font-semibold leading-[12.1px]">
                              {CardDetails?.expiry_month}/
                              {CardDetails?.expiry_year}
                            </p>
                          </div>
                          <div className="flex flex-col gap-[6px] items-start">
                            <span>CVV/CVC:</span>
                            <div className="flex items-center">
                              <p className="font-semibold leading-[12.1px]">
                                {showCVV ? CardDetails?.cvv || "123" : "***"}
                              </p>
                              <CommonButton
                                onClick={handleToggleCVV}
                                className="text-primary hover:bg-transparent bg-transparent px-0 py-0"
                                text={showCVV ? "Hide" : "View"}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[35%] h-full flex flex-col gap-3">
                    <div className="bg-lightBlue h-full rounded-[10px] p-6">
                      Add new +
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <CommonButton
                    text="Renew License"
                    onClick={() => setActiveSubTab("Renew License")}
                    className="mt-6 bg-primary text-white px-4 py-2"
                  />
                  <CommonButton
                    text="Cancel subscription"
                    onClick={() => setActiveSubTab("Cancel")}
                    className="mt-6 text-primary hover:text-white px-4 py-2 border border-primary bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Owner */}
            {userDetails?.length > 0 ? (
              <div className="w-[46.5%] bg-white rounded-lg shadow-md py-4 px-5">
                {/* <h2 className="text-lg font-medium mb-2">Owner</h2>
              <p className="text-sm">Ravi Shah - ravi.shah@cerner.com</p> */}
                <h2 className="text-lg font-medium mt-4 mb-2">
                  {userDetails[0]?.role}
                </h2>
                <div className="text-sm flex gap-4">
                  <p className=" font-medium">
                    {userDetails[0]?.first_name} {userDetails[0]?.last_name}{" "}
                  </p>
                  <p className="font-normal">{userDetails[0]?.email}</p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </div>
  );
}
