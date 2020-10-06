import React from "react";
import { ProjectContext } from "../../project-context";
import Spinner from "../../components/spinner";
import { Link } from "react-router-dom";

class FeaturedProjects extends React.Component {
  static contextType = ProjectContext;

  render() {
    const { featuredProjects, getProjectElements, loading } = this.context;

    return (
      <section className="home--featured-projects">
        <div className="container">
          <div className="row heading-row justify-content-between">
            <div className="col-xs">
              <h4 className="text-left featured-projects--cell">Featured</h4>
            </div>
            <div className="col-xs">
              <h4 className="text-right featured-projects--cell">
                <Link to="projects">View all</Link>
              </h4>
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
