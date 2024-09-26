import "./App.css";
import HomePage from "./view/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import LoginPage from "./view/Login";
import Orders from "./view/Orders";
import FeaturesPage from "./view/FeaturesPage";
import AboutUS from "./view/AboutUs";
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
      </Routes>
    </Router>
  );
}

export default App;
