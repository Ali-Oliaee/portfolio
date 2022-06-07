import { Routes, Route } from "react-router-dom";
import AboutPage from "../pages/about";
import HomePage from "../pages/home/";
import ContactPage from "../pages/contact";
import PortfolioPage from "../pages/portfolio";
import ResumePage from "../pages/resume";
import NotFound from "../pages/not-found";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/projects" element={<PortfolioPage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRouter;
