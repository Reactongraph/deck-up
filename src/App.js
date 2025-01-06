import "./App.css";
import HomePage from "./view/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import ProtectedRoute from "./layouts/ProtectedRoute";
import LoginPage from "./view/Login";
import Orders from "./view/Orders";
import FeaturesPage from "./view/FeaturesPage";
import AboutUS from "./view/AboutUs";
import SetupPage from "./view/SetupPage";
import VerifyMail from "./view/VerifyMail";
import CreateAccountPage from "./components/SingleUser/CreateAccountPage";
import QuantityPage from "./components/SingleUser/QuantityPage";
import PaymentPage from "./components/SingleUser/PaymentPage";
import AccountDetailsForm from "./components/SingleUser/AccountDetailsForm";
import InvoiceRedirect from "./components/SingleUser/InvoiceRedirect";
import Dashboard from "./components/Dashboard/Dashboad";
import BuyLicenses from "./components/Dashboard/BuyLicenses";
import Enterprise from "./components/Enterprise";
import PricingSection from "./components/OrderPageComponents/PricingSection";
import { useRef, useState } from "react";

function App() {
  const [freeTrialInputFocus, setFreeTrialInputFocus] = useState(false);
  const freeTrialSectionRef = useRef();

  const handleTryForFreeClick = () => {
    if (freeTrialSectionRef.current) {
      setFreeTrialInputFocus(true);
      freeTrialSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PublicLayout handleTryForFreeClick={handleTryForFreeClick}>
              <HomePage
                freeTrialSectionRef={freeTrialSectionRef}
                freeTrialInputFocus={freeTrialInputFocus}
                setFreeTrialInputFocus={setFreeTrialInputFocus}
              />
            </PublicLayout>
          }
        />
        <Route
          path="/login"
          element={
            <PublicLayout>
              <LoginPage />
            </PublicLayout>
          }
        />
        <Route
          path="/orders"
          element={
            <PublicLayout>
              <Orders />
            </PublicLayout>
          }
        />
        <Route
          path="/features"
          element={
            <PublicLayout>
              <FeaturesPage />
            </PublicLayout>
          }
        />
        <Route
          path="/about"
          element={
            <PublicLayout>
              <AboutUS />
            </PublicLayout>
          }
        />
        <Route
          path="/setup"
          element={
            <ProtectedRoute>
              <PublicLayout hasNoFooter={true}>
                <SetupPage />
              </PublicLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/verify-mail"
          element={
            <PublicLayout hasNoFooter={true}>
              <VerifyMail />
            </PublicLayout>
          }
        />
        <Route
          path="/create-account"
          element={
            <PublicLayout hasNoFooter={true}>
              <CreateAccountPage />
            </PublicLayout>
          }
        />
        <Route
          path="/account-details"
          element={
            <ProtectedRoute>
              <PublicLayout hasNoFooter={true}>
                <AccountDetailsForm />
              </PublicLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/quantity"
          element={
            <ProtectedRoute>
              <PublicLayout hasNoFooter={true}>
                <QuantityPage />
              </PublicLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <PublicLayout hasNoFooter={true}>
                <PaymentPage />
              </PublicLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <PublicLayout hasNoFooter={true}>
                <Dashboard />
              </PublicLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/buy-licenses"
          element={
            <ProtectedRoute>
              <PublicLayout hasNoFooter={true}>
                <BuyLicenses />
              </PublicLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/invoice"
          element={
            <ProtectedRoute>
              <PublicLayout hasNoFooter={false}>
                <InvoiceRedirect />
              </PublicLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/enterprise"
          element={
            <PublicLayout hasNoFooter={true}>
              <Enterprise />
            </PublicLayout>
          }
        />
        <Route
          path="/plans"
          element={
            <PublicLayout hasNoFooter={true}>
              <PricingSection />
            </PublicLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
