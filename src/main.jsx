import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Login from './Login.jsx';
import Task from './Task.jsx';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/" element={<Login />} />
        <Route path="/tasks" element={<Task />} />
      </Routes>
    </Router>
  </StrictMode>,
)
