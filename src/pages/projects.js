import React from "react";
import { ProjectContext } from "../project-context";
import Spinner from "../components/spinner";

class Projects extends React.Component {
  static contextType = ProjectContext;
  render() {
    const { projects, getProjectElements, loading } = this.context;

    console.log(getProjectElements(projects));
    return (
      <section className="projects--main">
        <div className="bumps">
          <div className="left-bump" />
          <div className="right-bump" />
        </div>
        <div className="projects--background-image"></div>
        <div className="background-color" />
        <div className="container">
          <div className="row py-5">
            {loading ? <Spinner /> : getProjectElements(projects)}
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
