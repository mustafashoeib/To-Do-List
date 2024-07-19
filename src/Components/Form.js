import { useState } from "react";

export default function Form({ onAddTask }) {
  const [description, setDescription] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newTask = { description, packed: false, id: Date.now() };
    console.log(newTask);
    onAddTask(newTask);

    setDescription("");
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add task</button>
    </form>
  );
}
