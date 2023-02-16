import { createRoot } from 'react-dom/client'
import App from './App'
import './utils/i18n'
import './index.scss'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
