import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProjectProvider } from "./project-context";
import routes from "./data/routes";

//common
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";

//Pages
import Home from "./pages/Home/home";
import Projects from "./pages/projects";

function App() {
  const routeElements = routes.map(({ path, component }, index) => {
    return <Route exact path={path} component={component} key={index} />;
  });
  return (
    <ProjectProvider>
      <Router>
        <Navbar routes={routes}></Navbar>
        <Switch>{routeElements}</Switch>
        <Footer routes={routes} />
      </Router>
    </ProjectProvider>
  );
}

export default App;
