import React from "react";
// import Header from "./header";
import FeaturedProjects from "./featured-projects.js";
// import SkillsOverview from "./skills-overview.js";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        {/* <Header /> */}
        {/* <SkillsOverview /> */}
        <FeaturedProjects />
      </div>
    );
  }
}

export default Home;
