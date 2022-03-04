import React from "react";

const ToDoTable = ({ fetchedData }) => {
  return (
    <div className="mainTodoDiv">
      <div className="tableListText">
        <h1>ToDo List</h1>
      </div>
      <div className="tableDiv">
        <table cellSpacing="30" className="todoTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {fetchedData.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.userId}</td>
                  <td>{item.title}</td>
                  <td>{JSON.stringify(item.completed)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ToDoTable;
