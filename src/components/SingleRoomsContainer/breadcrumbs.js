import React from "react";
import { Link } from "react-router-dom";
// import routes from "../../data/routes";

function Breadcrumbs({ slug }) {
  const slugs = [
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: slug.name,
      link: `/projects/${slug.slug}`,
    },
  ];

  let makeElements = slugs.map((slug, index) => {
    if (index !== slugs.length - 1) {
      return (
        <>
          <span className="breadcrumbs--breadcrumb">
            <Link to={slug.link}>{slug.name}</Link>
          </span>
          <span className="breadcrumbs--seperator"> &gt; </span>
        </>
      );
    }
    return (
      <span className="breadcrumbs--breadcrumb">
        <Link to={slug.link}>{slug.name}</Link>{" "}
      </span>
    );
  });

  return (
    <section id="breadcrumbs">
      <div className="breadcrumbs--container">{makeElements}</div>
    </section>
  );
}

export default Breadcrumbs;
