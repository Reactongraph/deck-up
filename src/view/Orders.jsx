import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Foorter";
import PricingSection from "../components/OrderPageComponents/PricingSection";
import OsSelector from "../components/OrderPageComponents/OsSelector";
import FaqComponent from "../components/OrderPageComponents/FaqComponent";
const Orders = () => {
  return (
    <>
      {/* <Header /> */}
      <PricingSection />
      <OsSelector />
      <FaqComponent />
      {/* <Footer /> */}
    </>
  );
};

export default Orders;
