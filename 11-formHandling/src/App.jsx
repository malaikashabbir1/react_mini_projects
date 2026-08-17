import React from 'react'
import './App.css'

const App = () => {

  function formHandler (e) {
    e.preventDefault();
    console.log("Form Submitted.")
  }
 
  return (
    <div>
        <h1>USER FORM</h1>
        <form onSubmit ={ (e) => {
          formHandler(e)
        }} >
          <input className='input' type="text" placeholder='Enter Your Name' onChange={ (e) => {
            console.log(e.target.value)
          }}/>
          <button>Enter</button>
        </form>
    </div>
  )
}

export default App