export default function TodoList(props){
    return (
        <section>
          <h3>Current todos</h3>
          <ul>
            {props.todoElements}
          </ul>
          <hr />
        </section>
    )
}