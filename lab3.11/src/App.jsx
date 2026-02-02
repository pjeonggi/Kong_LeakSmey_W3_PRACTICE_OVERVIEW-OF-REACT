import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function TodoItem({text,onRemove}){
  return(
    <li>
       {text} <button onClick={onRemove}>delete</button>
    </li>
   
  );
}
function App() {
  const [list,setList] = useState(["Task 1"]);
  const [input,setInput] = useState("");  

  const addTask = () =>{
    //update list here
    setList([...list,input])
    setInput("");
  }
  const deleleTask = (index)=>{
  //Filter the list here
  setList(list.filter((_, i) => i !== index))
  }
  return (
    <>
      <div>
        <input onChange={(e) =>setInput(e.target.value)} value={input}/>
        <button onClick={addTask}>Add</button>
        {list.map((item,index)=>
           <TodoItem 
        key={index} text={item} onRemove={()=>deleleTask(index)}/>

        )}
        
      </div>
    </>
  )
}

export default App