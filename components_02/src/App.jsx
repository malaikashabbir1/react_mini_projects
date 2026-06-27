import React from 'react'
import card from './components/card'
import navbar from './components/navbar';
import footer from './components/footer';


export const App = () => {
  const user =  "Shaheer Bin Danial"
  const age = 9;
  return (
    
    <>   
     {navbar()}
      <h1> {user}, his age is {age}.</h1>
      {card()}
     {footer()}
      
    </>

  )
}
