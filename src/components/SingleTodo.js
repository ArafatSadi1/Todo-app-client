import React, { useRef, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";

const SingleTodo = ({ todo }) => {
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(todo.todo);
  const updateTodo = useRef();
  const handleEdit = (e, id) => {
    e.preventDefault();
    const updatedTodo = updateTodo.current.value;
    fetch(`http://localhost:5000/updateTodo/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ updatedTodo }),
    })
      .then((response) => response.json())
      .then((data) => {
        toast("Task edited");
        setEdit(false);
      });
  };
  const handleDone = (id) => {
    fetch(`http://localhost:5000/completeTodo/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ complete: true }),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("Task complete");
      });
  };
  return (
    <form
      onSubmit={(e) => handleEdit(e, todo._id)}
      className="flex justify-between items-center bg-gradient-to-r from-cyan-700 to-indigo-600 rounded-full p-3"
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
            onClick={() => handleDone(todo._id)}
            class="checkbox checkbox-secondary bg-white rounded-full"
          />
          <span className="font-serif text-lg text-white">{todo.todo}</span>
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
  );
};

export default SingleTodo;
