import React from 'react'

export default function Todo({todo,toggleCompleted}) {
  return (
    <li>
      <input type="checkbox" checked={todo.completed} 
      onChange={()=>toggleCompleted(todo.id)}/><span>{todo.text}</span>
    </li>
  )
}
