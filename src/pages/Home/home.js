import React from "react";
// import Header from "./header";
import FeaturedProjects from "./featured-projects.js";
import codeSs from "../../images/code_ss.jpg";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        {/* <Header /> */}
        {/* <SkillsOverview /> */}
        <div className="home--info-overview bg-light">
          <div className="container p-5">
            <div className="row justify-content-between">
              <div className="col-12 col-md-6">
                <div className="image-wrapper">
                  <img
                    src={codeSs}
                    alt="
                editor screenshot"
                  />
                  <div className="image-border">
                    <div className="t l"></div>
                    <div className="t r"></div>
                    <div className="b l"></div>
                    <div className="b r"></div>
                  </div>
                  <p>
                    <small>
                      <span>
                        Photo by&nbsp;
                        <a href="https://unsplash.com/@flowforfrank?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                          Ferenc Almasi&nbsp;
                        </a>
                        on&nbsp;
                        <a href="https://unsplash.com/s/photos/react?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                          Unsplash&nbsp;
                        </a>
                      </span>
                    </small>
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-5">
                <h3>About this website</h3>
                <h6>React.js | Firebase | Netlify</h6>
              </div>
            </div>
          </div>
        </div>
        <FeaturedProjects />
      </div>
    );
  }
}

export default Home;
