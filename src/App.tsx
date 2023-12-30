import { BrowserRouter as Router } from "react-router-dom";
// import ScrollToTop from "./config/scroll-to-top";
import RouterConfig from "./navigation/RouterConfig";
import { ProjectProvider } from "./context/project-context";

// components
import Footer from "./components/Footer/footer";

function App() {
  return (
    <ProjectProvider>
      <Router>
        {/* <ScrollToTop /> */}
        <RouterConfig />
        <Footer />
      </Router>
    </ProjectProvider>
  );
}

export default App;
