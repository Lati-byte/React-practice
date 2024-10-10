import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Greetings from './Greeting.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Greetings/>
  </StrictMode>,
)
