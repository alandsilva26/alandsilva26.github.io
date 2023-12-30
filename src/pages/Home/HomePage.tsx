import FeaturedProjects from "./components/FeaturedProjects";
import ProjectSfit from "./components/ProjectSfit";
import HomeHeader from "./components/HomeHeader";
import ProjectShowcase from "./components/ProjectShowcase";

const HomePage = (): JSX.Element => {
  return (
    <>
      <HomeHeader />
      <div className="home">
        <div className="px-5 pt-5">
          <h2>
            <b>Notable Projects</b>
          </h2>
        </div>
        <ProjectSfit />
        <FeaturedProjects />
      </div>
    </>
  );
};

export default HomePage;
