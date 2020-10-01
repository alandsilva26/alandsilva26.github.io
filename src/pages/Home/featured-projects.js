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
          <div className="row py-5">
            {loading ? <Spinner /> : getProjectElements(featuredProjects)}
          </div>
        </div>
      </section>
    );
  }
}

export default FeaturedProjects;
