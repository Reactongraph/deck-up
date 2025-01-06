import React from "react";
import Header from "../components/Header";
import Footer from "../components/Foorter";
import CommonCopyRight from "../components/common/CommonCopyRight";

const PublicLayout = ({ children, hasNoFooter, handleTryForFreeClick }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header onTryForFreeClick={handleTryForFreeClick} />
      <main className="overflow-x-hidden">
        {children}
      </main>
      {!hasNoFooter && <Footer />}
      {!hasNoFooter && <CommonCopyRight />}
    </div>
  );
};

export default PublicLayout;
