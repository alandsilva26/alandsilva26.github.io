import React from "react";
import Navbar from "../../components/Navbar/navbar";

function ProjectsHeader() {
  return (
    <header>
      <Navbar />
      <div className="header--projects">
        <div className="header--project-overlay" />
        <div className="container">
          <h1>Projects</h1>
        </div>
      </div>
    </header>
  );
}

export default ProjectsHeader;
