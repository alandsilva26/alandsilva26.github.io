import Projects from "../pages/projects";

import Home from "../pages/Home/home";
import About from "../pages/About/about";
import NoMatch from "../pages/404";

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
    component: About,
  },
  {
    path: "*",
    component: NoMatch,
  },
];

export default routes;
