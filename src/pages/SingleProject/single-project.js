import React from "react";
import { ProjectContext } from "../../project-context";
import Spinner from "../../components/spinner";
import SingleRoomContainer from "../../components/SingleRoomsContainer/single-room-container";

class SingleProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
    };
  }

  static contextType = ProjectContext;

  render() {
    const { loading, getProject } = this.context;
    if (!loading) {
      const project = getProject(this.state.slug);
      if (!project) {
        return <div className="container">Room not found</div>;
      } else {
        return <SingleRoomContainer project={project} />;
      }
    } else {
      return (
        <div className="container">
          <Spinner />
        </div>
      );
    }
  }
}

export default SingleProject;
