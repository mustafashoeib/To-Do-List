export default function Stats({ tasks }) {
  if (!tasks.length)
    return (
      <p className="stats">Start adding some tasks to your packing list 🚀</p>
    );
  const numTasks = tasks.length;
  const numBackedTasks = tasks.filter((task) => task.packed).length;
  const percentagePacked = Math.round((numBackedTasks / numTasks) * 100);

  return (
    <footer className="stats">
      {percentagePacked === 100
        ? "You got everything ! 😋"
        : `
      🔔 You have ${numTasks} items on your list , and you already packed
      ${numBackedTasks} (${percentagePacked} %)`}
    </footer>
  );
}
