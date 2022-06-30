import React, { useRef, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDownloadDone } from "react-icons/md";

const SingleTodo = ({ todo }) => {
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(todo.todo);
  const updateTodo = useRef()
  const handleEdit = (e, id) => {
    e.preventDefault();
    const updatedTodo = updateTodo.current.value;
    fetch(`http://localhost:5000/todo/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( {updatedTodo} ),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setEdit(false)
      });
  };
  return (
    <form
      onSubmit={(e) => handleEdit(e, todo._id)}
      className="flex justify-between items-center bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full p-3"
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
        <span className="font-serif text-lg text-white">{todo.todo}</span>
      )}
      <div className="flex gap-2 text-2xl">
        <span onClick={() => setEdit(!edit)} className="text-white">
          <AiFillEdit />
        </span>
        <span className="text-white">
          <MdDownloadDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
