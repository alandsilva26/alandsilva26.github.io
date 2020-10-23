import Home from "../pages/Home/home";
import Projects from "../pages/Projects/projects";
import SingleProject from "../pages/SingleProject/single-project";
import About from "../pages/About/about";
import NoMatch from "../pages/Errors/404";

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
    component: SingleProject,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "*",
    component: NoMatch,
  },
];

export default routes;
