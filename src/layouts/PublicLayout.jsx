import React from "react";
import Header from "../components/Header";
import Footer from "../components/Foorter";
import CommonCopyRight from "../components/common/CommonCopyRight";
const PublicLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
      <CommonCopyRight />
    </div>
  );
};

export default PublicLayout;
