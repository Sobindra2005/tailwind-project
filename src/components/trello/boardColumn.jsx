import { useState } from "react";
import { TaskCard } from "./task";

export function Board({ data, tasks, deleteTask, addTask }) {
    const [isFormActive, setIsFormActive] = useState(false)
    const [form, setForm] = useState({
        title: '',
        description: ''
    })

    const handleSaveTask = (e) => {
        e.preventDefault();
        addTask(form.title, form.description, data.value);
        
    }

    return (
        <div className={`board-column col-${data.value}`}>
            <div className="board-header">
                <div className="header-left">
                    <span className={`dot dot-${data.value}`}></span>
                    <h2>{data.label}</h2>
                </div>
                <button className="more-btn">•••</button>
            </div>

            <div
                className={`task-list `}
            >
                {false ? (
                    <p className="empty-state">No tasks yet.</p>
                ) : (
                    <>{tasks.map(task => <TaskCard key={task.id} task={task} deleteTask={deleteTask} />)
                    }
                    </>
                )}
            </div>

            {!isFormActive ? (
                <button
                    className="add-task-btn"
                    onClick={() => setIsFormActive(true)}
                >
                    + Add Task
                </button>
            ) : (
                <form className="inline-task-form" onSubmit={handleSaveTask} >
                    <input
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={(e) => setForm((prev) => {
                            return { ...prev, title: e.target.value };
                        })}
                        placeholder="Task title..."
                        required
                        autoFocus
                    />
                    <textarea
                        name="description"
                        rows="2"
                        value={form.description}
                        onChange={(e) => setForm((prev) => {
                            return { ...prev, description: e.target.value };
                        })}
                        placeholder="Task description..."
                        required
                    ></textarea>
                    <div className="form-actions">
                        <button type="submit" className="btn-save">Save</button>
                        <button type="button" className="btn-cancel cancel-task-btn" onClick={() => setIsFormActive(false)} >Cancel</button>
                    </div>
                </form>
            )}
        </div>
    )
}