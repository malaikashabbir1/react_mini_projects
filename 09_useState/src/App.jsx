import React, { useState } from 'react'
import './App.css'

const App = () => {
  
  const [num, setnum] = useState(10);
  const [array, setarray] = useState([10,20,30])


  function btnClick(){
    console.log("BtnClicked");

    setnum( num+2 );
    setarray([40,50,60]);
  }

  const [a, seta] = useState(0)

  function increaseNum() { 
    seta(prev => prev+1);
    };

  return (
    <div>
      <h1>{a}</h1>
      <button  onClick={increaseNum} className='btn1'>Increase</button>
      <button  onClick={ () => {
         seta(a-1);
      }} className='btn1'>Decrease</button>
      <h1>Value of A is {num}.</h1>
      <h1>Values in the array are: {array}</h1>
      <button className='btn1' onClick={btnClick}> Click </button>


    </div>
  )

}
export default App