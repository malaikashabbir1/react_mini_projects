import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
     <div className='h-[450px] w-65 overflow-hidden shrink-0  relative bg-white rounded-4xl '>
        
        <img  className='h-full w-full object-cover' src={props.img} alt="girl" />
        <RightCardContent  id = {props.id} color = {props.color} tag ={props.tag}/>

        
    </div>
    
  )
}

export default RightCard