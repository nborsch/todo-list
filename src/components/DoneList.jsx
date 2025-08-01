export default function DoneList(props){
    return (
        <section className='done-todos'>
          <h3>Done tasks</h3>
          <ul>
            {props.completedElements}
          </ul>
        </section>
    )
}