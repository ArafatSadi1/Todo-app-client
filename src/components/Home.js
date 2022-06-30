import React, { useRef } from "react";
import Todos from "./Todos";

const Home = () => {
  const todoValue = useRef();
  const handleAddTodo = (e) => {
    e.preventDefault();
    const todo = todoValue.current.value;
    if (todo) {
      fetch("http://localhost:5000/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ todo }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          e.target.reset();
        });
    }
  };
  return (
    <div>
      <h1 className="text-center text-3xl py-4 font-serif">Todoist</h1>
      <form onSubmit={handleAddTodo} className="mx-auto relative w-3/5">
        <input
          ref={todoValue}
          name="todoInput"
          type="text"
          placeholder="Enter a todo"
          className="input input-bordered input-primary w-full p-4 text-lg rounded-full"
        />
        <input
          type="submit"
          value="Add"
          className="btn btn-primary absolute right-0 rounded-full"
        />
      </form>
      <Todos></Todos>
    </div>
  );
};

export default Home;
