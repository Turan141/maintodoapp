import React, { useEffect, useState } from 'react'
import getUserTodo from '../Service'
import ToDoTable from './UserListTable'


const ListPage = () => {
  const [ shouldRender, setShouldRender ] = useState(true)
  const [ isLoading, setLoading ] = useState(false)
  const [ todos, setTodos ] = useState(
    localStorage.getItem('todos')
      ? JSON.parse([ localStorage.getItem('todos') ])
      : []
  )
  const json = JSON.parse(localStorage.getItem('todos'))

  useEffect(() => {
    if (json) {
      if (shouldRender) {
        setTodos(json)
        setShouldRender(false)
      }
    } else {
      const toDoList = () => {
        getUserTodo().then((data) => {
          setLoading(false)
          localStorage.setItem('todos', JSON.stringify(data.data))
          setTodos(data.data)
        })
      }
      toDoList()
    }
  }, [ json ])
  return (
    <>
      {!isLoading ? (
        <ToDoTable
          fetchedData={todos}
          todos={todos}
          setShouldRender={setShouldRender}
        />
      ) : (
        <h1>Empty</h1>
      )}
    </>
  )
}

export default ListPage
