import HomePage from "../pages/Home/HomePage";
import Projects from "../pages/Projects/projects";
import SingleProject from "../pages/SingleProject/single-project";
import About from "../pages/About/about";
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
    path: "/projects/:slug",
    component: SingleProject,
  },
  {
    path: "/about",
    name: "About",
    component: About,
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
