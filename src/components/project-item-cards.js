import React from "react";
import { Link } from "react-router-dom";
import { final as homeHeaderImage } from "../data/media";

function ProjectItemCards({ project }) {
  const { name, shortDescription, primaryLanguage, images } = project;
  console.log(project);
  console.log(images);
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <article className="project-item card">
        <div className="project-item--image">
          <img src={images == null ? homeHeaderImage : images[0]} alt="a" />
        </div>
        <div className="project-item--body card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{shortDescription}</p>
          <div
            className="project-item--language"
            style={{ backgroundColor: primaryLanguage.color }}
          >
            {primaryLanguage.name}
          </div>
          <Link to={`/projects/${project.slug}`} className="stretched-link" />
        </div>
      </article>
    </div>
  );
}

export default ProjectItemCards;
