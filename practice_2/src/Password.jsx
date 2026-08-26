import React from 'react'

const Password = ({isShow, setIsShow }) => {
    return (
    <div>
        <input 
            type= { isShow ? "text" : "password"} 
            placeholder='Enter your Password'
        />
        <button onClick={ () => {
            // this is for changing the state
            // React re-renders the component, and your other code reacts to the new state.
            //The onClick function toggles the isShow state, and that state controls both password visibility and the SHOW/HIDE button text.
            setIsShow(!isShow)
        }} >
            {isShow ? "HIDE" : "SHOW"}
        </button>
    </div>
  )
}

export default Password