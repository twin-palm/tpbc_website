import React from "react";
import Navbar from "@/components/navigation/default_navbar";
import Footer from "../navigation/footer";

const Wrapper = ({ children }) => {
  return (
    <div className="min-h-screen relative w-screen flex flex-col">
      <Navbar />

      {children}

      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Wrapper;
