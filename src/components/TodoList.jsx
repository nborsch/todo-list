export default function TodoList(props){
    return (
        <section>
          <h3>Current tasks</h3>
          <ul>
            {props.getTodoElements()}
          </ul>
          <hr />
        </section>
    )
}