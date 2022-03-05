import React, { useEffect, useState } from "react";
import getUserTodo from "../Service";
import ToDoTable from "./UserListTable";

const ListPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse([localStorage.getItem("todos")])
      : []
  );

  useEffect(() => {
    if (!localStorage.getItem("todos")) {
      const toDoList = () => {
        getUserTodo().then((data) => {
          setLoading(false);
          localStorage.setItem("todos", JSON.stringify(data.data));
          setTodos(data.data);
        });
      };
      toDoList();
    } else setLoading(false);
  }, [todos]);

  return (
    <>
      {!isLoading ? (
        <ToDoTable fetchedData={todos} todos={todos} />
      ) : (
        <h1>Empty</h1>
      )}
    </>
  );
};

export default ListPage;
