import React from "react";
import Spinner from "../components/spinner";
import { ProjectContext } from "../project-context";

class About extends React.Component {
  static contextType = ProjectContext;

  render() {
    const { user, loading } = this.context;
    return (
      <div className="about">
        <div className="container">
          <div className="row">{loading ? <Spinner /> : this.data(user)}</div>
        </div>
      </div>
    );
  }

  data = (user) => {
    return (
      <>
        <img src={user.avatarUrl} alt="Alan Avatar" />
        {this.element(user.name)} {this.element(user.email)}
      </>
    );
  };

  element = (props) => {
    return <div className="col-md-12">{props}</div>;
  };
}

export default About;
