import React from 'react'

const Modal3 = ({isOpened, onClosed, title, children}) => {
    if(!isOpened) {
        return null;
    }
  return (
    <div>
        <div>
            Title: {title}
            {children}
        </div>
        <div>
            <button onClick={() =>{
                console.log("MODAL2 IS CLOSED.")
                onClosed();
            }}>
                CLOSE THE MODAL
            </button>
        </div>
    </div>
  )
}

export default Modal3