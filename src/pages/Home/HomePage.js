import React from "react";
import FeaturedProjects from "./components/featured-projects.js";
import ProjectSfit from "./components/ProjectSfit";
import HomeHeader from "./components/HomeHeader";

function HomePage() {
  return (
    <>
      <HomeHeader />
      <div className="home">
        <div className="px-5 pt-5">
          <h2>
            <b>Notable Projects</b>
          </h2>
        </div>
        <ProjectSfit />
        <FeaturedProjects />
      </div>
    </>
  );
}

export default HomePage;
