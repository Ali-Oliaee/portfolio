import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import theme from './utils/mui'
import Header from './components/header'
import Footer from './components/footer'
import './utils/i18n'
import './index.scss'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<h3>loading</h3>}>
        <Header />
        <App />
        <Footer />
      </Suspense>
    </ThemeProvider>
  </BrowserRouter>,
)
