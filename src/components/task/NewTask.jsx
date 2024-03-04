import { useState } from "react";

function NewTask({ addTaskProp }) {
  const [newTask, setNewTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(newTask);
    if (newTask === "") return;
    addTaskProp(newTask);

    setNewTask("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="new task"
        id="task"
        type="text"
      />
      <button>Add</button>
    </form>
  );
}
export default NewTask;
