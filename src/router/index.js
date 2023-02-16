import { Routes, Route } from 'react-router-dom'
import {
  AboutPage,
  HomePage,
  ContactPage,
  PortfolioPage,
  ResumePage,
  NotFoundPage,
} from '../pages'

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/projects" element={<PortfolioPage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default MainRouter
