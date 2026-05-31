import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Team.css';
import './Task.css';

function Team() {
    const navigate = useNavigate();
    const [showInvite, setShowInvite] = useState(false);
    const [email, setEmail] = useState('');

    const handleSendInvite = () => {
        alert(`Invite sent to ${email}`);
        setEmail('');
        setShowInvite(false);
    };

    const members = [
        { name: 'John', role: 'Project Manager', img: 'src/pictures/cat_1.jpg' },
        { name: 'Stacy', role: 'Designer', img: 'src/pictures/cat_2.webp' },
        { name: 'Mike', role: 'Developer', img: 'src/pictures/cat_3.jpg' },
        { name: 'Maya', role: 'Research Lead', img: 'src/pictures/cat_4.png' },
    ];

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
                        <li className="active">Team</li>
                        <li onClick={() => navigate('/schedule')}>Schedule</li>
                        <li>Settings</li>
                    </ul>
                </nav>
                <div className="profile-page">
                    <div className="profile-pic">
                        <img src="src/pictures/cat_2.webp" alt="Profile" />
                    </div>
                    <div>
                        <p><strong>Stacy</strong></p>
                        <span>Designer</span>
                    </div>
                </div>
            </aside>

            <main className="main-content-page team-main">
                <div className="team-grid">
                    {members.map((member) => (
                        <div key={member.name} className="member-card">
                            <img src={member.img} alt={member.name} />
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                        </div>
                    ))}
                    <div className="add-card" onClick={() => setShowInvite(!showInvite)}>
                        +
                    </div>
                </div>

                {showInvite && (
                    <div className="invite-box">
                        <p className="invite-title">Enter an email to invite</p>
                        <div className="invite-input-row">
                            <label>Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="invite-input"
                            />
                        </div>
                        <button className="invite-send" onClick={handleSendInvite}>SEND INVITE</button>
                        <button className="invite-cancel" onClick={() => setShowInvite(false)}>Cancel</button>
                    </div>
                )}
            </main>
        </div>
    );
}

export default Team;