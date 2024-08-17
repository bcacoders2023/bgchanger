import { useState } from 'react'
import './App.css'

function App() {
  const[color, setColor]=useState("olive")
  return (
    <>
    <div className='w-full h-screen duration-150' 
    style={{background : color}}>
    <h1 className='flex justify-center '>Hello Welcome to the background Changer</h1>
      <div className='fixed flex flex-wrap justify-center bottom-11 inset-x-0 px-2 gap-3'>
        <div className='flex flex-wrap justify-center gap-2 shadow-lg bg-[red] px-3 py-2 rounded-3xl'>
          <button className='outline-none px-3 text-neutral-300' onClick={()=>setColor('red')}>Red</button>
        </div>
        <div className='flex flex-wrap justify-center gap-2 shadow-lg bg-[#0dd10d] px-3 py-2 rounded-3xl'>
          <button className='outline-none px-3 text-neutral-300' onClick={()=>setColor("green")}>Green</button>
        </div>
        <div className='flex flex-wrap justify-center gap-2 shadow-lg bg-[blue] px-3 py-2 rounded-3xl'>
          <button className='outline-none px-3 text-neutral-300'onClick={()=>setColor("blue")}>Blue</button>
        </div>
        <div className='flex flex-wrap justify-center gap-2 shadow-lg bg-[#e99a07] px-3 py-2 rounded-3xl'>
          <button className='outline-none px-3 text-neutral-300' onClick={()=>setColor("orange")}>orange</button>
        </div>
        <div className='flex flex-wrap justify-center gap-2 shadow-lg bg-[#696868] px-3 py-2 rounded-3xl'>
          <button className='outline-none px-3 text-neutral-300'onClick={()=>setColor("grey")}>gery</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
