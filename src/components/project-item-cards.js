import React from "react";
import { Link } from "react-router-dom";
import { homeHeaderImage } from "../data/media";

function ProjectItemCards({ project }) {
  const { name, description, shortDescription, primaryLanguage } = project;

  return (
    <article className="project-item card">
      <div className="project-item--image">
        <img src={homeHeaderImage} alt="a" />
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
  );
}

export default ProjectItemCards;
