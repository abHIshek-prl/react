import React from 'react';
import './App.css'
import {useState} from 'react'

function App() {
  
  const [count,setcount] =useState(0)

    function addCount(){
      setcount(count+1)
    }

    function takeCount(){
      setcount(count-1)
    }

    function clrCount(){
      setcount(0)
    }

  return (
    <div className='App'>
     
      <p id='cuntr'>counter :{count} </p>
      <button id='btn' onClick={addCount} >Increment</button>
      <button id='btn' onClick={clrCount} >Reset</button>
      <button id='btn' onClick={takeCount} >Decrement</button>

    </div> 
  );  
   
}

export default App;
