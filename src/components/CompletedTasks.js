import React, { useEffect, useState } from "react";
import CompletedTask from "./CompletedTask";

const CompletedTasks = () => {
  const [completedTasks, setCompletedTasks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/todos")
      .then((response) => response.json())
      .then((data) => {
        setCompletedTasks(data.filter((todo) => todo.complete === true));
      });
  }, [completedTasks]);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-4/5 mx-auto my-8">
      {completedTasks.map((task) => (
        <CompletedTask key={task._id} task={task}></CompletedTask>
      ))}
    </div>
  );
};

export default CompletedTasks;
