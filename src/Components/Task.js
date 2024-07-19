export default function Task({ task, onDeleteTask, onUpdateToggle }) {
  return (
    <li>
      <div className="include">
        <input
          type="checkbox"
          checked={task.packed}
          onChange={() => onUpdateToggle(task.id)}
        />
        <span style={task.packed ? { textDecoration: "line-Through" } : {}}>
          {task.description}
        </span>
      </div>
      <button onClick={() => onDeleteTask(task.id)}>❌</button>
    </li>
  );
}
