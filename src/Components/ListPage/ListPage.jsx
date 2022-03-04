import React, { useEffect, useState } from "react";
import getUserTodo from "../Service";
import ToDoTable from "./UserListTable";

const ListPage = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (function toDoList() {
      getUserTodo().then((data) => {
        console.log(data.data);
        setFetchedData(data.data);
        setLoading(false);
      });
    })();
  }, []);

  return <>{!isLoading ? <ToDoTable fetchedData={fetchedData} /> : null}</>;
};

export default ListPage;
