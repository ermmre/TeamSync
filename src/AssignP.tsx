import { useNavigate } from 'react-router-dom';
import './Assign.css';
import './Task.css';

function AssignP() {
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
                        <li onClick={() => navigate('/schedule')}>Schedule</li>
                        <li>Settings</li>
                    </ul>
                </nav>
                <div className="profile-page">
                    <p><strong>Stacy</strong></p>
                    <span>Designer</span>
                </div>
            </aside>

            <main className="main-content-page assign-main">
                <h2 className="assign-header">Personal Assign</h2>
                <div className="assign-box">
                    <div className="assign-row">
                        <label>Task Name</label>
                        <input type="text" className="assign-input" placeholder="Enter task name" />
                    </div>
                    <div className="assign-row">
                        <label>Assign To</label>
                        <select className="assign-input">
                            <option>John</option>
                            <option>Stacy</option>
                            <option>Mike</option>
                            <option>Maya</option>
                        </select>
                    </div>
                    <div className="assign-row">
                        <label>Due Date</label>
                        <input type="date" className="assign-input" />
                    </div>
                    <div className="assign-row">
                        <label>Description</label>
                        <textarea className="assign-input assign-textarea" placeholder="Enter task description" />
                    </div>
                    <button className="assign-submit">ASSIGN TASK</button>
                </div>
            </main>
        </div>
    );
}

export default AssignP;