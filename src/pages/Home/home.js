import React from "react";
import FeaturedProjects from "./featured-projects.js";
import ProjectSfit from "./ProjectSfit";

function Home() {
  return (
    <div className="home">
      <div className="px-5 pt-5">
        <h2>
          <b>Notable Projects</b>
        </h2>
      </div>
      <ProjectSfit />
      <FeaturedProjects />
    </div>
  );
}

export default Home;
