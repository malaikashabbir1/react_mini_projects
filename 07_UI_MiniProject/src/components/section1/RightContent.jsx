import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log("PROPS",props);
  return (
    <div id="right" className=' bg-white h-full flex flex-nowrap overflow-x-auto gap-6 p-4 w-2/3 '>
        {props.users.map( function(elem, idx){
          
          console.log("IMAGE: ", elem.img);
          return (
            <RightCard  key ={idx} id={idx}   img={elem.img} color={elem.color} tag={elem.tag} />
          );
        })}
    </div>
  )
}

export default RightContent