import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import NotFound from '../pages/not-found'

const AboutPage = lazy(() => import('../pages/about'))
const ContactPage = lazy(() => import('../pages/contact'))
const PortfolioPage = lazy(() => import('../pages/portfolio'))
const ResumePage = lazy(() => import('../pages/resume'))
const HomePage = lazy(() => import('../pages/home'))

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/projects" element={<PortfolioPage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default MainRouter
