import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Schedule.css';
import './Task.css';

function Schedule() {
    const navigate = useNavigate();
    const [meetings, setMeetings] = useState([
        { title: 'Weekly Standup', date: 'May 20, 2025', time: '10:00 AM', notify: 'Everyone' },
        { title: 'Design Review', date: 'May 22, 2025', time: '2:00 PM', notify: 'Stacy, John' },
    ]);

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [notify, setNotify] = useState('Everyone');

    const handleSchedule = () => {
        if (!title || !date || !time) return;
        const newMeeting = { title, date, time, notify };
        setMeetings([...meetings, newMeeting]);
        setTitle('');
        setDate('');
        setTime('');
        setNotify('Everyone');
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
                        <li className="active">Schedule</li>
                        <li>Settings</li>
                    </ul>
                </nav>
                <div className="profile-page">
                    <p><strong>Stacy</strong></p>
                    <span>Designer</span>
                </div>
            </aside>

            <main className="main-content-page schedule-main">
                <h2 className="schedule-header">Schedule</h2>

                <div className="schedule-content">
                    {/* Form */}
                    <div className="schedule-form">
                        <h3>New Meeting</h3>
                        <div className="schedule-row">
                            <label>Meeting Title</label>
                            <input
                                type="text"
                                className="schedule-input"
                                placeholder="Enter meeting title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="schedule-row">
                            <label>Date</label>
                            <input
                                type="date"
                                className="schedule-input"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                        <div className="schedule-row">
                            <label>Time</label>
                            <input
                                type="time"
                                className="schedule-input"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                        </div>
                        <div className="schedule-row">
                            <label>Notify</label>
                            <select
                                className="schedule-input"
                                value={notify}
                                onChange={(e) => setNotify(e.target.value)}
                            >
                                <option>Everyone</option>
                                <option>John</option>
                                <option>Stacy</option>
                                <option>Mike</option>
                                <option>Maya</option>
                            </select>
                        </div>
                        <button className="schedule-btn" onClick={handleSchedule}>SET MEETING</button>
                    </div>

                    {/* Upcoming Meetings */}
                    <div className="schedule-list">
                        <h3>Upcoming Meetings</h3>
                        {meetings.map((meeting, index) => (
                            <div key={index} className="meeting-card">
                                <div className="meeting-info">
                                    <h4>{meeting.title}</h4>
                                    <p>{meeting.date} at {meeting.time}</p>
                                    <p className="meeting-notify">Notifying: {meeting.notify}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Schedule;