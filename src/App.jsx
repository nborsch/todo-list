import React from 'react'
import './App.css'
import AddToDo from './components/AddToDo'
import TodoList from './components/TodoList'
import CompletedList from './components/CompletedList'

// counter for id uniqueness
let count = 0

function App() {

  const [allTodos, setAllTodos] =  React.useState([
    {
      text: "Task 1",
      status: true,
      id: 98
    },
    {
      text: "Task 2",
      status: true,
      id: 97
    }
  ])

  const todoCompleted = function(id){
    setAllTodos(prevAllTodos => {
      return prevAllTodos.map(prevToDo => {
        return prevToDo.id === id ? { ...prevToDo, status: true } : prevToDo
      })
    })
  }

  const todoFilter = allTodos.filter(todo => !todo.status)

  const completedFilter = allTodos.filter(todo => todo.status)

  function addTodo(formData){
    // get new todo text
    const newTodo = formData.get('todo')
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
    // update id count
    count++
  }

  return (
    <>
      <header>
        <h1>TODO list</h1>
      </header>
      <main>
        <AddToDo addTodo={addTodo} />
        <TodoList todoFilter={todoFilter} todoCompleted={todoCompleted}/>
        <CompletedList completedFilter={completedFilter}/>
      </main>
    </>
  )
}

export default App
