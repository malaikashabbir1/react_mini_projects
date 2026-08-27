import React, { useState } from 'react'
import Student from './Student'
import Child from './Child'
import { useFormState } from 'react-dom'


const App = () => {
  const [num1, setNum1] = useState()
  const [num2, setNum2] = useState()

  const [name, receivedName] = useState("")
  const [age, receivedAge] = useState()
  const [city, receivedCity] = useState("")

  function setName (name) {
    console.log("Name is: ", {name});
    receivedName(name);
  }

  function setAge (age) {
    console.log("Age is: ", {age});
    receivedAge(age);
  }

  function setCity (city) {
    console.log("City is: ", {city});
    receivedCity(city);
  }
  
  const [color, setColor] = useState("Pink")

  const [student, setStudent] = useState(["Mirha" , 5, "Baby"])

  const [siblings, setSiblings] = useState({ name: "Hassan", age: 32, country: "Ireland"})

  const [Siblings, setSiblingsFunc] = useState([
    {
      name: "Malaika",
      age: 23,
      city: "Faisalabad"
    },
    {
      name: "Hoorain",
      age: 21,
      city: "Lahore"
    }
  ])

  const newObj = [{
    name: "Ayesha",
    age: 22,
    city: "Islamabad"
  },
  {
    name: "Mirha",
    age: 5,
    city: "Karachi"
  },
  {
    name: "Arzish",
    age: 12,
    city: "Multan"
  }]

  const [babies, setBabies] = useState(["Ahmad", "Beenish", "Fiza", "Arfa"])


  return (
    <div>
      <button onClick={ () => {
        setBabies( [...babies, "Arzish", "Shaheer", "Mirha", "Hoorain"])
        }}> GET ARRAY UPDATED THROUGH SPREAD OPERATOR
      </button>
      <h5>UPDATED ARRAY</h5>
      {
        babies.map ( (baby,idx) => {
          return (
              <div key={idx}>
                <p>{baby}</p>
              </div>
          )
        })
      }



      <button onClick={ () => {
      setSiblingsFunc( [...Siblings, ...newObj])
    }}>Object's ARRAY updation through spread Operator </button>
    <h5>Siblings data's Data though Object's Array</h5>

    {
      Siblings.map ( (sib,idx) => {
        return (
          <>
            <div key={idx}>
              <p>{sib.name},  {sib.age},  {sib.city}</p>
            </div>
          </>
        )
      })
    }















    <button onClick={ () => {
      setStudent(["Arzish", 12, "Artist"])
    }}>Get the Student data through array</button>
    <h5>Student's Data</h5>

    { student.map ( (st,idx) =>  (
      <p key={idx}>{st}</p>
    ))}


    <button onClick={ () => {
      setSiblings({ name: "Khansa", age: 29, country: "Pakistan"})
    }}>Get the SIBLING data through Object</button>
    <h5>Siblings data's Data</h5>

    { Object.entries(siblings).map( ([key,value]) =>  (
      <p key={key}>{key}-{value}</p>
    ))}

   

















      {/* Here I pass the actual useState setter functions directly: */}
      <h1> use state without using normal function</h1>
      <Student 
        receivedName = {receivedName}
        receivedAge = {receivedAge}
        receivedCity = {receivedCity} />
        <h2>Data has been received.</h2> 

        
          <p>{name}</p>
          <p>{age}</p>
          <p>{city }</p>
      

      <button onClick={() => {
        setColor("Yellow")

      }}>Change the Color</button>
      <h2>{color}</h2>
       


      
      <button onClick={ () => {
        //______________useState with parent-child communication ______________________
          setName("HOORAIN");
      }}> CHANGE THE NAME </button>
      <h1>{name}</h1>
      







      <button onClick={ () => {
        //________________ USING FUNCTIONAL STATES ______________________
        setNum1( num1 => { return num1+1})
        setNum1( num1 => { return num1+1})
        setNum1( num1 => {return num1+1})
        console.log("The value of num1 is:", num1 );

        //________________ WITHOUT FUNCTIONAL STATES ______________________
        setNum2(num2+1)
        setNum2(num2+1)
        setNum2(num2+1)
        console.log("The value of num2 is:", num2 );
      }}>
        Increse the number for 3 times 
      </button>


    </div>
  )
}

export default App
