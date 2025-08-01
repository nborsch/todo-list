import React from 'react'
import './App.css'
import AddToDo from './components/AddToDo'
import TodoList from './components/TodoList'
import DoneList from './components/DoneList'

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

  function todoCompleted(id){
    setAllTodos(prevAllTodos => {
      return prevAllTodos.map(prevToDo => {
        return prevToDo.id === id ? { ...prevToDo, status: true } : prevToDo
      })
    })
  }

  const todoElements = function (){
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

  const completedElements = function(){
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
        <TodoList todoElements={todoElements()} />
        <DoneList completedElements={completedElements()}/>
      </main>
    </>
  )
}

export default App
