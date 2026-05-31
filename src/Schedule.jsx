import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./Schedule.css";

function Schedule() {
    const [view, setView] = useState("calendar");
    const [meetings, setMeetings] = useState([
    {
        title: 'Project Updates',
        start: '2026-05-04T15:00',
        notify: 'Everyone',
    },
    {
        title: 'Discussing Interview Results',
        start: '2026-05-14T09:00',
        notify: 'Everyone',
    },
    {
        title: 'Planning Layout',
        start: '2026-05-20T16:00',
        notify: 'Everyone',
    },
    {
        title: 'Design Review',
        start: '2026-05-22T14:00',
        notify: 'Everyone',
    }

]);

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [notify, setNotify] = useState('Everyone');

    const [mode, setMode] = useState("app");
    const navigate = useNavigate();

    const handleSchedule = () => {
        if (!title || !date || !time) return;
        const newMeeting = {
            title,
            start: `${date}T${time}`,
            notify
        };
        setMeetings([...meetings, newMeeting]);
        setTitle('');
        setDate('');
        setTime('');
        setNotify('Everyone');
    };

    return (
    <>
    <div className="app-schedule">
        <aside className="sidebar">
            <div className="logo">
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

            <div className="profile">
            <div className="profile-pic">
                <img src="src/pictures/cat_2.webp" alt="Stacy"></img>
            </div>
            <div>
                <p><strong>Stacy</strong></p>
                <span>Designer</span>
            </div>
            </div>
        </aside>
        <div className="schedule-main">
            {mode === "app" && (
                <>
                <div className="schedule-tabs">
                    <button onClick={() => setView("calendar")}>
                    Calendar
                    </button>

                    <button onClick={() => setView("upcoming")}>
                    Upcoming
                    </button>
                    
                    <button onClick={() => setMode("form")}>
                    + New Meeting
                    </button>
                </div>

                {view === "calendar" && (
                    <div className="calendar-container">
                        <FullCalendar
                            plugins={[dayGridPlugin]}
                            initialView="dayGridMonth"
                            events={meetings}
                            height="100%"/>
                    </div>
                    
                )}

                {view === "upcoming" && (
                    <div className="schedule-list">
                    <h3>Upcoming Meetings</h3>
                    {meetings.map((meeting, index) => {
                        const dateObj = new Date(meeting.start);

                        return (
                            <div key={index} className="meeting-card">
                                <div className="meeting-info">
                                    <h4>{meeting.title}</h4>
                                    <p>
                                        {dateObj.toLocaleDateString()} at{" "}
                                        {dateObj.toLocaleTimeString([], {
                                            hour: "2-digit",
                                            minute: "2-digit",
                                            hour12: true
                                        })}
                                    </p>
                                    <p className="meeting-notify">
                                        Notifying: {meeting.notify}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                    </div>
                )}
                </>
            )}

            {mode === "form" && (
                <div className="schedule-form"> 
                    <h3>New Meeting</h3> 
                    <div className="schedule-row"> 
                        <label>Meeting Title</label> 
                        <input type="text" className="schedule-input" 
                        placeholder="Enter meeting title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} /> 
                    </div> 
                    <div className="schedule-row"> 
                        <label>Date</label> 
                        <input type="date" className="schedule-input" 
                        value={date} onChange={(e) => setDate(e.target.value)} /> 
                    </div> 
                    <div className="schedule-row"> 
                        <label>Time</label> 
                        <input type="time" className="schedule-input" 
                        value={time} onChange={(e) => setTime(e.target.value)} /> 
                    </div> 
                    <div className="schedule-row"> 
                        <label>Notify</label> 
                        <select className="schedule-input" 
                            value={notify} onChange={(e) => setNotify(e.target.value)} > 
                            <option>Everyone</option> 
                            <option>John</option> 
                            <option>Stacy</option> 
                            <option>Mike</option> 
                            <option>Maya</option> 
                        </select> 
                    </div> 
                    <button 
                        className="schedule-btn" 
                        onClick={handleSchedule}>
                        SET MEETING
                    </button> 
                    <button
                        className="schedule-btn"
                        onClick={() => setMode("app")}>
                        Cancel
                    </button>
                </div> 
            )}
        </div>
    </div>
    </>
  );
}

export default Schedule;