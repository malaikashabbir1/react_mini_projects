import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {
  const users = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1661768380995-f459ff60add6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color: 'royalblue',
      tag:'Satisfied'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1663047274842-70bc0692969e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color: 'teal',
      tag:'Underserved'
    }, 
    {
      img: 'https://plus.unsplash.com/premium_photo-1682348124674-6fe39b73302e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color: 'orange',
      tag:'Underbanked'
    }
    , 
    {
      img: 'https://images.unsplash.com/photo-1579389083395-4507e98b5e67?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     intro: '',
     color: 'pink',
      tag:'Underprivileged'
    },
    {
      img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color: 'lightseagreen',
      tag: 'Underobservance'
    }
    ]
  return (
    <div className='h-screen w-full'> 
      <Section1  users = {users}/>
      <Section2 />
    </div>
  )
}

export default App
