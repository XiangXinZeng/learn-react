import React, { useState, useRef, useEffect } from "react"
import {v4} from 'uuid'

import Todo from "./Todo"

const TODOS="todos"

export default function TodoList() {
  const [todos, setTodos] = useState([])
  const incompletedTasks = todos.filter(todo=>!todo.completed)

  const inputRef = useRef(null)

  useEffect(() => {
   const tasks =JSON.parse(localStorage.getItem(TODOS))
   if(tasks) setTodos(tasks)

  }, [])

  useEffect(() => {
    localStorage.setItem(TODOS,JSON.stringify(todos))
  }, [todos])

  const handleSubmit = e=>{
    e.preventDefault()
    const task= inputRef.current.value
    if(!task) return
    setTodos([...todos, {id:v4(), text:task, completed:false}])
    inputRef.current.value=""
    inputRef.current.focus()
  }

  const toggleCompleted = id=>{
    setTodos(todos.map(todo=>{
      if(todo.id===id) return {...todo, completed:!todo.completed}
      return todo
    }))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" ref = {inputRef}/>
        <button type="submit">Add Todo</button>
      </form>
     
      <ul style={{ listStyle: "none" }}>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} toggleCompleted={toggleCompleted}/>
        ))}
      </ul>
    
      <p> {incompletedTasks.length} tasks left</p>
      <button onClick = {()=>setTodos(incompletedTasks)}>Clear completed tasks</button>
    </>
  )
}
