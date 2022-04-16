import { Routes, Route } from "react-router-dom";
import AboutPage from "../pages/about";
import HomePage from "../pages/home/";
import ContactPage from "../pages/contact";
import PortfolioPage from "../pages/portfolio";
import ResumePage from "../pages/resume";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/portfolio" element={<HomePage />} />
      <Route path="/portfolio/about" element={<AboutPage />} />
      <Route path="/portfolio/contact" element={<ContactPage />} />
      <Route path="/portfolio/projects" element={<PortfolioPage />} />
      <Route path="/portfolio/resume" element={<ResumePage />} />
    </Routes>
  );
};

export default MainRouter;
