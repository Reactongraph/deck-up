import React, { useEffect } from "react";
import UserDashboardTable from "./UserDashboardTable";
import {
  useFetchLicenseDetailsQuery,
  useFetchUsersDetailsQuery,
} from "../../store/single-user/accountApiSlice";

const UserManagement = () => {
  const email = localStorage.getItem("email");
  const { data, isLoading, error, refetch } = useFetchUsersDetailsQuery(email);
  const { data: LicenseDetails } = useFetchLicenseDetailsQuery(email);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div className="font-inter">
      {/* Top Section */}
      <h1 className="text-2xl font-semibold leading-[29.05px] text-paleBlue mb-5">
        Dashboard
      </h1>

      {/* Stats Section */}
      <div className="w-full flex flex-col lg:flex-row gap-6 mb-10">
        <div className="bg-white w-full lg:w-[35.5%] shadow rounded-[10px] py-4 pl-6 pr-[31px]">
          <p className="text-sm font-normal leading-[16.94px] text-bodyColor">
            Active licenses
          </p>
          <h2 className="text-[40px] text-[#26C4D8] font-semibold leading-[48.41px]">
            {LicenseDetails?.activatedUsers || 0}{" "}
            <span className="text-sm text-bodyColor font-normal leading-[26px]">
              /{LicenseDetails?.maxUsers || 0} Total
            </span>
          </h2>
          <div className="w-full h-2 rounded-[10px] bg-[#26C4D8] text-[#26C4D8] mt-[14px] mb-1">
            {/* <progress
              id="file"
              value="100" 
              className="w-full h-2 rounded-[10px] bg-[#26C4D8] text-[#26C4D8]"
            >
              32%
            </progress> */}
          </div>
        </div>
        <div className="bg-white w-full lg:w-[26%] shadow rounded-[10px] pt-[17px] pb-[18px] px-6">
          <p className="text-sm font-normal leading-[16.94px] text-bodyColor">
            Active plan
          </p>
          <h2 className="text-lg font-semibold leading-[17.96px] text-bodyColor mt-2">
            Single user plan
          </h2>
          <button className="mt-6 text-sm font-semibold leading-[26px] text-red-500">
            Upgrade
          </button>
        </div>
      </div>

      {isLoading && <p>Loading user details...</p>}
      {error && <p className="text-red-500">Failed to fetch user details.</p>}

      {/* User Management Table */}
      {data?.length > 0 ? (
        <UserDashboardTable data={data} />
      ) : (
        !isLoading && <p>No users found.</p>
      )}
    </div>
  );
};

export default UserManagement;
