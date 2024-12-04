import { useState, useRef } from "react";
import { toast } from "react-toastify";
import * as XLSX from "xlsx";
const UserManagementModal = ({
  handleAddSingleUser = () => {},
  handleBulkUsers = () => {},
  onClose = () => {},
}) => {
  const fileInputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true); // Modal state
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  const handleAdd = () => {
    handleAddSingleUser(email);
  };
  const downloadTemplate = () => {
    const data = [
      { firstName: "First Name", lastName: "Last Name", Email: "Email" }, // Column headers
    ];

    const worksheet = XLSX.utils.json_to_sheet(data, { skipHeader: true });

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Template");

    XLSX.writeFile(workbook, "User_Template.xlsx");
  };
  const handleUploadBulkUser = () => {
    if (users?.length > 0) {
      const transformedUsers = users.map((user) => {
        const [firstName, lastName] = user?.name?.split(" "); // Split the name into first and last
        return {
          email: user.email,
          first_name: firstName || "John", // Fallback to "John" if first name is missing
          last_name: lastName || "Doe", // Fallback to "Doe" if last name is missing
        };
      });
      handleBulkUsers(transformedUsers);
    } else {
      toast.error("Please Upload users first");
    }
  };
  const handleButtonClick = () => {
    fileInputRef.current.click(); // Trigger the hidden input
  };
  const handleFileUpload = (e) => {
    const file = e?.target?.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      // Convert JSON data to desired format
      const formattedData = jsonData.map((row, index) => ({
        id: users.length + index + 1, // Unique ID
        name: `${row["First Name"]} ${row["Last Name"]}`, // Combine first and last name
        email: row["Email"], // Email column
      }));

      setUsers((prevUsers) => [...prevUsers, ...formattedData]);
    };

    reader.readAsArrayBuffer(file);
  };
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
        <div className="relative bg-white rounded-lg shadow-lg max-w-2xl w-full p-6">
          <button
            onClick={() => onClose()}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <h1 className="text-2xl font-bold text-gray-900 mb-6">Add users</h1>

          <div className="flex gap-4 mb-6">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-2 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="px-6 py-2 bg-[#ff7171] hover:bg-[#ff5c5c] text-white rounded-md transition duration-300 ease-in-out"
              onClick={handleAdd}
            >
              Add user
            </button>
          </div>
          <div className="flex w-full justify-between items-center">
            <button
              className="flex items-center gap-2 bg-[#f0f8ff] text-gray-700 px-4 py-2 rounded-md mb-6 hover:bg-gray-100 transition duration-300 ease-in-out"
              onClick={() => downloadTemplate()}
            >
              <svg
                className="w-5 h-5 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download excel template users
            </button>
            <button
              className="flex items-center gap-2 bg-[#f0f8ff] text-gray-700 px-4 py-2 rounded-md mb-6 hover:bg-gray-100 transition duration-300 ease-in-out"
              onClick={handleButtonClick}
            >
              <svg
                className="w-5 h-5 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Upload excel sheet of users
            </button>
            <input
              type="file"
              accept=".xlsx, .xls"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={(e) => handleFileUpload(e)}
            />
          </div>
          <div className="space-y-4">
            {users?.length > 0 ? (
              users.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between py-2 border-b border-gray-100"
                >
                  <div className="w-1/3 text-gray-900">{user.name}</div>
                  <div className="w-1/2 text-gray-600">{user.email}</div>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="text-[#ff7171] hover:text-[#ff5c5c] transition duration-300 ease-in-out"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    <span className="sr-only">Delete user</span>
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center"> No User Added Yet</p>
            )}
          </div>

          <div className="mt-8 text-center">
            <button
              className="px-8 py-2 bg-[#ff7171] hover:bg-[#ff5c5c] text-white rounded-md transition duration-300 ease-in-out"
              onClick={handleUploadBulkUser}
            >
              Add above users
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserManagementModal;
