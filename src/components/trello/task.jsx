export function TaskCard({ task, deleteTask, DraggedTaskId }) {

    const handleDrag = () => {
        console.log("this is running")
        DraggedTaskId.current = task.id
        console.log(DraggedTaskId)
    }

    const handleDragEnd = () => {
        // DraggedTaskId.current = null;
    }

    return (
        <div
            draggable
            className={`task-card `}
            onDragStart={handleDrag}
            onDragEnd={handleDragEnd}
        >
            <p className="task-title mb-1">{task.title}</p>
            <p className="task-description mb-2">{task.description}</p>
            <div className="d-flex align-items-center justify-content-between gap-2">
                <span
                    className={`status-badge status-${task.status}`}
                    aria-label={`Status: ${task.status}`}
                >
                    {task.status}
                </span>
                <button
                    type="button"
                    className="delete-task-btn"
                    onClick={() => deleteTask(task.id)}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M9 3h6l1 2h4v2H4V5h4l1-2zm-2 6h2v9H7V9zm4 0h2v9h-2V9zm4 0h2v9h-2V9z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}