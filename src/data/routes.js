import Projects from "../pages/projects";
import Home from "../pages/Home/home";

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

export default routes;
