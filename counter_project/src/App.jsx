import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter=10;
const increase=()=>{
  console.log("value added",counter);
  counter=counter+1;
}
const decrease=()=>{
  console.log("value decreased", counter)
  counter=counter-1;
}

  return (
    <>
      <h1>Chai and React</h1>
      <h2>Frequency Counter{counter}</h2>
      <button onClick={increase}>Increase{counter}</button>
      <br />
      <button onClick={decrease}>Decrease{counter}</button>
      
    </>
  )
}

export default App
