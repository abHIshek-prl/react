import React from 'react';
import './App.css'
import {useState} from 'react'

function App() {
  
  const [count,setcount] =useState(0)

    function addCount(){
      setcount(count+1)
    }

    function rmvCount(){
      setcount(count-1)
    }

    function clrCount(){
      setcount(0)
    }

  return (
    <div className='main bg-cyan-950 h-screen w-screen flex justify-center items-center'>
      <div className='App h-1/2 w-1/3 rounded-t-full bg-cyan-950 text-center shadow-2xl shadow-orange-200'>
      
        <div className='disp h-28 flex justify-center items-center text-sky-400 font-bold'>
          <p id='cuntr'>counter : {count} </p>
        </div>

        <div className='btns flex justify-center gap-16 h-32 items-center font-bold'>
          <div className='ad text-green-400 '><button id='btn' onClick={addCount} >Increment</button></div>
          <div className='re text-rose-600'><button id='btn' onClick={clrCount} >Reset</button></div>
          <div className='de text-yellow-300'><button id='btn' onClick={rmvCount} >Decrement</button></div>
        </div>
        

      </div> 
    </div>
  );  
   
}

export default App;

