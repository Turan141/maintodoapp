import React, { useState, useEffect } from "react";
import Pagination from "../Pagination/Pagination";

const TodoList = ({ currentPosts, todos, setShouldRender }) => {
  const handleSubmit = () => {};
  return (
    <div className="mainTodoDiv">
      <div className="tableListText">
        <h1>ToDo List</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Insert ToDo task:
            <input />
          </label>
          <input type="submit" value="Add ToDo" />
        </form>
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
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td
                    onClick={(e) => {
                      let status = e.target;
                      status.innerHTML === "true"
                        ? (status.innerHTML = "false")
                        : (status.innerHTML = "true");
                    }}
                  >
                    {JSON.stringify(item.completed)}
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={(e) => {
                        let targetId =
                          e.target.parentNode.parentNode.childNodes[0]
                            .innerHTML;
                        for (let i = 0; i < todos.length; i++) {
                          if (+todos[i].id === +targetId) {
                            todos.splice(i, 1);
                            localStorage.setItem(
                              "todos",
                              JSON.stringify(todos)
                            );
                          }
                        }
                        // window.location.reload();
                        setShouldRender(true);
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

const ToDoTable = ({ fetchedData, todos, setShouldRender }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(4);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexofFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = fetchedData.slice(indexofFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <TodoList
        currentPosts={currentPosts}
        todos={todos}
        setShouldRender={setShouldRender}
      />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={fetchedData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default ToDoTable;
