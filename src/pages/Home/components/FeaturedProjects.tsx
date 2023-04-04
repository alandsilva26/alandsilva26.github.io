import React from "react";
import { Link } from "react-router-dom";
import { ProjectContext } from "../../../context/project-context";
import Spinner from "../../../components/Spinner";

// import projectBackground from "../../images/projects-2.png";

class FeaturedProjects extends React.Component {
  static contextType = ProjectContext;

  render() {
    const { featuredProjects, getProjectElements, loading } = this.context;

    return (
      <section className="home--featured-projects">
        {/* <img className="home--featured-projects--background-image" src={projectBackground} alt="projects background" /> */}
        <div className="projects--background-image"></div>
        <div className="background-color" />
        <div className="container">
          <div className="row heading-row justify-content-between">
            <div className="col">
              <div className="text-start featured-projects--cell">
                All Projects
              </div>
            </div>
            <div className="col">
              <div className="text-end featured-projects--cell">
                <Link to="projects">View all</Link>
              </div>
            </div>
          </div>
          <div className="row">
            {loading ? <Spinner /> : getProjectElements(featuredProjects)}
          </div>
        </div>
      </section>
    );
  }
}

export default FeaturedProjects;
