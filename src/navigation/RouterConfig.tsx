import { Routes, Route } from "react-router-dom";

// components
import Home from "../pages/Home/HomePage";
import Project from "../pages/Projects/projects";
import AboutPage from "../pages/About/AboutPage";
import NoMatch from "../pages/Errors/404";

const RouterConfig = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default RouterConfig;

