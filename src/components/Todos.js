import React, { useEffect, useState } from "react";
import SingleTodo from "./SingleTodo";

const Todos = () => {
  const [allTodo, setAllTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/todos")
      .then((response) => response.json())
      .then((data) => {
        setAllTodos(data);
      });
  }, [allTodo]);
  return (
    <div className="grid grid-cols-3 gap-4 w-4/5 mx-auto my-8">
      {allTodo.map((todo) => (
        <SingleTodo key={todo._is} todo={todo}></SingleTodo>
      ))}
    </div>
  );
};

export default Todos;
