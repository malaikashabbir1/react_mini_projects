

const Modal = ({isOpen, onClose, title, children}) => {

    if(!isOpen) {
        return null;
    }

  return (
   <>
    <div>
        <div>
            <p>Title: {title}</p>
        </div>
        <div>
            {children}
        </div>
        <div>
            <button onClick={() => {
                console.log("Modal is closed.")
                onClose();
            }}> 
                Close Modal
            </button>
        </div>
    </div>

    

   </>
  )
}

export default Modal