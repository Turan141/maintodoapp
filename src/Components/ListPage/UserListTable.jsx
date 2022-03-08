import React, { useState, useEffect, useRef } from 'react'
import Pagination from '../Pagination/Pagination'


const ToDoListMap = ({ currentPosts, todos, setShouldRender }) => {
  return (
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
                    +todos[i].id === +e.target.parentNode.firstChild.innerHTML
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
  )
}

const TodoList = ({
  currentPosts,
  todos,
  setShouldRender,
  showUserId,
  setShowUserId,
}) => {
  const [ id, setId ] = useState(todos.length - 1)
  const todoInputRef = useRef('')
  useEffect(() => {
    setId(todos.length - 1)
  }, [])
  const handleChange = (e) => {
    setShowUserId(e.target.value)

  }

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
    todoInputRef.current.value = ''
  }
  return (
    <div className="mainTodoDiv">
      <div className="tableListText">
        <h1>ToDo List</h1>
      </div>
      <div className="formDiv">
        <select name="userIds" id="userIds" onChange={handleChange}>
          <option value="All">Admin</option>
          <option value="1">User1</option>
          <option value="2">User2</option>
          <option value="3">User3</option>
          <option value="4">User4</option>
          <option value="5">User5</option>
          <option value="6">User6</option>
          <option value="7">User7</option>
          <option value="8">User8</option>
          <option value="9">User9</option>
          <option value="10">User10</option>
        </select>
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
          {showUserId === 'All' ? (
            <ToDoListMap
              currentPosts={currentPosts}
              todos={todos}
              setShouldRender={setShouldRender}
            />
          ) : (
            <ToDoListMap
              currentPosts={currentPosts.filter(
                (todo) => +todo.userId === +showUserId
              )}
              todos={todos}
              setShouldRender={setShouldRender}
            />
          )}
        </table>
      </div>
    </div>
  )
}

const ToDoTable = ({ fetchedData, todos, setShouldRender }) => {
  const [ showUserId, setShowUserId ] = useState('All')
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
        showUserId={showUserId}
        setShowUserId={setShowUserId}
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
