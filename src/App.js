import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProjectProvider } from "./project-context";
import routes from "./config/routes";
import ScrollToTop from "./config/scroll-to-top";

//common
import Footer from "./components/Footer/footer";

function App() {
  const routeElements = routes.map(({ path, component }, index) => {
    return <Route exact path={path} component={component} key={index} />;
  });

  return (
    <ProjectProvider>
      <Router>
        <ScrollToTop />

        <Switch>{routeElements}</Switch>
        <Footer routes={routes} />
      </Router>
    </ProjectProvider>
  );
}

export default App;
