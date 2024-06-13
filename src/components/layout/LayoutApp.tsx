import React, { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutAppProps {
  children: React.ReactNode;
}

const LayoutApp: FC<LayoutAppProps> = ({ children }) => {
  return (
    <div>
      {/* <Header /> */}
      {children}
      <Footer />
    </div>
  );
};

export default LayoutApp;
