import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import AuthProvider from "../context/AuthContext";

// components
import Home from "../pages/Home/HomePage";
import Project from "../pages/Projects/projects";
import AboutPage from "../pages/About/AboutPage";
import NoMatch from "../pages/Errors/404";
// admin
import AdminHome from "../pages/Admin/AdminHome";
import AdminLogin from "../pages/AdminLogin/AdminLogin";

const RouterConfig = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Project} />
      <Route exact path="/about" component={AboutPage} />
      <AuthProvider>
        <PrivateRoute exact path="/admin">
          <AdminHome />
        </PrivateRoute>
        <Route path="/admin/login" component={AdminLogin} />
      </AuthProvider>

      <Route exact path="*" component={NoMatch} />
    </Switch>
  );
};

export default RouterConfig;
