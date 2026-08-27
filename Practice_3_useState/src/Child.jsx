import React from 'react'

const Child = ({name,setName,setAge,setCity}) => {
  return (
    <div>
        <h1>Name is : {name}</h1>
        <button onClick={ () => {
            setName ("Malaika")
            setAge(23)
            setCity("Faisalabad")
        }}>Send data to parent</button>
    </div>
  )
}

export default Child