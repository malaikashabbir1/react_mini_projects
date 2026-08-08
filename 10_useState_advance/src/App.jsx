import React, { useState } from 'react';
import './App.css'

const App = () => {

  const [num, setnum] = useState({name : "Malaika", age: 23, city: "FSD", gender: "Female", fvrtFood : "KFC" });

  const [arr, setarr] = useState([1,2,3,4,5]);

  const [n, setn] = useState(0)


  
 
  let btnClick = () => {


  
    setnum(  (num) =>  ( {...num, name: "Abiha", age: 22.5 } )

    );

    // ____________________________
    let newArr = [...arr];
    newArr.push(89)
    setarr(newArr);


    setn( prev => prev+5);
    setn( prev => { return  prev+5});
    setn( prev => { return  prev+5});


  }

  let btnDoubleClick = () => {
    setnum( 
      (num) => 
         ({ ...num , name:"Shaheer", city: "Rawalpindi", gender:"Male", age: 9.5})
    );
  }

  
  return (
    <div> 
      <h3>hheheheheh</h3>
      <h1>{num.name} , {num.age}, {num.city}, {num.gender}, {num.fvrtFood}</h1>
      <h1>{arr}</h1>
      <h1>{n}</h1>
        <button className='btn' onClick={btnClick} onDoubleClick={btnDoubleClick}>CLICK</button>
    </div>  )

}
export default App