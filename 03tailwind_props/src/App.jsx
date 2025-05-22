import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/card'

function App() {
  const [count, setCount] = useState(0)
  const obj={
    name:"hitesh",
    age:24
  }
  const array=[1,2,3,4]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Cards channelname="chai aur code" myobj={obj} myarray={array}/>
      <Cards channelname="code with nik"/>
            
    </>
  )
}

export default App
