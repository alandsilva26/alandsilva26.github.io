import React from "react";
import { ProjectContext } from "../../project-context";

class FeaturedProjects extends React.Component {
  static contextType = ProjectContext;

  render() {
    const { featuredProjects, getProjectElements, loading } = this.context;

    return (
      <section className="home--featured-projects">
        <div className="container">
          <div className="row py-5">
            {loading ? (
              <h1>"LOADING"</h1>
            ) : (
              getProjectElements(featuredProjects)
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default FeaturedProjects;
