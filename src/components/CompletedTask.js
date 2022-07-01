import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";

const CompletedTask = ({ task }) => {
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.error('Completed task deleted')
      });
  };
  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-cyan-700 to-indigo-600 rounded-full p-3 text-white text-lg font-serif">
      <s>{task.todo}</s>
      <span
        onClick={() => handleDelete(task._id)}
        className="text-2xl text-red-500 hover:text-red-700 cursor-pointer"
      >
        <AiFillDelete />
      </span>
    </div>
  );
};

export default CompletedTask;
