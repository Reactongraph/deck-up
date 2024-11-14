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
import Dashboard from "./components/SingleUser/Dashboard/Dashboad";
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
      </Routes>
    </Router>
  );
}

export default App;
