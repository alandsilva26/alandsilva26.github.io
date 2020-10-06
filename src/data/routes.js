import Projects from "../pages/projects";
import Home from "../pages/Home/home";
import About from "../pages/About/about";

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
];

export default routes;
