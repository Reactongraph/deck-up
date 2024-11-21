import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function InvoiceRedirect() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get("id");

    if (id) {
      navigate(`/payment?id=${id}`);
    } else {
      toast.error("Something went wrong, please try again later");
    }
  }, [location, navigate]);

  return <div>Redirecting...</div>;
}
