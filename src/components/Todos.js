import React, { useEffect, useState } from "react";
import SingleTodo from "./SingleTodo";

const Todos = ({ todo }) => {
  const [taskDone, setTaskDone] = useState(false);
  const [allTodo, setAllTodo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/todos")
      .then((response) => response.json())
      .then((data) => {
        setAllTodo(data.filter((todo) => todo.complete !== true));
        setTaskDone(!taskDone);
      });
  }, [todo, taskDone]);

  return (
    <div className="h-full relative">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-4/5 mx-auto my-8">
        {allTodo?.map((task) => (
          <SingleTodo
            key={task._id}
            task={task}
            taskDone={taskDone}
            setTaskDone={setTaskDone}
          ></SingleTodo>
        ))}
      </div>
    </div>
  );
};

export default Todos;
