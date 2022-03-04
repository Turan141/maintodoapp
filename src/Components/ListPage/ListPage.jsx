import React, { useEffect, useState } from "react";
import getUserTodo from "../Service";
import ToDoTable from "./UserListTable";

const ListPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [todos, setTodos] = useState([...localStorage.getItem("todos")]);

  useEffect(() => {
    (function toDoList() {
      getUserTodo().then((data) => {
        setLoading(false);
        setTodos(data.data);
        localStorage.setItem("todos", JSON.stringify(data.data));
      });
    })();
  }, []);

  return <>{!isLoading ? <ToDoTable fetchedData={todos} /> : null}</>;
};

export default ListPage;
