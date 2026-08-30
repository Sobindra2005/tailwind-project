import { TaskCard } from "./task";

export function Board() {
    return (
        <div className={`board-column col-todo`}>
            <div className="board-header">
                <div className="header-left">
                    <span className={`dot dot-todo`}></span>
                    <h2>{'To do'}</h2>
                </div>
                <button className="more-btn">•••</button>
            </div>

            <div
                className={`task-list `}
            >
                {false ? (
                    <p className="empty-state">No tasks yet.</p>
                ) : (
                    <>
                        <TaskCard />
                    </>
                )}
            </div>

            {true ? (
                <button
                    className="add-task-btn"

                >
                    + Add Task
                </button>
            ) : (
                <form className="inline-task-form" >
                    <input
                        type="text"
                        name="title"
                        placeholder="Task title..."

                        required
                        autoFocus
                    />
                    <textarea
                        name="description"
                        rows="2"
                        placeholder="Task description..."
                        required
                    ></textarea>
                    <div className="form-actions">
                        <button type="submit" className="btn-save">Save</button>
                        <button type="button" className="btn-cancel cancel-task-btn" >Cancel</button>
                    </div>
                </form>
            )}
        </div>
    )
}