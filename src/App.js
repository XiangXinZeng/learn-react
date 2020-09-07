import React from 'react';
import './App.css';

import TodoList from './todos/TodoList';
import CounterOne from './counter/CounterOne';


function App() {
  return (
    <div>
      <TodoList />
      <hr />
      <CounterOne />
    </div>
  );
}

export default App;
