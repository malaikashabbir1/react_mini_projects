import React from 'react'

const Child = ({onLoad,myLove}) => {
  return (
    <div>
        <button onClick={onLoad} > START LOADING </button>
        <button onClick={() => {
            myLove(2,2)
        }} >MY LOVE FOR YOU</button>
        <button type='submit' disabled> MUHABBAT </button>
    </div>
  )
}
export default Child