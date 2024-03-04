import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <div>
      <h1>Your Tasks</h1>

      <ul className="list">
        {tasks.map((task) => {
          return (
            <TaskItem
              {...task}
              key={task.id}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          );
        })}
      </ul>
    </div>
  );
}
export default TaskList;
