import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Pastikan path ini benar, App.jsx harus berada di folder src/
import './index.css'
import App from './App.jsx' 

// Pastikan file index.css berisi @tailwind directives


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
