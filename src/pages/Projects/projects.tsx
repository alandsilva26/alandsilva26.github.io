import React from "react";
import { ProjectContext } from "../../context/project-context";
import Spinner from "../../components/Spinner";
import ProjectsHeader from "./Header";

interface IProps {}

interface IState {
  search: string;
}

class Projects extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      search: "",
    };
  }

  static contextType = ProjectContext;

  render(): JSX.Element {
    const {
      filteredProjects,
      getProjectElements,
      loading,
      handleChange,
      name,
      description,
      language,
      tag,
    } = this.context;

    return (
      <>
        <ProjectsHeader />
        <section className="projects--main">
          <div className="bumps">
            <div className="left-bump" />
            <div className="right-bump" />
          </div>
          <div className="projects--background-image"></div>
          <div className="background-color" />
          <div className="container">
            <div
              className={loading ? "projects--form disabled" : "projects--form"}
            >
              <div className="active-cyan-4">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Name"
                  aria-label="Search"
                  name="name"
                  onChange={handleChange}
                  value={name}
                  disabled={loading ? true : false}
                />
              </div>
              <div className="active-cyan-4">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Description"
                  aria-label="Search"
                  name="description"
                  onChange={handleChange}
                  value={description}
                  disabled={loading ? true : false}
                />
              </div>
              <div className="active-cyan-4">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Tag"
                  aria-label="Search"
                  name="tag"
                  onChange={handleChange}
                  value={tag}
                  disabled={loading ? true : false}
                />
              </div>
              <div className="active-cyan-4">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Language"
                  aria-label="Search"
                  name="language"
                  onChange={handleChange}
                  value={language}
                  disabled={loading ? true : false}
                />
              </div>
            </div>
            <div className="row py-5">
              {loading ? <Spinner /> : getProjectElements(filteredProjects)}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Projects;
