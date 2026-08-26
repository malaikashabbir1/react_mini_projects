

const Modal = ({title, children}) => {

  return (
   <>
    <div>
        <div>
            <p>Title: {title}</p>
        </div>
        <div>
            {children}
        </div>
    </div>
   </>
  )
}

export default Modal