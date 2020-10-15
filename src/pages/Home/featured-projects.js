import React from "react";
import { ProjectContext } from "../../project-context";
import Spinner from "../../components/spinner";
import { Link } from "react-router-dom";
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
            <div className="col-xs">
              <div className="text-left featured-projects--cell">Featured</div>
            </div>
            <div className="col-xs">
              <div className="text-right featured-projects--cell">
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
