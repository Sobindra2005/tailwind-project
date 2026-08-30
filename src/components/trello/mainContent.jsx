import { Board } from "./boardColumn";

const Boards = [
    { value: 'todo', label: 'To Do' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'done', label: 'Done' }
]

export function MainContent() {
    return (
        <main className="main-content">
            <header className="topbar border-b border-gray-700">
                <div className="search-bar">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input type="text" placeholder="Search a task..." />
                    <span className="shortcut">⌘K</span>
                </div>
                <div className="user-profile">
                    <div className="avatar-group">
                        <div className="avatar"></div>
                        <div className="avatar"></div>
                        <div className="avatar"></div>
                    </div>
                </div>
            </header>

            <div className="project-header">
                <h1>NovaBoard Mobile App</h1>
                <div className="project-meta">
                    <span className="meta-item">Client: <strong>Arcadia Solutions</strong></span>
                    <span className="meta-dot">•</span>
                    <span className="meta-item menu-item-second">Timeline: <strong>May 20 - June 30, 2025</strong></span>
                    <span className="status-pill">In Progress</span>
                </div>
            </div>

            <section className="board-container" id="board">
                {Boards.map(board => <Board key={board.value} data={board} />)}
            </section>
        </main>
    )
}