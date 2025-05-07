import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)
  
 //let counter = 1
 const  addValue = () => {
  
  counter = counter + 1
  setCounter(counter + 1)
  console.log("Clicked", counter);
 }
 const removeValue = () => {
  setCounter (counter-1)
  console.log("Clicked", counter);
 }


  return (
    <>

      <h1>chai our react</h1>
      <h2>Counter Value:{counter} </h2>
      <button onClick={addvalue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    
    </>
  )
}

export default App
