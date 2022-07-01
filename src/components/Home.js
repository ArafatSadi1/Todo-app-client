import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import Footer from "./Footer";
import Todos from "./Todos";

const Home = () => {
  const [todo, setTodo] = useState(false);
  const todoValue = useRef();
  const handleAddTodo = (e) => {
    e.preventDefault();
    const getTodo = todoValue.current.value;
    if (getTodo) {
      console.log(getTodo)
      fetch("http://localhost:5000/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ getTodo }),
      })
        .then((response) => response.json())
        .then((data) => {
          toast("Task added");
          e.target.reset();
          setTodo(data.acknowledged);
        });
    }
  };
  

  return (
    <div>
      <h1 className="text-center text-3xl py-4 font-serif">Todoist</h1>
      <form
        onSubmit={handleAddTodo}
        className="mx-auto relative w-11/12 lg:w-3/5"
      >
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
      <Todos todo={todo}></Todos>
      <Footer></Footer>
    </div>
  );
};

export default Home;
