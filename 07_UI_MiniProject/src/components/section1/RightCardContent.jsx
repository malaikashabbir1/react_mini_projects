import React from 'react'

const RightCardContent = (props) => {
  return (
   <div className='absolute z-10 top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center text-xl font-semibold'>{props.id+1}</h2>
            
            <div>
                <p className='text-xl text-shadow-xs leading-strict text-white  mb-5 text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repudiandae mollitia.</p>
                <div className='flex justify-between'>
                    <button style = {{backgroundColor: props.color}} className= 'rounded-full px-4 py-2 text-white'>{props.tag}</button> 
                    <button style = {{backgroundColor: props.color}} className=' rounded-full px-4 py-2 text-white'><i className="ri-arrow-right-line"></i></button>   
                </div>  
            </div>
    </div>
  )
}

export default RightCardContent