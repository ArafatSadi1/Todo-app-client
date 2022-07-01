import React, { useEffect, useState } from "react";
import CompletedTask from "./CompletedTask";
import { toast } from "react-toastify";

const CompletedTasks = () => {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [taskDelete, setTaskDelete] = useState(false);
  const handleDelete = (id) => {
    fetch(`https://dry-ocean-18385.herokuapp.com/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.error("Completed task deleted");
        setTaskDelete(data.acknowledged);
      });
  };
  useEffect(() => {
    fetch("https://dry-ocean-18385.herokuapp.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setCompletedTasks(data.filter((todo) => todo.complete === true));
        setTaskDelete(false);
      });
  }, [taskDelete]);
  return (
    <div className="w-full h-screen bg-red-200">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-4/5 mx-auto py-8">
        {completedTasks.map((task) => (
          <CompletedTask
            key={task._id}
            task={task}
            handleDelete={handleDelete}
          ></CompletedTask>
        ))}
      </div>
    </div>
  );
};

export default CompletedTasks;
