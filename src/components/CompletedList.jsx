export default function DoneList(props){

  const completedElements = function(){
    return props.completedFilter.map(todo => {
      return (
        <li id={todo.id} key={todo.id} className='done-todos-todo'>
          {todo.text} 
        </li>
      )
    })
  }

  return (
      <section className='done-todos'>
        <h3>Completed todos</h3>
        <ul>
          {completedElements()}
        </ul>
      </section>
  )
}