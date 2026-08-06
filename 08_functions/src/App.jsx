import React from 'react'
import './app.css'

const App = () => {

  const btnClick = () =>{
    console.log("Button is clicked.")
  }

  const mouseEntered = () =>{
    console.log("Mouse is Entered.")
  }

  const inputChanging = (val) => {
    console.log(" value: ", val);
  }

  const scrollingSpeed = (speed) =>{
    if(speed>0) {
      console.log("seedhaScrolling: ", speed)
    }
    else{
       console.log("ultaScrolling: ", speed)
    }
   
  }

  return (
    <div>
      <div onMouseMove={ (elem) =>{
        console.log("value", elem.value);
      }} className='box'>This is a box.</div>

      <div onWheel={ (elem) =>{
          scrollingSpeed(elem.deltaY)}}>
        <div className='page1'> Page1 </div>
        <div className='page2'> Page2 </div> 
        <div className='page3'> Page3 </div>
      </div>
      
      <h2>Hello! Shaheer</h2>
      <button  onMouseEnter={mouseEntered} onDoubleClick={btnClick}>Change User</button>
      <br />
      <br />
      <br />

      <input  onChange={ (elem) => {
        console.log(elem);
        console.log("Elem.Target: ", elem.target);
        console.log("Value: ", elem.target.value);
      }} 
      type="text" placeholder='Enter' />

      <button onMouseEnter = { function() {
        console.log("FUNCTION CALLING")
      }}>
        Explore the Functionalities
      </button>

      <br />
      <br />
      <br />

      <input onChange={ (elem) => {
        inputChanging(elem.target.value); 
      }}  
       type="text"  placeholder='Type Your City' />

      
      <button>
        Enter
      </button>

    </div>
  )
}

export default App