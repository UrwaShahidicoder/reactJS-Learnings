import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
   <div className="w-full h-screen duration-200" 
   style={{backgroundColor: color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
      <button onClick={()=>setColor("red")}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "red"}}>Red</button>
                <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "blue"}}>blue</button>
                <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "pink"}}>pink</button>
                <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "green"}}>green</button>
                <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "yellow"}}>yellow</button>
                <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "pink"}}>pink</button>
                <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "purple"}}>purple</button>
                <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "black"}}>black</button>
                <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "orange"}}>orange</button>
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "golden"}}>golden</button>
      </div>
    </div>
   </div>
  )
}

export default App
