import axios from 'axios'


const getUserTodo = function () {
  return axios
    .get('https://jsonplaceholder.typicode.com/todos')
    .catch((error) => {
      console.error(error)
    })
}

export default getUserTodo
