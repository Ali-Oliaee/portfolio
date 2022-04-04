import { Routes, Route } from "react-router-dom";
import AboutPage from "../pages/about";
import HomePage from "../pages/home/";
import ContactPage from "../pages/contact";
import PortfolioPage from "../pages/portfolio";
import ResumePage from "../pages/resume";

const MainRouter = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/resume" element={<ResumePage />} />
    </Routes>
  );
};

export default MainRouter;
