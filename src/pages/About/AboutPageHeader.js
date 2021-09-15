import React from "react";
import Navbar from "../../components/Navbar/navbar";

function AboutPageHeader() {
  return (
    <header>
      <Navbar />
      <div className="header--about">
        <div className="header--about-overlay" />
      </div>
    </header>
  );
}

export default AboutPageHeader;
