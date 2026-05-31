import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Login from './Login.jsx';
import Task from './Task.jsx';
import './index.css'
import Team from './Team.jsx';
import Assign from './Assign.tsx';
import AI from './AI.tsx';
import AssignP from './AssignP.tsx';
import Schedule from './Schedule.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/" element={<Login />} />
        <Route path="/tasks" element={<Task />} />
        <Route path="/team" element={<Team />} />
        <Route path="/assign" element={<Assign />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/assignp" element={<AssignP />} />
      </Routes>
    </Router>
  </StrictMode>,
)
