import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Assign.css';
import './Task.css';
import './AI.css';

function AI() {
    const navigate = useNavigate();
    const [selected, setSelected] = useState([]);
    const [showResult, setShowResult] = useState(false);

    const skills = ['Code', 'Frontend', 'Documentation', 'Analyser', 'Surveying and Interview', 'Drawing', 'Artwork'];

    const handleCheck = (skill) => {
        if (selected.includes(skill)) {
            setSelected(selected.filter(s => s !== skill));
        } else if (selected.length < 2) {
            setSelected([...selected, skill]);
        }
    };

    const getRole = () => {
        if (selected.includes('Code') || selected.includes('Frontend')) return 'Developer';
        if (selected.includes('Drawing') || selected.includes('Artwork')) return 'Designer';
        if (selected.includes('Documentation') || selected.includes('Analyser')) return 'Research Lead';
        if (selected.includes('Surveying and Interview')) return 'Project Manager';
        return 'Team Member';
    };

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
                <h2 className="assign-header">Assign with AI</h2>
                <div className="ai-box">
                    <h3 className="ai-quiz">QUIZ</h3>
                    <p className="ai-limit">Select 2 boxes only</p>
                    <div className="ai-skills">
                        {skills.map(skill => (
                            <label key={skill} className={`ai-skill ${selected.includes(skill) ? 'checked' : ''} ${!selected.includes(skill) && selected.length >= 2 ? 'disabled' : ''}`}>
                                <input
                                    type="checkbox"
                                    checked={selected.includes(skill)}
                                    onChange={() => handleCheck(skill)}
                                    disabled={!selected.includes(skill) && selected.length >= 2}
                                />
                                {skill}
                            </label>
                        ))}
                    </div>
                    <button className="ai-btn" onClick={() => setShowResult(true)}>Check My Role</button>
                </div>

                {showResult && (
                    <div className="result-overlay">
                        <div className="result-modal">
                            <p className="result-label">Role result</p>
                            <p className="result-text">You have been assigned for <strong>{getRole()}</strong>.</p>
                            <div className="result-actions">
                                <button className="result-reject" onClick={() => setShowResult(false)}>Reject</button>
                                <button className="result-accept" onClick={() => setShowResult(false)}>Accept</button>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}

export default AI;