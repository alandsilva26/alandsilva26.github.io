import React from "react";
import { AiOutlineStar, AiOutlineGithub } from "react-icons/ai";
import { HiOutlineLink } from "react-icons/hi";

function ProjectItemCards({ project }) {
  const {
    name,
    shortDescription,
    primaryLanguage,
    github,
    websiteLink,
    featured,
  } = project;

  let formattedDescription = shortDescription;

  let starClass = featured ? "icons star featured" : "icons star";

  if (formattedDescription.length > 200) {
    formattedDescription = formattedDescription.slice(0, 197) + "...";
  }

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 project-item--wrapper">
      <article className="project-item text-break p-3">
        <div className="project-item--body ">
          <h6 className="project-item--title">
            <a href={github}>{name}</a>
            {/* <Link to={`/projects/${slug}`} >{name}</Link> */}
          </h6>
          <p>{formattedDescription}</p>
        </div>
        <div className="project-item--footer">
          <div
            className="project-item--color"
            style={{ backgroundColor: primaryLanguage.color }}
          ></div>
          <div className="project-item--language">{primaryLanguage.name}</div>
          {github !== "" && github !== undefined ? (
            <div className={starClass}>
              <a href={github + "/stargazers"}>
                <AiOutlineStar />
              </a>
            </div>
          ) : featured ? (
            <div className="icons star featured">
              {/* <a href={github + "/stargazers"}> */}
              <AiOutlineStar />
              {/* </a> */}
            </div>
          ) : null}
          {github !== "" && github !== undefined ? (
            <div className="icons">
              <a href={github}>
                <AiOutlineGithub />
              </a>
            </div>
          ) : null}
          {websiteLink !== "" && websiteLink !== undefined ? (
            <div className="icons">
              <a href={websiteLink}>
                <HiOutlineLink />
              </a>
            </div>
          ) : null}
        </div>
      </article>
    </div>
  );
}

export default ProjectItemCards;

/* <article className="project-item card">
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
      </article> */
