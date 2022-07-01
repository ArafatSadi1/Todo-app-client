import React, { useRef, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";

const SingleTodo = ({ task, taskDone, setTaskDone }) => {
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(task?.task);
  const updateTodo = useRef();
  const handleEdit = (e, id) => {
    e.preventDefault();
    const updatedTodo = updateTodo.current.value;
    fetch(`https://dry-ocean-18385.herokuapp.com/updateTodo/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ updatedTodo }),
    })
      .then((response) => response.json())
      .then((data) => {
        toast("Task edited");
        setEdit(!edit);
      });
  };
  const handleDone = (id) => {
    setTaskDone(!taskDone);
    fetch(`https://dry-ocean-18385.herokuapp.com/completeTodo/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ complete: true }),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("Task complete");
        setTaskDone(taskDone);
      });
  };
  return (
    <div className="bg-gradient-to-r from-cyan-700 to-indigo-600 rounded-full ">
      <form
        onSubmit={(e) => handleEdit(e, task?._id)}
        className="flex justify-between items-center pt-3 px-3"
      >
        {edit ? (
          <input
            type="text"
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            ref={updateTodo}
            className="input input-bordered input-primary w-full p-2 text-lg rounded-full"
          />
        ) : (
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              onClick={() => handleDone(task._id)}
              class="checkbox checkbox-secondary bg-white rounded-full"
            />
            <span className="font-serif text-lg text-white">{task.task}</span>
          </div>
        )}
        <div className="text-2xl">
          <span
            onClick={() => setEdit(!edit)}
            className="text-white hover:text-gray-300 cursor-pointer"
          >
            <AiFillEdit />
          </span>
        </div>
      </form>
      <span className="text-sm text-white block text-center pb-2">
        {task.date}
      </span>
    </div>
  );
};

export default SingleTodo;
