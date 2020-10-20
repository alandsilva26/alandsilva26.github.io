import React from "react";
import SingleRoomItem from "./single-room-item.js";
import Breadcrumbs from "./breadcrumbs";

function SingleRoomContainer({ project }) {
  return (
    <div className="container p-5 bg-white">
      <Breadcrumbs slug={{ name: project.name, slug: project.slug }} />
      <SingleRoomItem project={project} />
    </div>
  );
}

export default SingleRoomContainer;
