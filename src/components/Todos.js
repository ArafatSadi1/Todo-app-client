import React, { useEffect, useState } from "react";
import SingleTodo from "./SingleTodo";

const Todos = ({todo, setTodo}) => {

  const [allTodo, setAllTodos] = useState([]);
  useEffect(() => {
    fetch("https://dry-ocean-18385.herokuapp.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setAllTodos(data.filter((todo) => todo.complete !== true));
        setTodo(false)
      });
  }, [todo]);
  
  return (
    <div className="h-full relative">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-4/5 mx-auto my-8">
      {allTodo?.map((todo) => (
        <SingleTodo key={todo._id} todo={todo}></SingleTodo>
      ))}
    </div>
    </div>
  );
};

export default Todos;
