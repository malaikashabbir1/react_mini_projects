import React from 'react'
import Card from './components/Card'

const  props = () => {
  return (
    <>
    
    <div className='parent'>
      <Card user= "Usman" age= {21.5} university =  'UMT' img = "https://i.pinimg.com/originals/54/25/fb/5425fb312bd4b690e6a8096267ff0c12.jpg" />
      <Card user= "Malaika" age= {23} university =  'UAF' img = "https://i.pinimg.com/736x/b0/3d/69/b03d69b9ccdd6caa9904264057ec8f84.jpg" />
    </div>
    </>
  )
}

export default  props 