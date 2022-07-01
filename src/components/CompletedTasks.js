import React, { useEffect, useState } from "react";
import CompletedTask from "./CompletedTask";
import { toast } from "react-toastify";


const CompletedTasks = () => {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [taskDelete, setTaskDelete] = useState(false);
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.error('Completed task deleted');
        setTaskDelete(data.acknowledged)
      });
  };
  useEffect(() => {
    fetch("http://localhost:5000/todos")
      .then((response) => response.json())
      .then((data) => {
        setCompletedTasks(data.filter((todo) => todo.complete === true));
      });
  }, [taskDelete]);
  console.log(completedTasks)
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-4/5 mx-auto my-8">
      {completedTasks.map((task) => (
        <CompletedTask key={task._id} task={task} handleDelete={handleDelete}></CompletedTask>
      ))}
    </div>
  );
};

export default CompletedTasks;