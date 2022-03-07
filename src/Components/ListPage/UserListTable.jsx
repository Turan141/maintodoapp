import React, { useState, useEffect, useRef } from 'react'
import Pagination from '../Pagination/Pagination'


const TodoList = ({ currentPosts, todos, setShouldRender }) => {
  const [ id, setId ] = useState(todos.length - 1)
  const todoInputRef = useRef('')
  useEffect(() => {
    setId(todos.length - 1)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    let formSubmit = {
      userId: 999,
      id: id,
      title: todoInputRef.current.value,
      completed: false,
    }
    todos.unshift(formSubmit)
    localStorage.setItem('todos', JSON.stringify(todos))
    setShouldRender(true)
    setId((prevId) => prevId + 1)
  }
  return (
    <div className="mainTodoDiv">
      <div className="tableListText">
        <h1>ToDo List</h1>
      </div>
      <div className="formDiv">
        <form onSubmit={handleSubmit}>
          <label>
            Insert ToDo task:
            <input ref={todoInputRef} />
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
                      for (let i = 0; i < todos.length; i++) {
                        if (
                          +todos[i].id ===
                          +e.target.parentNode.firstChild.innerHTML
                        ) {
                          todos[i].completed === true
                            ? (todos[i].completed = false)
                            : (todos[i].completed = true)
                        }
                        localStorage.setItem('todos', JSON.stringify(todos))
                        setShouldRender(true)
                      }
                    }}
                  >
                    {JSON.stringify(item.completed)}
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={(e) => {
                        let targetId =
                          e.target.parentNode.parentNode.childNodes[0].innerHTML
                        for (let i = 0; i < todos.length; i++) {
                          if (+todos[i].id === +targetId) {
                            todos.splice(i, 1)
                            localStorage.setItem('todos', JSON.stringify(todos))
                          }
                        }
                        // window.location.reload();
                        setShouldRender(true)
                      }}
                    >
                      X
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const ToDoTable = ({ fetchedData, todos, setShouldRender }) => {
  const [ currentPage, setCurrentPage ] = useState(1)
  const [ postsPerPage, setPostPerPage ] = useState(4)
  const indexOfLastPost = currentPage * postsPerPage
  const indexofFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = fetchedData.slice(indexofFirstPost, indexOfLastPost)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

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
  )
}

export default ToDoTable
