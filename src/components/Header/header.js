import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "../Navbar/navbar";
import { homeHeaderImage } from "../../data/media";

function Header() {
  return (
    <header>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePageHeader} />
        <Route exact path="/projects" component={ProjectsPageHeader} />
      </Switch>
    </header>
  );
}

function HomePageHeader() {
  return (
    <div className="header--home">
      <div className="header--home-overlay" />
      <div className="header--home-overlay" />
      <div className="header--home-overlay" />
      <div className="header--home-overlay" />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div>Hi my name is</div>
            <h1>Alan Dsilva</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectsPageHeader() {
  return (
    <div className="header--projects">
      <div className="container">
        <h1>Projects</h1>
      </div>
    </div>
  );
}
export default Header;
