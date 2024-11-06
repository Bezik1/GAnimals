import { StrictMode } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import LoginForm from './components/LoginForm/index.tsx';
import { UserProvider } from './contexts/UserContext.tsx';
import { AlertProvider } from './contexts/AlertContext.tsx';
import { GAnimalsProvider } from './contexts/GAnimalsContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AlertProvider>
      <GAnimalsProvider>
        <UserProvider>
          <Router>
            <Routes>
              <Route path="/" element={<LoginForm/>} />
              <Route path="/ganimals" element={<App />} />
            </Routes>
          </Router>
        </UserProvider>
      </GAnimalsProvider>
    </AlertProvider>
  </StrictMode>,
)
