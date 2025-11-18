import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(2)




  const addValue = () => {
    if(counter>=20){
      setCounter(counter);
    }

    else {setCounter(counter+1);}
    
  }
  const removeValue= () =>{
    
    if(counter<1){
      counter=0;
      setCounter(counter);
    }

    else {setCounter(counter-1);}
  }


  return (
    <>
      <h1>hey! Man.</h1>
      <h3>Counter value {counter}</h3>
      <button
        onClick={addValue}
      >Increased Value {counter}</button>
      <br /> <br />
      <button
      onClick={removeValue}
      >Decrease value{counter}</button>
    </>
  )
}

export default App
