import { useState } from 'react'

const App = () => {
  
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  // task array is used for storing title and detail.
  const [task, setTask] = useState([])

  const formHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted by: ", title, detail)

    // storing previous and new  both tasks  together
    const copyTask = [...task];
    copyTask.push({ title, detail});
    setTask(copyTask);

    console.log(task);

    setTitle("");
    setDetail("");
  }

  
  const deleteNote = (idx) => {
    const copyTask=[...task];
    console.log("index: ", idx)
    console.log("deleted: ", copyTask[idx])
    copyTask.splice(idx,1)
    setTask(copyTask);

  }

  




  return (
    <div className=' h-screen lg:flex bg-black text-white'>
      <form className='flex flex-col lg:w-1/2 items-start p-10 gap-4' onSubmit={ (e) => {
        formHandler(e);
      }}>

          <h1 className='px-5 py-2 w-full text-center font-bold text-4xl' >NOTES APPLICATION</h1>
          
          <input 
            type="text"
            placeholder='Enter Notes Heading'
            className='w-full px-5 py-2 border-2 rounded outline-none font-medium'
            value={title}
            onChange={ (e) => {
              setTitle(e.target.value)
            }} 
          />

          <textarea
            type="text"
            placeholder='Write Details'
            className='w-full px-5 py-2 h-20 border-2 rounded  outline-none font-medium' 
            value={detail}
            onChange={ (e) => {
              setDetail(e.target.value)
            }}  
          />

          <button className=' w-full active:bg-gray-700 px-5 py-2 border-2 rounded bg-white text-black font-medium'>
            Add Notes
          </button>

        </form>

      <div className='p-10 lg:w-1/2 lg:border-l-2'>
        <h1 className='text-xl font-extrabold text-center'>RECENT NOTES </h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>

            {/* map() is so commonly used in React to display lists. */}
          {task.map( function (elem, idx) {
            return  <div key={idx} className=" flex flex-col justify-between item-start relative h-50 w-42 pb-5 bg-white bg-cover rounded-xl py-8 px-4 text-black bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] "> 
              <div>
                <h3 className='leading-tight text-s font-bold'>{elem.title}</h3>
                <p className='font-medium  text-xs mt-2 leading-tight text-gray-600'>{elem.detail}</p>
              </div>

              <button onClick={() => {
                deleteNote(idx)
              }} className='bg-red-600 w-full text-s rounded cursor-pointer active:scale-95 text-white'>Delete</button>
            </div>
          })}
          
         
        </div>
        
      </div>
    </div>
  )
}

export default App
