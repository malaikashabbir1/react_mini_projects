import React from 'react'

// all elem has been passed from App.jsx
const Card = (props) => {
  return (
    <div>
         {/* target means where to open in browser. here _blank means open in new tab */}
        <a href= {props.elem.url} target='_blank'>
          <div className='h-40 w-44 overflow-hidden bg-white rounded-xl'>
          <img className='h-full w-full object-cover' src={props.elem.download_url} alt="" />
          </div>
            <h2 className='font=bold text-lg'>{props.elem.author}</h2>
        </a>
    </div>
  )
}

export default Card