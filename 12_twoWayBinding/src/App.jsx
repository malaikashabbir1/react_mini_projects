//  _____________________________ TWO WAY BINDING  _____________________________ 


import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [title, setTitle] = useState('');


  function formHandler (e) {
    // preventing its reloading
    e.preventDefault();
    console.log("Form Submitted by: ", title);
    // setting value so that input looks clear
    setTitle('')
  }
 
  return (
    <div>
        <h1>USER FORM</h1>
        <form onSubmit ={ (e) => {
          formHandler(e)
        }} >
          <input className='input' 
            value={title} 
            type="text" 
            placeholder='Enter Your Name' 
            // for two way binding
            onChange={ (e) => {
              setTitle(e.target.value);
          }}/>
          <button>Enter</button>
        </form>
    </div>
  )
}

export default App