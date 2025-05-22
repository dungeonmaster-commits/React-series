import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


      function App() {
  // let counter=10;
  const [counter,setCounter]=useState(15)
 

const increase=()=>{
  
  if(counter>=20){
    return
  }
  setCounter((prevCounter)=>prevCounter+1);
  setCounter((prevCounter)=>prevCounter+1);
  setCounter((prevCounter)=>prevCounter+1);
  setCounter((prevCounter)=>prevCounter+1);
}
const decrease=()=>{
  
  if(counter<=0) return;
  setCounter(counter-1)
}

  return (
    <>
      <h1>Chai and React||Nikhil</h1>
      <h2>Frequency Counter{counter}</h2>
      <button onClick={increase}>Increase{counter}</button>
      <br />
      <button onClick={decrease}>Decrease{counter}</button>
      
    </>
  )
}


 

export default App
