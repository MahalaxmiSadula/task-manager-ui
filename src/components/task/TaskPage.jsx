import { useState, useEffect } from "react";
import NewTask from "./NewTask";
import TaskList from "./TaskList";

const TaskPage = () => {
  const [tasks, setTasks] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(tasks));
  }, [tasks]);

  //functions
  function addTask(title) {
    setTasks((currentsTasks) => {
      return [
        ...currentsTasks,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
    console.log(tasks);
  }

  function deleteTask(id) {
    setTasks((currentTasks) => {
      return currentTasks.filter((task) => task.id !== id);
    });
  }

  function toggleTask(id, completed) {
    setTasks((currentTasks) => {
      return currentTasks.map((task) => {
        if (task.id === id) return { ...task, completed };
        return task;
      });
    });
  }

  //html
  return (
    <>
      <h1>Task Manager</h1>
      <hr></hr>

      <NewTask addTaskProp={addTask} />

      <hr></hr>

      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </>
  );
};
export default TaskPage;
