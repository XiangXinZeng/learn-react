import React, {useState} from 'react'

export default function CounterOne() {
  const [count, setCount] = useState(0)

  const addAmount = amount =>{
    setCount(prevCount => prevCount + amount)
  }

  return (
    <div>
      <h2>Counter App</h2>
      <div style ={{fontSize:30, fontWeight:"bold"}}>{count}</div>
      <button onClick ={()=>addAmount(1)}>increment</button>
      <button onClick ={()=>addAmount(-1)}>decrement</button>
      <button onClick ={()=>setCount(0)}>reset</button>
    </div>
  )
}
