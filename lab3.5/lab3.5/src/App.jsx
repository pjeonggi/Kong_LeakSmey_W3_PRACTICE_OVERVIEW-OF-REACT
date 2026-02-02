import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function TodoItem({ task }) {
  return <li>{task}</li>
}

function App() {
  const tasks = ["Learn JSX", "Create Components", "Master State", "jalja"];

  return (
    <>
      <div>
        <h1>My Task List</h1>
        <p>Total tasks: {tasks.length}</p>
        <ul>
          <TodoItem task={tasks[0]} />
          <TodoItem task={tasks[1]} />
          <TodoItem task={tasks[2]} />
          <TodoItem task={tasks[3]} />
        </ul>
      </div>
    </>
  )
}

export default App
