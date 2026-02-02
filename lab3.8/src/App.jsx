import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [list, setList] = useState(["Task 1"]);
  const [input, setInput] = useState("");
  const addTask = () => {
    setList([...list, input]);
  };
  return (
    <>
      <div>
        <input onChange = {(e)=>setInput(e.target.value)}/>
        <button onClick={addTask}>Add</button>
      </div>
    </>
  )
}

export default App
