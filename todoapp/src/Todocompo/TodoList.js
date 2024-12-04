import React from 'react'

function TodoList(props) {
  return (
    <li className='listItem'>
        {props.item}
        <button className='d-btn' onClick={()=> {props.deleteTodo(props.index)}}>Delete</button>
    </li>
  )
}

export default TodoList