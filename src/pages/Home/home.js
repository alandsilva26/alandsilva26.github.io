import React from "react";
// import Header from "./header";
import FeaturedProjects from "./featured-projects.js";
import codeSs from "../../images/code_ss.jpg";
import tech from "../../images/tech-01.png";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        {/* <Header /> */}
        {/* <SkillsOverview /> */}
        <div className="home--info-overview bg-light">
          <div className="container">
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
                {/* <img className="tech-image" src={tech} alt="Editor screen" /> */}
                <h3>About this website</h3>
                <h6>
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    React.js
                  </a>
                  <span> | </span>
                  <a
                    href="https://firebase.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Firebase
                  </a>
                  <span> | </span>
                  <a
                    href="https://www.netlify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Netlify
                  </a>
                </h6>
                <div className="info-about">
                  <small>
                    This website is built with React.js (context api) and{" "}
                    <a
                      href="https://sass-lang.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Sass
                    </a>{" "}
                    for styling.Firebase for analytics and data storage
                    (realtime database). This website is hosted on Netlify and
                    <a
                      href="https://alandsilva26.github.io"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Github pages
                    </a>{" "}
                    with auto deployment using{" "}
                    <a
                      href="https://github.com/alandsilva26/alandsilva26.github.io/actions"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github Actions
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://app.netlify.com/sites/alandsilva/deploys"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Netlify auto deploy
                    </a>
                    .I have also used{" "}
                    <a href="" target="_blank" rel="noopener noreferrer">
                      Steam api
                    </a>{" "}
                    to display if I am currently playing a game. In addition
                    each time someone visits this website a{" "}
                    <a
                      href="https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Discord webhook
                    </a>{" "}
                    is triggered which sends me a message on my{" "}
                    <a href="" target="_blank" rel="noopener noreferrer">
                      discord server
                    </a>
                    .
                  </small>
                </div>
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
