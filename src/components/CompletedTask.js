import React from "react";
import { AiFillDelete } from "react-icons/ai";

const CompletedTask = ({ task, handleDelete }) => {
  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-cyan-700 to-indigo-600 rounded-full p-3 text-white text-lg font-serif">
      <s>{task.task}</s>
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
