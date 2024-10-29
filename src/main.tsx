import { StrictMode } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import LoginForm from './components/LoginForm/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/main" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>,
)
