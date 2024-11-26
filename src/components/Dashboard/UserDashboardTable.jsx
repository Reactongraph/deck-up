import React, { useLayoutEffect, useRef, useState } from "react";
import CommonButton from "../common/CommonButton";
import { formatDate } from "../../helper/helper";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function UserDashboardTable({ data }) {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState([]);

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedPeople.length > 0 && selectedPeople.length < data?.length;
    setChecked(selectedPeople.length === data?.length);
    setIndeterminate(isIndeterminate);
    if (checkbox.current) {
      checkbox.current.indeterminate = isIndeterminate;
    }
  }, [selectedPeople, data]);

  function toggleAll() {
    setSelectedPeople(checked || indeterminate ? [] : data || []);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between sm:items-center">
        <div className="w-full sm:w-[60%] flex gap-2">
          <CommonButton
            text="+ Add user"
            className="bg-disableGray text-white rounded-lg"
            disabled={true}
          />
          <div className="w-[50%] bg-white rounded-[10px] py-3 px-4 text-sm text-disableGray">
            Search Users
          </div>
        </div>
        <div className="flex gap-2">
          <CommonButton
            text="Filter"
            className="bg-white text-disableGray py-[10px] px-4 rounded-lg hover:bg-white"
            disabled={true}
          />
          <CommonButton
            text="Sort"
            className="bg-white text-disableGray py-[10px] px-4 rounded-lg hover:bg-white"
            disabled={true}
          />
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
                  {data?.map((person) => (
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
                        {person.first_name} {person.last_name}
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
    </div>
  );
}
