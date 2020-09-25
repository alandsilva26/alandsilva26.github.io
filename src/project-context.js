import React from "react";
import firebase from "firebase";
import ProjectItemCards from "./components/project-item-cards";

const ProjectContext = React.createContext();

class ProjectProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      featuredProjects: [],
      loading: true,
    };
  }

  componentDidMount() {
    var ref = firebase.database().ref("projects");

    ref.on("value", (snapshot) => {
      const projects = snapshot.val();

      const featuredProjects = projects
        .map((project) => (project.featured === true ? project : null))
        .slice(0, 4);

      this.setState({
        projects,
        featuredProjects,
        loading: false,
      });
    });
  }

  getProjectElements(projects) {
    const projectElementList = projects.map((project, index) => {
      return (
        <ProjectItemCards key={index} project={project}></ProjectItemCards>
      );
    });
    return projectElementList;
  }

  render() {
    return (
      <ProjectContext.Provider
        value={{ ...this.state, getProjectElements: this.getProjectElements }}
      >
        {this.props.children}
      </ProjectContext.Provider>
    );
  }
}

export { ProjectProvider, ProjectContext };
