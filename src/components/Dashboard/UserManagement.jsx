import React from "react";

const UserManagement = () => {
  return (
    <div className="font-inter">
      {/* Top Section */}
      <h1 className="text-2xl font-semibold leading-[29.05px] text-paleBlue mb-5">
        Dashboard
      </h1>

      {/* Stats Section */}
      <div className="w-full flex gap-6 mb-10">
        <div className="bg-white w-[35.5%] shadow rounded-lg py-4 pl-6 pr-[31px]">
          <p className="text-sm font-normal leading-[16.94px] text-bodyColor">
            Active licenses
          </p>
          <h2 className="text-[40px] font-semibold leading-[48.41px]">
            01{" "}
            <span className="text-sm font-normal leading-[26px]">
              /01 Total
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
        <div className="bg-white w-[26%] shadow rounded-lg pt-[17px] pb-[18px] px-6">
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

      {/* User Management Table */}
      <div className="bg-white shadow rounded-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-gray-700">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="py-2 px-4">User name</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Date added</th>
                <th className="py-2 px-4">Device ID</th>
                <th className="py-2 px-4">Role</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4">Swapnil Lad</td>
                <td className="py-2 px-4">swapnil.lad@gmail.com</td>
                <td className="py-2 px-4">04 March 2023</td>
                <td className="py-2 px-4">d9fgv-jhtd-d6f56</td>
                <td className="py-2 px-4">Admin</td>
                <td className="py-2 px-4">
                  <button className="text-red-500 hover:text-red-700 text-sm">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
