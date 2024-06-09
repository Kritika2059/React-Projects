import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  //let counter = 15

  const addValue = () => {
   console.log("clicked", counter);
  // counter = counter + 1
  // if(counter < 20)
  //   setCounter(counter + 1) //logic: value will increase upto 20 only
  setCounter(counter + 1)
  }

const decreaseValue = () => {
  console.log("clicked", counter)
  //counter = counter - 1
  // if(counter > 0)
  //   setCounter(counter - 1) //logic: value will decrease only down to zero
  setCounter(counter - 1)
}


  return (
    <>
      <h1>New counter App</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue} >Add Value</button>
      <br />
      <button onClick={decreaseValue} >decrease value</button> 
    </>
  )
}

export default App
