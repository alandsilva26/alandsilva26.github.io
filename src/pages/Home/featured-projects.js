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

  numberOfProjects = 4;
  colSize = 12 / this.numberOfProjects;

  componentDidMount() {
    const featuredProjects = myData.projects.slice(0, this.numberOfProjects);
    this.setState({
      featuredProjects,
    });
  }

  render() {
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
