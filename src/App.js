import { ThemeProvider } from '@mui/material'
import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import MainRouter from './router'
import theme from './utils/mui'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<h3>loading</h3>}>
          <MainRouter />
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
