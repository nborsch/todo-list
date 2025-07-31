export default function AddToDo(props){
    return (
      <section className="add-todo">
        <form action={props.addTodo} className="add-todo-form">
          <input name="todo" className="add-todo-input"></input>
          <button type='submit' className="add-todo-button">Add new todo</button>
        </form>
      </section>
    )
}