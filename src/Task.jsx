import { useNavigate } from 'react-router-dom';

import './Task.css'

function Task() {
    const navigate = useNavigate();

    const handleTasks = () => {
        navigate('/tasks');
    };

    const handleDashboard = () => {
        navigate('/app');
    }

    return (
        <>
        <div className="app-page">
          <aside className="sidebar-page">
            <div className="logo-page">
              <h1>TeamSync AI</h1>
            </div>

            <nav>
              <ul>
                <li onClick={handleDashboard}>Dashboard</li>
                <li onClick={handleTasks} className="active">Tasks</li>
                <li>Team</li>
                <li>Schedule</li>
                <li>Settings</li>
              </ul>
            </nav>

            <div className="profile-page">
              <p><strong>Stacy</strong></p>
              <span>Designer</span>
            </div>
          </aside>

          <main className="main-content-page">
            <section className="task-board-page">
              <div className="task-header-page">
                <h2>Current Tasks</h2>
              </div>

              <div className="task-page">
                <span>1. Research</span>
                <span>Assigned to: John</span>
                <span className="status progress">In Progress</span>
                <span>May 5</span>
                <span><a href='#'>View</a></span>
              </div>

              <div className="task-page">
                <span>2. Wireframes</span>
                <span>Assigned to: Stacy</span>
                <span className="status progress">In Progress</span>
                <span>May 8</span>
                <span><a href='#'>View</a></span>
              </div>

              <div className="task-page">
                <span>3. System Implementation</span>
                <span>Assigned to: Mike</span>
                <span className="status pending">Not Started</span>
                <span>May 14</span>
                <span><a href='#'>View</a></span>
              </div>

              <div className="task-page">
                <span>4. Final Report</span>
                <span>Assigned to: Maya</span>
                <span className="status progress">In Progress</span>
                <span>May 16</span>
                <span><a href='#'>View</a></span>
              </div>
            </section>

            <section className="task-board-page">
              <div className="task-header-page">
                <h2>Completed Tasks</h2>
              </div>

              <div className="task-page">
                <span>1. Project Updates</span>
                <span>Assigned to: Everyone</span>
                <span className="status complete">Completed</span>
                <span>May 4</span>
                <span><a href='#'>View</a></span>
              </div>

              <div className="task-page">
                <span>2. Interviews</span>
                <span>Assigned to: John</span>
                <span className="status complete">Completed</span>
                <span>May 5</span>
                <span><a href='#'>View</a></span>
              </div>

              <div className="task-page">
                <span>3. Draft</span>
                <span>Assigned to: Maya</span>
                <span className="status complete">Completed</span>
                <span>May 5</span>
                <span><a href='#'>View</a></span>
              </div>

              <div className="task-page">
                <span>4. Environment Setup</span>
                <span>Assigned to: Mike</span>
                <span className="status complete">Completed</span>
                <span>May 7</span>
                <span><a href='#'>View</a></span>
              </div>

              <div className="task-page">
                <span>5. Mockups</span>
                <span>Assigned to: Stacy</span>
                <span className="status complete">Completed</span>
                <span>May 7</span>
                <span><a href='#'>View</a></span>
              </div>
            </section>
          </main>
        </div>
        </>
    )
}

export default Task;