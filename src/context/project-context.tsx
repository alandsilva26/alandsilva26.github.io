import React, { createContext } from "react";
import axios from "axios";
import { db } from "../config/firebaseConfig";
import ProjectItemCards, { Project } from "../components/ProjectItemCards";

const ProjectContext = createContext({});

interface IProps {
  children: any
}

interface IState {
  user: {};
  projects: Project[];
  featuredProjects: Project[];
  filteredProjects: Project[];
  loading: boolean;
  steamProfile?: {};
  headerClass: string;
  name: string;
  description: string;
  language: string;
  tag: string;
}

class ProjectProvider extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
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
          (project: Project) =>
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
      14753140, 15258703, 15466753, 16675185, 29913, 130928, 7999,
    ];

    const pickedColor = colors[Math.floor(Math.random() * colors.length)];
    var date = new Date().toLocaleString();

    let content = "<@471707605476179969> Someone visited your website";

    let query = new URLSearchParams(window.location.search);
    // console.log(query);

    if (query.get("refer")) {
      content = content + ` from ${query.get("refer")}`;
    }

    const article = {
      username: "Website bot",
      avatar_url: "https://i.imgur.com/4M34hi2.png",
      content: content,
      embeds: [
        {
          title: `${date}`,
          description: "",
          color: pickedColor,
        },
      ],
    };

    if (import.meta.env.REACT_APP_MODE === "production") {
      if (typeof import.meta.env.REACT_APP_WEBHOOK_URL !== undefined) {
        axios
          .post(import.meta.env.REACT_APP_WEBHOOK_URL!, article)
          .then((response) => {
            console.log("Sent");
          });
      }
    }

    // this.steamApi().then((response) => {
    //   if (response === null || response === undefined) {
    //     return;
    //   }
    //   this.setState({
    //     steamProfile: { ...response[0] },
    //   });
    // });
  }

  // steamApi() {
  //   const url =
  //     "https://cors-anywhere.herokuapp.com/" +
  //     `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.REACT_APP_STEAM_API_KEY}&steamids=${process.env.REACT_APP_STEAM_ID}`;
  //   const steamResponse = fetch(url, {
  //     mode: "cors",
  //     method: "GET",
  //   })
  //     .then((response) => response.json())
  //     .then(({ response }) => response.players)
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   return steamResponse;
  // }

  getProjectElements(projects: Project[]) {
    const projectElementList = projects.map((project, index) => {
      return (
        <ProjectItemCards key={index} project={project}></ProjectItemCards>
      );
    });

    return projectElementList;
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    console.log(name, typeof value.toLowerCase());

    this.setState({
      ...this.state,
      [name]: value.toLowerCase(),
    });
    this.filterProjects();
  };

  filterProjects = (): void => {
    let filteredProjects = [...this.state.projects];
    let { name, description, language, tag } = this.state;

    if (name !== "") {
      filteredProjects = filteredProjects.filter((item) =>
        item.name.toLowerCase().includes(name)
      );
    }

    if (description !== "") {
      filteredProjects = filteredProjects.filter((item) => {
        if (item.shortDescription.toLowerCase().includes(description)) {
          return item;
        } else if (item.description?.toLowerCase().includes(description)) {
          return item;
        } else {
          return null;
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
        return null;
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

        if (item.hasOwnProperty("primaryLanguage") && !containsLanguage) {
          if (item.primaryLanguage.name.toLowerCase().includes(language)) {
            containsLanguage = true;
          }
        }

        if (containsLanguage) {
          return item;
        }

        return null;
      });
    }
    console.log("filtered", filteredProjects);

    this.setState({
      filteredProjects,
    });
  };

  getProject = (slug: string): Project | undefined => {
    const tempProjects = [...this.state.projects];
    const requiredProject = tempProjects.find(
      (project) => project.slug === slug
    );
    return requiredProject;
  };

  render() {
    return (
      <ProjectContext.Provider
        value={{
          ...this.state,
          getProjectElements: this.getProjectElements,
          filterProjects: this.filterProjects,
          handleChange: this.handleChange,
          getProject: this.getProject,
        }}
      >
        {this.props.children}
      </ProjectContext.Provider>
    );
  }
}

export { ProjectProvider, ProjectContext };
