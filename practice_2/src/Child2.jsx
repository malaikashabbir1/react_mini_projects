import React, { useState } from 'react'



const Child2 = ({add, getName, getArray, getObject, getArrayObject, getSingleObject}) => {
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [name, setName] = useState('')
    const array = ["Malaika", 23, "BSSE","Faisalabad"]
    const user = {
        name: "Hoorain Hassan",
        age: "2.5",
        fvrt_color: "Pink",
        country: "Ireland"
    }

    const users = [
  {
    name: "Malaika",
    age: 23,
    degree: "BSSE",
    city: "Faisalabad"
  },
  {
    name: "Hoorain",
    age: 22,
    degree: "BSCS",
    city: "Lahore"
  },
  {
    name: "Ayesha",
    age: 24,
    degree: "BBA",
    city: "Islamabad"
  },
  {
    name: "Sara",
    age: 21,
    degree: "BSIT",
    city: "Karachi"
  }
];

    function handleSubmit () {
        console.log("NUM1 IS: ", num1);
        console.log("NUM2 IS: ", num2);
    }

    function submitName() {
        console.log(name)
    }
  return (
    <div>
        <input type="number" placeholder='Enter Num1' 
            value={num1}
            onChange={(e) => {
                setNum1(e.target.value)
            }} 
        />

        <input type="number" placeholder='Enter Num2' 
            value={num2}
            onChange={(e) => {
                setNum2(e.target.value)
            }} 
        />

        <button onClick={() => {
            handleSubmit()
            add(Number(num1), Number(num2))
        }}>SEND VALUES FOR ADDITION</button>

        <input type="text" value={name}
        onChange={(e) => {
            setName(e.target.value)
        }}/>

        <button onClick={ () => {
            submitName()
            getName(name)
        }}>SEND NAME</button>


        

        <button
            onClick={() =>{
                getArray(array)
            }}> GET ARRAY 
        </button>

        <button onClick={ () => {
            getObject(user)
            }}> GET USER's OBJECT 
        </button>

            
        <button onClick={ () => {
            getArrayObject(users)
            }}> GET USER's ARRAY OF OBJECT
        </button>

        {
            users.map( (user,idx) => {
                return (
                    <button onClick={ () => {
                        console.log("Data sent.")
                        getSingleObject(user,idx)
                    }}>SEND DATA</button>
                )
            })
        }
        
    </div>
  )
}

export default Child2