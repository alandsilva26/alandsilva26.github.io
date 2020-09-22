import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//common
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";

//Pages
import Home from "./pages/Home/home";
import Projects from "./pages/projects";

function App() {
  const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/projects",
      name: "Projects",
      component: Projects,
    },
    {
      path: "/projects/:slug",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: null,
    },
  ];

  const routeElements = routes.map(({ path, component }, index) => {
    return <Route exact path={path} component={component} key={index} />;
  });
  return (
    <Router>
      <Navbar routes={routes}></Navbar>
      <Switch>{routeElements}</Switch>
      <Footer routes={routes} />
    </Router>
  );
}

export default App;
