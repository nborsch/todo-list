export default function TodoList(props){
    return (
        <section>
          <h3>Current tasks</h3>
          <ul>
            {props.todoElements}
          </ul>
          <hr />
        </section>
    )
}