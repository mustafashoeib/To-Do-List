import { useEffect, useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import Packages from "./Packages";
import Stats from "./Stats";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleAddTask(task) {
    setTasks((tasks) => [...tasks, task]);
  }
  function handleDeleteItem(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }
  function handleToggleUpdate(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, packed: !task.packed } : task
      )
    );
  }
  function ClearAllTasks() {
    setTasks([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddTask={handleAddTask} />
      <Packages
        tasks={tasks}
        onDeleteTask={handleDeleteItem}
        onUpdateToggle={handleToggleUpdate}
        onClearAllTasks={ClearAllTasks}
      />
      <Stats tasks={tasks} />
    </div>
  );
}
