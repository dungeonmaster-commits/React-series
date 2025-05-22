import { useState } from 'react'


function App() {
  const [color,setColor]=useState("pink")

  return (
    <>
      <div className='w-full h-screen duration-500'
      style={{backgroundColor:color}}
      >
        <div className='fixed flex flex-wrap justify-center bottom-13 inset-x-0 px-2'>
          <div className='flex flex-wrap bg-white px-3 py-3 rounded-2xl gap-3'>
            <button
             onClick={()=>setColor("red")}
             className='px-3 py-1 rounded-full text-white'
            style={{backgroundColor:"red"}}>Red</button>
            <button 
             onClick={()=>setColor("blue")}
            className='px-3 py-1 rounded-full text-white'
            style={{backgroundColor:"blue"}}>blue</button>
            <button  onClick={()=>setColor("orange")} className='px-3 py-1 rounded-full text-white'
            style={{backgroundColor:"orange"}}>orange</button>
            <button  onClick={()=>setColor("yellow")} className='px-3 py-1 rounded-full text-white'
            style={{backgroundColor:"yellow"}}>yellow</button>
            <button  onClick={()=>setColor("violet")} className='px-3 py-1 rounded-full text-white'
            style={{backgroundColor:"violet"}}>violet</button>
            <button  onClick={()=>setColor("black")} className='px-3 py-1 rounded-full text-white'
            style={{backgroundColor:"black"}}>black</button>
           
          </div>
        </div>
      </div>
    </>
  )
}

export default App
