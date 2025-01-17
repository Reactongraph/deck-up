import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import CommonButton from "../common/CommonButton";
import { formatDate } from "../../helper/helper";
import CommonInput from "../common/CommonInput";
import UserManagementModal from "./UserManagementModal";
import {
  useFetchUsersDetailsQuery,
  useAddSingleUserMutation,
  useAddBulkUserMutation,
} from "../../store/single-user/accountApiSlice";
import { toast } from "react-toastify";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const UserDashboardTable = ({ data, refetchData }) => {
  const email = localStorage.getItem("email");
  const { data: userDetails, refetch } = useFetchUsersDetailsQuery(email);
  const [addSingleUser, { data: userAdded }] = useAddSingleUserMutation();
  const [addBulkUser, { data: bulkUserAdded }] = useAddBulkUserMutation();

  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [originalData] = useState(data);
  const [tableData, setTableData] = useState(data);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
  const type = data?.[0]?.license?.license_type;
  
  useEffect(() => {
    refetch();
    let filteredData = [...originalData];

    // Search logic
    if (searchQuery) {
      filteredData = filteredData.filter((person) => {
        const fullName = `${person.first_name || ""} ${
          person.last_name || ""
        }`.toLowerCase();
        return (
          fullName.includes(searchQuery.toLowerCase()) ||
          person.email.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
    }

    // Filter by role
    if (selectedRole) {
      filteredData = filteredData.filter(
        (person) => person.role === selectedRole
      );
    }

    // Sorting logic
    if (sortConfig.key) {
      filteredData.sort((a, b) => {
        const aValue =
          sortConfig.key === "date" ? new Date(a.createdAt) : a[sortConfig.key];
        const bValue =
          sortConfig.key === "date" ? new Date(b.createdAt) : b[sortConfig.key];
        if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    setTableData(filteredData);
  }, [searchQuery, selectedRole, sortConfig, originalData]);
  const filteredData = data
    ?.filter((person) => {
      // Filter by search query
      const fullName = `${person.first_name || ""} ${person.last_name || ""}`;
      return (
        fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        person.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
    })
    ?.filter((person) => {
      // Filter by role
      return selectedRole ? person.role === selectedRole : true;
    });
  const sortedData = [...(filteredData || [])].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const aValue =
      sortConfig.key === "date" ? new Date(a.createdAt) : a[sortConfig.key];
    const bValue =
      sortConfig.key === "date" ? new Date(b.createdAt) : b[sortConfig.key];
    if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedPeople.length > 0 && selectedPeople.length < data?.length;
    setChecked(selectedPeople.length === data?.length);
    setIndeterminate(isIndeterminate);
    if (checkbox.current) {
      checkbox.current.indeterminate = isIndeterminate;
    }
  }, [selectedPeople, data]);

  useLayoutEffect(() => {
    if (userAdded) {
      toast.success("User added successfully");
      setOpenModal(false);
      refetchData();
    }
    if (bulkUserAdded) {
      toast.success("User added successfully");
      setOpenModal(false);
      // window.location.reload();
      refetchData();
    }
  }, [userAdded, bulkUserAdded]);

  function toggleAll() {
    setSelectedPeople(checked || indeterminate ? [] : data || []);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }
  const handleAddSingleUser = async (email = "") => {
    let payload = {
      body: { email: email },
      id: userDetails[0]?.enterprise_id,
    };
    await addSingleUser(payload);
  };
  const handleBulkUsers = async (users = []) => {
    let payload = {
      body: users,
      id: userDetails[0]?.enterprise_id,
    };
    await addBulkUser(payload);
  };
  const handleSortChange = (e) => {
    const [key, direction] = e.target.value.split("_");
    setSortConfig({ key, direction });
  };
  return (
    <div className="flex flex-col gap-3">
      <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between sm:items-center">
        <div className="w-full sm:w-[60%] flex gap-2">
          <CommonButton
            text="+ Add user"
            className={`bg-white ${
              type === "team" ? "text-bodyColor hover:text-white" : "text-white"
            } rounded-lg bg-disableGray`}
            disabled={type === "team" ? false : true}
            onClick={() => setOpenModal(true)}
          />
          <div className="w-[40%] bg-white rounded-[10px] text-sm text-disableGray">
            <CommonInput
              placeholder={"Search Users by Name/ Email"}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              disabled={type === "team" ? false : true}
              className="border border-none h-[40px] text-black"
            />
          </div>
        </div>
        <div className="flex gap-2 justify-between items-center">
          <select
            className="text-sm px-3 py-2 border rounded-md"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            <option value="">All Roles</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
          <select
            className="text-sm px-3 py-2 border rounded-md"
            onChange={handleSortChange}
            defaultValue=""
          >
            <option value="" disabled>
              Sort By
            </option>
            <option value="first_name_asc">Name A-Z</option>
            <option value="first_name_desc">Name Z-A</option>
            <option value="date_asc">Date Added (Oldest First)</option>
            <option value="date_desc">Date Added (Newest First)</option>
          </select>
        </div>
      </div>
      <div className="bg-white shadow overflow-hidden rounded-l-[10px] rounded-r-[10px] p-4  flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="relative">
              {selectedPeople.length > 0 && (
                <div className="absolute left-14 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12">
                  <button
                    type="button"
                    className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                  >
                    Bulk edit
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                  >
                    Delete all
                  </button>
                </div>
              )}
              <table className="min-w-full table-fixed divide-y divide-gray-300">
                <thead>
                  <tr className="border-b border-disableGray">
                    <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                      />
                    </th>
                    <th
                      scope="col"
                      className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold leading-[16.94px] text-bodyColor"
                    >
                      User name
                    </th>
                    <th
                      scope="col"
                      className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold leading-[16.94px] text-bodyColor"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold leading-[16.94px] text-bodyColor"
                    >
                      Date added
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold leading-[16.94px] text-bodyColor"
                    >
                      Device ID
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold leading-[16.94px] text-bodyColor"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold leading-[16.94px] text-bodyColor"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {tableData?.map((person) => (
                    <tr
                      key={person.email}
                      className={
                        selectedPeople.includes(person)
                          ? "bg-gray-50"
                          : undefined
                      }
                    >
                      <td className="relative px-7 sm:w-12 sm:px-6">
                        {selectedPeople.includes(person) && (
                          <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                        )}
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          value={person.email}
                          checked={selectedPeople.includes(person)}
                          onChange={(e) =>
                            setSelectedPeople(
                              e.target.checked
                                ? [...selectedPeople, person]
                                : selectedPeople.filter((p) => p !== person)
                            )
                          }
                        />
                      </td>
                      <td
                        className={classNames(
                          "whitespace-nowrap py-4 pr-3 text-sm font-medium",
                          selectedPeople.includes(person)
                            ? "text-indigo-600"
                            : "text-gray-900"
                        )}
                      >
                        {person.first_name || "John"}{" "}
                        {person.last_name || "Doe"}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.email}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {formatDate(person?.createdAt)}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {"-"}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.role}
                      </td>
                      <td className="whitespace-nowrap flex gap-4 py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                        <div className="cursor-pointer">
                          <img
                            src="/images/deleteIcon.svg"
                            alt="icon"
                            width="12px"
                            height="12px"
                          />
                        </div>
                        <div className="cursor-pointer">
                          <img
                            src="/images/banIcon.svg"
                            alt="icon"
                            width="14px"
                            height="14px"
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {openModal && (
        <UserManagementModal
          handleAddSingleUser={handleAddSingleUser}
          handleBulkUsers={handleBulkUsers}
          onClose={() => setOpenModal(false)}
        />
      )}
    </div>
  );
};

export default UserDashboardTable;
