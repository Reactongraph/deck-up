import "./App.css";
import HomePage from "./view/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
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
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PublicLayout>
              <HomePage />
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
            <PublicLayout hasNoFooter={true}>
              <SetupPage />
            </PublicLayout>
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
            <PublicLayout hasNoFooter={true}>
              <AccountDetailsForm />
            </PublicLayout>
          }
        />
        <Route
          path="/quantity"
          element={
            <PublicLayout hasNoFooter={true}>
              <QuantityPage />
            </PublicLayout>
          }
        />
        <Route
          path="/payment"
          element={
            <PublicLayout hasNoFooter={true}>
              <PaymentPage />
            </PublicLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PublicLayout hasNoFooter={true}>
              <Dashboard />
            </PublicLayout>
          }
        />
        <Route
          path="/buy-licenses"
          element={
            <PublicLayout hasNoFooter={true}>
              <BuyLicenses />
            </PublicLayout>
          }
        />

        <Route
          path="/invoice"
          element={
            <PublicLayout hasNoFooter={false}>
              <InvoiceRedirect />
            </PublicLayout>
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
