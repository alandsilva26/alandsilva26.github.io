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
      steamProfile: {},
    };
  }

  componentDidMount() {
    var ref = db.ref("/");

    ref.on("value", (snapshot) => {
      const data = snapshot.val();

      const { user, projects } = data;

      const featuredProjects = projects
        .map(
          (project) =>
            // project.featured === true ? project : null
            project
        )
        .slice(0, 6);

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
      content: "<@471707605476179969> Someone visited your website",
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

    this.steamApi().then((response) => {
      if (response === null || response === undefined) {
        return;
      }
      this.setState({
        steamProfile: { ...response[0] },
      });
    });
  }

  steamApi() {
    const url =
      "https://cors-anywhere.herokuapp.com/" +
      `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.REACT_APP_STEAM_API_KEY}&steamids=${process.env.REACT_APP_STEAM_ID}`;
    const steamResponse = fetch(url, {
      mode: "cors",
      method: "GET",
    })
      .then((response) => response.json())
      .then(({ response }) => response.players)
      .catch((error) => {
        console.log(error);
      });

    return steamResponse;
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
