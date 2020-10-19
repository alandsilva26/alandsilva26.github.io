import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dismissable from "./components/dismissable";
import { ProjectProvider } from "./project-context";
import routes from "./data/routes";
import ScrollToTop from "./config/scroll-to-top";

//common
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

function App() {
  const routeElements = routes.map(({ path, component }, index) => {
    return <Route exact path={path} component={component} key={index} />;
  });

  return (
    <ProjectProvider>
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>{routeElements}</Switch>
        {/* <Dismissable /> */}
        <Footer routes={routes} />
      </Router>
    </ProjectProvider>
  );
}

export default App;
