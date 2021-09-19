import HomePage from "../pages/Home/HomePage";
import Projects from "../pages/Projects/projects";
// import SingleProject from "../pages/SingleProject/single-project";
import AboutPage from "../pages/About/AboutPage";
import TestPage from "../pages/TestPage";
import NoMatch from "../pages/Errors/404";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
  },
  {
    path: "/testpage",
    component: TestPage,
  },
  {
    path: "*",
    component: NoMatch,
  },
];

export default routes;
