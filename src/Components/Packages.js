import { useState } from "react";
import  Task  from "./Task";

export default function Packages({
  tasks,
  onDeleteTask,
  onUpdateToggle,
  onClearAllTasks,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortTasks;

  if (sortBy === "input") sortTasks = tasks;

  if (sortBy === "description")
    sortTasks = tasks
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortTasks = tasks
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onUpdateToggle={onUpdateToggle}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sorted By Input</option>
          <option value="description">Sorted By Description</option>
          <option value="packed">Sorted By Packed</option>
        </select>
        <button onClick={onClearAllTasks}>Clear All Items</button>
      </div>
    </div>
  );
}
