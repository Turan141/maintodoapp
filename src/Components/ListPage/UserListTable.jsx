import React, { useState, useEffect } from "react";
import Pagination from "../Pagination/Pagination";

const TodoList = ({ currentPosts }) => {
  function deleteRow(e) {
    console.log(e);
    let i;
    // document.getElementById("myTable").deleteRow(i);
  }

  return (
    <div className="mainTodoDiv">
      <div className="tableListText">
        <h1>ToDo List</h1>
      </div>
      <div className="tableDiv">
        <table cellSpacing="30" className="todoTable" id="myTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>Completed</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.userId}</td>
                  <td>{item.title}</td>
                  <td>{JSON.stringify(item.completed)}</td>
                  <td>
                    <button
                      type="button"
                      onClick={(e) => {
                        let i = e.target.parentNode.parentNode.rowIndex;
                        return document.getElementById("myTable").deleteRow(i);
                      }}
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const ToDoTable = ({ fetchedData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(4);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexofFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = fetchedData.slice(indexofFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <TodoList currentPosts={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={fetchedData.length}
        paginate={paginate}
      />
    </>
  );
};

export default ToDoTable;
