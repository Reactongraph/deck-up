import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("accessToken");
  const [showPopup, setShowPopup] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (!token) {
      setShowPopup(true);
      const popupTimer = setTimeout(() => {
        setShowPopup(false); // Hide the pop-up after 3 seconds
        setShouldRedirect(true); // Trigger the redirect
      }, 3000);

      return () => clearTimeout(popupTimer);
    }
  }, [token]);

  if (shouldRedirect) {
    return <Navigate to="/" replace />;
  }

  if (!token) {
    return (
      <>
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-lg font-bold text-red-600">Unauthorized</h2>
              <p className="text-gray-700">
                You are not authorized to view this page. Please log in first.
              </p>
            </div>
          </div>
        )}
      </>
    );
  }

  return children;
};

export default ProtectedRoute;
