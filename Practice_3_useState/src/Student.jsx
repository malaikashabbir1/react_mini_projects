import React from 'react'

const Student = ({receivedName,  receivedAge, receivedCity}) => {
  return (
    <div>
        <button
            onClick={() => {
                receivedName("Shaheer")
                receivedAge(9.5)
                receivedCity("Rawalpindi")
            }}    
            >Send Students's data to parent </button>

    </div>
  )
}

export default Student