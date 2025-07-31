import React from 'react'
import './App.css'
import AddToDo from './components/AddToDo'
import TodoList from './components/TodoList'
import DoneList from './components/DoneList'

function App() {

  const [count, setCount] = React.useState(0)

  const [allTodos, setAllTodos] =  React.useState([
    {
      text: "Task 1",
      status: false,
      id: 98
    },
    {
      text: "Task 2",
      status: false,
      id: 97
    }
  ])

  function todoCompleted(id){
    setAllTodos(prevAllTodos => {
      return prevAllTodos.map(prevToDo => {
        return prevToDo.id === id ? { ...prevToDo, status: true } : prevToDo
      })
    })
  }

  function getTodoElements(){
    return allTodos.filter(todo => !todo.status)
    .map(todo => {
      return (
        <li id={todo.id} key={todo.id}>
          <form action={() => todoCompleted(todo.id)}>
            <button type="submit" className="done-todo-button">
              done
            </button> {todo.text}
          </form>
        </li>
      )
    })
  }

  function getCompletedElements(){
    return allTodos.filter(todo => todo.status)
      .map(todo => {
      return (
        <li id={todo.id} key={todo.id} className='done-todos-todo'>
          {todo.text} 
        </li>
      )
    })
  }

  function addTodo(formData){
    // get new todo text
    const newTodo = formData.get('todo')
    // update id count
    setCount(prevCount => prevCount + 1)
    // update array of todo objects
    setAllTodos(prevTodos => {
      return [
        ...prevTodos,
        {
          text: newTodo,
          status: false,
          id: count
        }
      ]
    })
  }

  return (
    <>
      <header>
        <h1>TODO list</h1>
      </header>
      <main>
        <AddToDo addTodo={addTodo} />
        <TodoList getTodoElements={getTodoElements} />
        <DoneList getCompletedElements={getCompletedElements}/>
      </main>
    </>
  )
}

export default App
