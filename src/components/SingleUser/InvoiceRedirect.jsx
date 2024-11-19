import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function InvoiceRedirect() {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  if (id) {
    navigate("/payment");
  }

  return <div>Redirecting...</div>;
}
