import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'
function NewElement(){
  return (
    <div>
      <h1>hello world///</h1>
    </div>
  )
}


// const reactElement={
//   type:"a",
//   props:{
//       href:"https://google.com",
//       target:"_blank"
//   },
//   children:"click me to visit google"
// }
const AnotherElem=(
  <a href="https://google.com">Visit Google</a>
)
const variable="nikhil";//evaluted expression
const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank',},
  'click me visit google',
  variable
)

createRoot(document.getElementById('root')).render(
  // NewElement()
  // App()
  // reactElement (object wala)will give error

  // AnotherElem
  // reactElement
  <App/>
  
)
