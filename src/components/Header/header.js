import React from "react";
import SocialChips from "../social-chips";
import { Route, Switch, withRouter } from "react-router-dom";

import Navbar from "../Navbar/navbar";
class Header extends React.Component {
  // console.log(this.props);
  // console.log(history.location)
  // constructor() {
  //   super();
  //   this.state = {
  //     headerClass: "",
  //   };
  // }

  // componentDidMount() {
  //   const homeClass = this.props.location.pathname === "/" ? "on-home" : "";
  //   console.log("mount");
  //   this.setState({
  //     headerClass: homeClass,
  //   });
  // }

  // componentDidUpdate() {
  //   const homeClass = this.props.location.pathname === "/" ? "on-home" : "";
  //   console.log("update");
  //   this.setState({
  //     headerClass: homeClass,
  //   });
  // }

  render() {
    return (
      <header>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePageHeader} />
          <Route exact path="/projects" component={ProjectsPageHeader} />
          <Route exact path="/about" component={AboutPageHeader} />
        </Switch>
      </header>
    );
  }
}

class HomePageHeader extends React.Component {
  render() {
    return (
      <div className="header--home">
        <div className="header--home-overlay" />
        <div className="header--home-overlay" />
        <div className="header--home-overlay" />
        <div className="header--home-overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-6 primary-purple">
              <div>Hi my name is</div>
              <h1>Alan Dsilva</h1>
              <p className="pt-1">I am an aspiring Computer Engineer.</p>
            </div>
          </div>
        </div>
        <SocialChips />
      </div>
    );
  }
}

function ProjectsPageHeader() {
  return (
    <div className="header--projects">
      <div className="header--project-overlay" />
      <div className="container">
        <h1>Projects</h1>
      </div>
    </div>
  );
}

function AboutPageHeader() {
  return (
    <div className="header--about">
      <div className="header--about-overlay" />
    </div>
  );
}

export default withRouter(Header);
