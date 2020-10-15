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
      filteredProjects: [],
      loading: true,
      headerClass: "",
      steamProfile: {},
      name: "",
      description: "",
      language: "",
      tag: "",
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
        filteredProjects: projects,
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

  handleChange = (event) => {
    const { name, value } = event.target;

    console.log(name, value.toLowerCase());

    this.setState(
      {
        [name]: value.toLowerCase(),
      },
      this.filterProjects
    );
  };

  filterProjects = (event) => {
    // let { name, value } = event.target;

    // value = value.toLowerCase();

    let filteredProjects = [...this.state.projects];
    let { name, description, language, tag } = this.state;

    if (name !== "") {
      filteredProjects = filteredProjects.filter((item) => {
        if (item.name.toLowerCase().includes(name)) {
          console.log("HERE");
          return item;
        }
      });
    }

    if (description !== "") {
      filteredProjects = filteredProjects.filter((item) => {
        if (item.shortDescription.toLowerCase().includes(description)) {
          return item;
        } else if (item.description.toLowerCase().includes(description)) {
          return item;
        }
      });
    }

    if (tag !== "") {
      filteredProjects = filteredProjects.filter((item) => {
        let containsTag = false;
        for (let i = 0; i < item.tags.length; i++) {
          if (item.tags[i].toLowerCase().includes(tag)) {
            containsTag = true;
            break;
          }
        }
        if (containsTag) {
          return item;
        }
      });
    }

    if (language !== "") {
      filteredProjects = filteredProjects.filter((item) => {
        let containsLanguage = false;
        if (item.hasOwnProperty("languages")) {
          for (let i = 0; i < item.languages.length; i++) {
            if (item.languages[i].toLowerCase().includes(language)) {
              containsLanguage = true;
              break;
            }
          }
        }
        if (containsLanguage) {
          return item;
        }
      });
    }

    // switch (name) {
    //   case "name": {
    //     filteredProjects = filteredProjects.filter((item) => {
    //       if (item.name.toLowerCase().includes(value)) {
    //         return item;
    //       }
    //       return null;
    //     });
    //     break;
    //   }
    //   case "description": {
    //     filteredProjects = filteredProjects.filter((item) => {
    //       if (
    //         item.shortDescription.toLowerCase().includes(event.target.value)
    //       ) {
    //         return item;
    //       } else if (item.description.toLowerCase().includes(value)) {
    //         return item;
    //       }
    //       return null;
    //     });
    //     break;
    //   }

    //   case "language": {
    //     filteredProjects = filteredProjects.filter((item) => {
    //       let containsLanguage = false;
    //       if (item.hasOwnProperty("languages")) {
    //         for (let i = 0; i < item.languages.length; i++) {
    //           if (item.languages[i].toLowerCase().includes(value)) {
    //             containsLanguage = true;
    //             break;
    //           }
    //         }
    //       }
    //       if (containsLanguage) {
    //         return item;
    //       }
    //       return null;
    //     });
    //     break;
    //   }
    //   case "tags": {
    //     console.log("here in tags");
    //     filteredProjects = filteredProjects.filter((item) => {
    //       let containsTag = false;
    //       for (let i = 0; i < item.tags.length; i++) {
    //         if (item.tags[i].toLowerCase().includes(value)) {
    //           containsTag = true;
    //           break;
    //         }
    //       }
    //       if (containsTag) {
    //         return item;
    //       }
    //       return null;
    //     });
    //     break;
    //   }
    //   default:
    //     console.log("Default triggerd not expected");
    // }

    console.log("filtered", filteredProjects);

    this.setState({
      filteredProjects,
    });
  };

  render() {
    return (
      <ProjectContext.Provider
        value={{
          ...this.state,
          getProjectElements: this.getProjectElements,
          filterProjects: this.filterProjects,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </ProjectContext.Provider>
    );
  }
}

export { ProjectProvider, ProjectContext };
