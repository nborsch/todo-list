import React from 'react'
import './App.css'

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
    console.log(id)

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
        <section className="add-todo">
          <form action={addTodo} className="add-todo-form">
            <input name="todo" className="add-todo-input"></input>
            <button type='submit' className="add-todo-button">Add new todo</button>
          </form>
        </section>
        <section>
          <h3>Current tasks</h3>
          <ul>
            {getTodoElements()}
          </ul>
          <hr />
        </section>
        <section className='done-todos'>
          <h3>Done tasks</h3>
          <ul>
            {getCompletedElements()}
          </ul>
          <hr />
        </section>
      </main>
    </>
  )
}

export default App
