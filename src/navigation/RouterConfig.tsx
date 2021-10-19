import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import Home from "../pages/Home/HomePage";
import Project from "../pages/Projects/projects";
import AboutPage from "../pages/About/AboutPage";
import NoMatch from "../pages/Errors/404";

const RouterConfig = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Project} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="*" component={NoMatch} />
    </Switch>
  );
};

export default RouterConfig;
