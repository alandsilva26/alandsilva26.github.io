import React from "react";
import FeaturedProjects from "./components/FeaturedProjects";
import ProjectSfit from "./components/ProjectSfit";
import HomeHeader from "./components/HomeHeader";

const HomePage = (): JSX.Element => {
  return (
    <>
      <HomeHeader />
      <div className="home__about d-none">
        <div className="container my-5">
          <div className="row">
            <div className="col">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
              alias recusandae repellat, molestiae suscipit iste neque excepturi
              hic quas aperiam ipsa ab voluptas esse error et fugiat voluptates
              temporibus cum.
            </div>
            <div className="home__about--images col">
              <img
                className="img img-fluid home__about--images-1"
                src="/avatar.jpg"
                alt=""
              />
              <img
                className="img img-fluid home__about--images-2"
                src="/media/selfie.jpg"
                alt=""
              />
              <img
                className="img img-fluid home__about--images-3"
                src="/media/event.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home">
        <div className="px-5 pt-5">
          <h2>
            <b>Notable Projects</b>
          </h2>
        </div>
        <ProjectSfit />
        <FeaturedProjects />
      </div>
    </>
  );
};

export default HomePage;
