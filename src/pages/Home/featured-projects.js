import React from "react";
import { ProjectContext } from "../../project-context";
import Spinner from "../../components/spinner";

class FeaturedProjects extends React.Component {
  static contextType = ProjectContext;

  render() {
    const { featuredProjects, getProjectElements, loading } = this.context;

    return (
      <section className="home--featured-projects">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-3">
              <h4 className="featured-projects--title">Featured</h4>
            </div>
            <div className="col-3">
              <h6 className="text-right">
                <a href="/projects">View all</a>
              </h6>
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
