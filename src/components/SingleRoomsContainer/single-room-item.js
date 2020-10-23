import React from "react";

function SingleRoomItem({ project }) {
  const {
    name,
    shortDescription,
    description,
    github,
    websiteLink,
    tags,
    images,
  } = project;

  let shownDescription = shortDescription;

  if (shortDescription.length < description.length) {
    shownDescription = description;
  }

  return (
    <section id="single-project">
      <div className="container-fluid my-5 p-2 ">
        <div className="row">
          <div className="col-8">
            <h2>{name}</h2>
            <div className="description">{shownDescription}</div>
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row gallery">
          <div
            className="border rounded border-secondary p-4 m-4"
            style={{ background: "whitesmoke" }}
          >
            {images.map((image, index) => {
              return (
                <div className="col-md-6 col-sm-12">
                  <img key={index} src={image} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleRoomItem;
