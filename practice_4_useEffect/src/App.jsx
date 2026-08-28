import React, { useEffect, useState } from 'react'


const App = () => {

  const [num1, setNum] = useState(0)
  const [num2, setNum2] = useState(0)
  

  // ____________simple mounting it will run after every render
  // useEffect ( function () {
  //   console.log('useEffect is running...')
  // })

  // ______________ passed the dependancy it will now run only once 
  // useEffect ( function () {
  //   console.log('useEffect is running...') 
  // } ,[])

  //_______________ passed the dependancy, now it is dependant on num1
  //now when the state of num1 will change, useEffect function will run
  
  // useEffect ( function () {
  //   console.log('useEffect is running...') ,[num1]
  // })

  function num1Changing (){
    console.log("num1 HAS CHANGED.")
  }
  
  function num2Changing (){
    console.log("num2 HAS CHANGED.")
  }

  // calling another function and making this useEffect dependant on num1
  useEffect( () => {
    num1Changing()
  }, [num1])

  return (
    <div>
      <h1>Num1: {num1}</h1>
      <h1>Num2: {num2}</h1>
      <button onClick={() => {
        setNum(num1+1)
      }} > INCREASE THE NUMBER1</button>

      <br /> <br /> <br />
      <button onClick={() => {
        setNum2(num2+10) }
      }>  
        INCREASE THE NUMBER2
      </button>
    </div>
  )
}

export default App