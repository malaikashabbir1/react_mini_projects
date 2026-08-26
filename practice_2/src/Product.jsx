import React from 'react'
import './app.css'

const Product = ({idx,data}) => {
    const {title,image, price,description,button} = data;
  return (
    <div>
        
        <img className='img_box' src= {image} alt="" />
        <h1>{title}</h1>
        <h1>ID: {idx+1}</h1>
        <h2>{price}</h2>
        <h3>{description}</h3>
        <button type="submit"> {button} </button>
    </div>
  )
}

export default Product