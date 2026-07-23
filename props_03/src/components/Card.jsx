import React from 'react'

function Card( props) {
    
        console.log(props);
        console.log(props.user, props.age);
  return (
      <div className="card">
        <img src= {props.img} alt=""></img>
        <h1> { props.user } </h1>
        <h2>{props.age} </h2>
        <h4>{props.university}</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile </button>
      </div> 

  )
}

export default Card


