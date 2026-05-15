import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();
  
   const handleSubmit = () => {
        navigate('/tasks');
    };

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo">
          <h1>TeamSync AI</h1>
        </div>

        <nav>
          <ul>
            <li>Dashboard</li>
            <li onClick={handleSubmit}>Tasks</li>
            <li>Team</li>
            <li>Schedule</li>
            <li>Settings</li>
          </ul>
        </nav>

        <div className="profile">
          <p><strong>Stacy</strong></p>
          <span>Team Member</span>
        </div>
      </aside>

      <main className="main-content">
        <section className="overview-card">
          <div>
            <h2>Assignment 5 Wire-framing and Evaluations</h2>
            <h3>Due: May 16, 2025</h3>
          </div>

          <div>
            <h3>Project Progress</h3> 
            <h3 className="progress-text">70%</h3>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
        </section>

        <section className="task-board">
          <div className="task-header">
            <h2>Task Board</h2>
          </div>

          <div className="task">
            <span>1. Research</span>
            <span>Assigned to: Alex</span>
            <span className="status progress">In Progress</span>
            <span><a href='#'>View</a></span>
          </div>

          <div className="task">
            <span>2. Wireframes</span>
            <span>Assigned to: Stacy</span>
            <span className="status progress">In Progress</span>
            <span><a href='#'>View</a></span>
          </div>

          <div className="task">
            <span>3. System Implementation</span>
            <span>Assigned to: Mike</span>
            <span className="status pending">Not Started</span>
            <span><a href='#'>View</a></span>
          </div>

          <div className="task">
            <span>4. Final Report</span>
            <span>Assigned to: Maya</span>
            <span className="status pending">Not Started</span>
            <span><a href='#'>View</a></span>
          </div>
        </section>

        <section className="team-roles">
          <div className="team-header">
            <h2>Team Roles</h2>
          </div>
          <div className="members">
            <div className="member">
              <div className="avatar"><img src="src/pictures/cat_1.jpg" alt="John"></img></div>
              <h3>John</h3>
              <p>Project Manager</p>
            </div>

            <div className="member">
              <div className="avatar"><img src="src/pictures/cat_2.webp" alt="Stacy"></img></div>
              <h3>Stacy</h3>
              <p>Designer</p>
            </div>

            <div className="member">
              <div className="avatar"><img src="src/pictures/cat_3.jpg" alt="Mike"></img></div>
              <h3>Mike</h3>
              <p>Developer</p>
            </div>

            <div className="member">
              <div className="avatar"><img src="src/pictures/cat_4.png" alt="Maya"></img></div>
              <h3>Maya</h3>
              <p>Research Lead</p>
            </div>
          </div>
        </section>
      </main>

      <aside className="right-sidebar">
        <div className="widget">
          <h3>Upcoming Deadlines</h3>
          <ul>
            <li>
              <p><strong>Research</strong></p>
              <p className="red">May 5, 2025</p>
            </li>
            <li>
              <p><strong>Wireframes</strong></p>
              <p className="green">May 8, 2025</p>
            </li>
            <li>
              <p><strong>System Implementation</strong></p>
              <p className="green">May 14, 2025</p>
            </li>
            <li>
              <p><strong>Final Report</strong></p>
              <p className="green">May 16, 2025</p>
            </li>
          </ul>
          
        </div>

        <div className="widget">
          <h3>Team Activity</h3>
          <ul>
            <li>John completed a task</li>
            <li>Stacy updated Design Mockups</li>
            <li>Mike commented on Implementation</li>
          </ul>
        </div>

        <div className="widget">
          <h3>Quick Actions</h3>
          <div className="actions">
            <button>New Task</button>
            <button>Invite</button>
            <button>Meeting</button>
          </div>
        </div>

      </aside>
    </div>
  )
}

export default App
