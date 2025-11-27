import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './animatex.css'
import App from './App.jsx'
import { ThemeWrapper } from '../components/animatex/themetoggler.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeWrapper>
       <App />
    </ThemeWrapper>
  </StrictMode>,
)
