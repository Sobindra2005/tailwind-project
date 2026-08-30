import { TaskCard } from "./task";

export function Board({ data ,tasks }) {

    console.log(data.value , tasks )
 
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