import { Routes, Route } from "react-router-dom";
import AboutPage from "../pages/about";
import HomePage from "../pages/home/";

const MainRouter = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

export default MainRouter;
