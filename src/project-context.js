import React from "react";
// import firebase from "firebase";
import { db } from "./config/utils";
import ProjectItemCards from "./components/project-item-cards";
import axios from "axios";

const ProjectContext = React.createContext();

class ProjectProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      projects: [],
      featuredProjects: [],
      loading: true,
      headerClass: "",
    };
  }

  componentDidMount() {
    var ref = db.ref("/");

    ref.on("value", (snapshot) => {
      const data = snapshot.val();

      const { user, projects } = data;
      console.log(user);
      const featuredProjects = projects
        .map(
          (project) =>
            // project.featured === true ? project : null
            project
        )
        .slice(0, 6);

      console.log(featuredProjects.length);

      this.setState({
        user,
        projects,
        featuredProjects,
        loading: false,
      });
    });

    const colors = [
      14753140,
      15258703,
      15466753,
      16675185,
      29913,
      130928,
      7999,
    ];
    const pickedColor = colors[Math.floor(Math.random() * colors.length)];
    var date = new Date().toLocaleString();
    const article = {
      username: "Website bot",
      avatar_url: "https://i.imgur.com/4M34hi2.png",
      content: "Someone visited your website",
      embeds: [
        {
          title: `${date}`,
          description: "",
          color: pickedColor,
        },
      ],
    };
    if (!window.location.href.includes("localhost:3000")) {
      axios
        .post(process.env.REACT_APP_WEBHOOK_URL, article)
        .then((response) => {
          console.log("Sent");
        });
    }
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
