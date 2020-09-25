import React from "react";
import { ProjectContext } from "../project-context";

class Projects extends React.Component {
  static contextType = ProjectContext;
  render() {
    const { projects, getProjectElements, loading } = this.context;

    console.log(getProjectElements(projects));
    return (
      <section className="projects--all-projects">
        <div className="container">
          <div className="row py-5">
            {loading ? "Loading" : getProjectElements(projects)}
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
