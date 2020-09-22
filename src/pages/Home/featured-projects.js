import React from "react";
import ProjectItemCards from "../../components/project-item-cards";
import myData from "../../data/my-data";
import colors from "../../data/colors.json";

class FeaturedProjects extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      featuredProjects: [],
    };
  }

  // How many projects will be featured note that 12 must be divisible by this number as col width is affected by this.
  // Preferably use 3 or 4
  numberOfProjects = 4;
  colSize = 12 / this.numberOfProjects;

  componentDidMount() {
    const featuredProjects = myData.projects.slice(0, this.numberOfProjects);
    this.setState({
      featuredProjects,
    });
  }

  render() {
    // console.log("alan", this.state.featuredProjects);
    // console.log(`col-md-${this.colSize}`);
    const projectCards = this.state.featuredProjects.map((project, index) => {
      return (
        <div key={index} className={`col-lg-${this.colSize} col-md-4 col-sm-6`}>
          <ProjectItemCards project={project}></ProjectItemCards>
        </div>
      );
    });
    return (
      <section className="home--featured-projects">
        <div className="container">
          <div className="row py-5">{projectCards}</div>
        </div>
      </section>
    );
  }
}

export default FeaturedProjects;
