import { useState } from "react";
import { Board } from "./boardColumn";
import { initialTasks } from './data'

const Boards = [
    { value: 'todo', label: 'To Do' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'done', label: 'Done' }
]

export function MainContent() {
    const [tasks, setTask] = useState(initialTasks)

    const Todo = tasks.filter(task => task.status === 'todo')
    const InProgress = tasks.filter(task => task.status === 'in-progress')
    const Done = tasks.filter(task => task.status === 'done')

    function deleteTask(id) {
        const updatedTask = tasks.filter(task => task.id !== id)
        setTask(updatedTask)
    }

    function addTask(title, description, status) {
        setTask((prev) => [...prev, { id: Date.now(), title, description, status }])
    }

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
                {Boards.map(board => {
                    let boardTask = board.value === "todo" ? Todo : board.value === "in-progress" ? InProgress : Done
                    return <Board key={board.value} data={board} tasks={boardTask} deleteTask={deleteTask} addTask={addTask} />
                })}
            </section>
        </main>
    )
}