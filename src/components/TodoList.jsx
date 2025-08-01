export default function TodoList(props){

  const todoElements = function (){
    return props.todoFilter.map(todo => {
      return (
        <li id={todo.id} key={todo.id}>
          <form action={() => props.todoCompleted(todo.id)}>
            <button type="submit" className="done-todo-button">
              done
            </button> {todo.text}
          </form>
        </li>
      )
    })
  }


  return (
      <section>
        <h3>Current todos</h3>
        <ul>
          {todoElements()}
        </ul>
        <hr />
      </section>
  )
}