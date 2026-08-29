import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

// axios is used for fetching data from API
//API has JSON format of data 

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  let printUserData = <h3 className='text-gray-400 text-sm font-semibold absolute top-1/2 left-1/2 translate-x-1 translate-y-1 '>
                        Loading...</h3>
  

  const  getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`);
    setUserData(response.data);
    console.log(response.data)
    console.log("Data Arrived")
  }

  useEffect( function () {
    getData();

    },[index]
  )
  //to get more pictures , and want to call function when the index is changed 

  if(userData.length>0) {
    printUserData = userData.map( function (elem , idx) {

      return <div key={idx}>
        <Card  elem = {elem}/>
      </div>
    }) 
  }

  return (
    <div className='bg-black h-screen overflow-auto text-white p-4'>
      <h1 className='fixed text-9xl'>{index}</h1>

      <div className=' flex flex-wrap gap-2 p-8 h-[82%]'>
        {printUserData}
      </div>

      <div className='flex justify-center gap-6 items-center p-4'>
        <button 
          style={{ opacity: index ==1? 0.5:1}}
          className='bg-amber-600 text-black text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold'
          onClick={ () => {
            if(index>1) {
              setIndex(index-1)
              setUserData([])
              console.log(" Prev Button is clicked.")
            }
          

          }}>
            Prev
        </button>
        
        <h4> Page {index}</h4>

        <button className='bg-amber-600 text-black rounded px-4 py-2 font-semibold'
          onClick={ () => {
            setIndex(index+1)
            setUserData([])
            console.log(" Next Button is clicked.")

          }}>
            Next
        </button>

      </div>

    </div>
  )
}

export default App