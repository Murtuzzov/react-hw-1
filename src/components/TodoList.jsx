import React from "react";

const TodoList = ({ tasks }) => {
  return (
    <div>
      <h1 className="task-number">ЗАДАЧА №2</h1>
      <ol>
        {tasks.map(({ id, task, isDone }) => (
          <li key={id}>
            <p
              className="todo"
              style={{
                backgroundColor: isDone ? "lightgreen" : "rgb(255, 100, 100);",
              }}
            >
              {task}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
