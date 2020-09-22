import React from "react";
import ProjectItemCards from "../components/project-item-cards";
import myData from "../data/my-data";

class Projects extends React.Component {
  constructor() {
    super();
  }
  render() {
    const projectElements = myData.projects.map((project, index) => {
      return (
        <div key={index} className={`col-lg-3 col-md-4 col-sm-6`}>
          <ProjectItemCards project={project}></ProjectItemCards>
        </div>
      );
    });
    return (
      <section className="projects--all-projects">
        <div className="container">
          <div className="row py-5">{projectElements}</div>
        </div>
      </section>
    );
  }
}

export default Projects;
