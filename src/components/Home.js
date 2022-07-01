import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import Footer from "./Footer";
import Todos from "./Todos";
import { format } from "date-fns";

const Home = ({ selectedDay }) => {
  const [todo, setTodo] = useState(false);
  const todoValue = useRef();
  const handleAddTodo = (e) => {
    e.preventDefault();
    const task = todoValue.current.value;
    const currentDate = format(selectedDay, "PPp");
    if (task) {
      fetch("https://dry-ocean-18385.herokuapp.com/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task, date: currentDate }),
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
    <div className="w-full h-full bg-lime-200">
      <h1 className="text-center text-3xl py-4 font-serif">Todoist</h1>
      <form
        onSubmit={handleAddTodo}
        className="mx-auto relative w-11/12 lg:w-3/5 pb-3"
      >
        <input
          ref={todoValue}
          name="todoInput"
          type="text"
          placeholder="Enter a task"
          className="input input-bordered input-primary w-full p-4 text-lg rounded-full"
        />
        <input
          type="submit"
          value="Add"
          className="btn btn-primary absolute right-0 rounded-full"
        />
      </form>
      <Todos todo={todo} setTodo={setTodo}></Todos>
      <Footer></Footer>
    </div>
  );
};

export default Home;
