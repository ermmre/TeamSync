import { useNavigate } from 'react-router-dom';
import './Assign.css';
import './Task.css';

function Assign() {
    const navigate = useNavigate();

    return (
        <div className="app-page">
            <aside className="sidebar-page">
                <div className="logo-page">
                    <h1>TeamSync AI</h1>
                </div>
                <nav>
                    <ul>
                        <li onClick={() => navigate('/app')}>Dashboard</li>
                        <li onClick={() => navigate('/tasks')}>Tasks</li>
                        <li onClick={() => navigate('/team')}>Team</li>
                        <li>Schedule</li>
                        <li>Settings</li>
                    </ul>
                </nav>
                <div className="profile-page">
                    <p><strong>Stacy</strong></p>
                    <span>Designer</span>
                </div>
            </aside>

            <main className="main-content-page assign-main">
                <h2 className="assign-header">Assign Task</h2>
                <div className="assign-choice">
                    <div className="choice-card" onClick={() => navigate('/ai')}>
                        <span>🤖</span>
                        <h3>AI Assist</h3>
                        <p>Let AI suggest the best role for you</p>
                    </div>
                    <div className="choice-card" onClick={() => navigate('/assignp')}>
                        <span>✍️</span>
                        <h3>Personal Assign</h3>
                        <p>Manually assign a task to a team member</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Assign;