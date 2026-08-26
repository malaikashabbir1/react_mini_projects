import React, { useState } from 'react'
import Child from './Child'
import Child2 from './Child2'
import Product from './Product';
import Modal from './Modal';
import Modal2 from './Modal2'
import Modal3 from './Modal3'
import Password from './Password';
import Profile from './Profile'
import Story from './Story'


const App = () => {

  function load() {
    alert("LOADING TO YOUR WEBSITE");
  }

  function multiply (a,b) {
    alert (`My love for you is still multiplying as it was ${a} and now it is ${a*b} `);
    console.log("OR BHI DUKH HAIN ZAMANAY MAIN MUHABBAT KAI SIWA")
  }

  const [isOpen, setIsOpen] = useState(false)
  
  const [isOpened, setIsOpened] = useState(false)

  const [isShow, setIsShow] = useState(false)

  const [receivedArray, setReceivedArray] = useState([])

  const [receivedObject, setReceivedObject] = useState({})

  const [receivedArrayObject, setReceivedArrayObject] = useState([])

  function add (a,b) {
    alert(`The sum of ${a} and ${b} is: ${a+b}`);
  }

  function getName (name) {
    console.log("The name of  user is: ",name);
  }

  function getArray(array) {
     console.log("The array is: ",array);
     setReceivedArray(array);
  }

  function getObject(object) {
    console.log("The object is: ",object );
    setReceivedObject(object);
  }

  function getArrayObject(objectArray) {
    console.log("The object is: ",objectArray );
    setReceivedArrayObject(objectArray);
  }

  function getSingleObject(obj){
    console.log("Received Single Objects")
    setReceivedObject(obj);
  }

  const products = [
  {
    title: "Wireless Headphones",
    price: 4999,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=800&q=80",
    description: "High-quality wireless headphones with noise cancellation.",
    button: "Add to Cart"
  },
  {
    title: "Smart Watch",
    price: 7999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    description: "A stylish smartwatch with fitness tracking and notifications.",
    button: "Buy Now"
  },
  {
    title: "Bluetooth Speaker",
    price: 3499,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
    description: "Portable speaker with powerful sound and long battery life.",
    button: "Add to Cart"
  }
];

  return (
    <>


      <div>
        <Child2 
          add ={add} 
          getName={getName} 
          getArray = {getArray}
          getObject= {getObject}
          getArrayObject={getArrayObject}
          getSingleObject = {getSingleObject}
        />
          <h1>{receivedArray.join("-")}</h1>
          {
            receivedArray.map((item) => {
              return  (
                <p>{item}</p>
              )
            })
          }

          <h1>{receivedObject.name}</h1>
          <p>Age: {receivedObject.age}</p>
          <p>Favorite Color: {receivedObject.fvrt_color}</p>
          <p>Country: {receivedObject.country}</p>

          <h1>ARRAY OF OBJECT</h1>
          {receivedArrayObject.map( (obj,idx) => {
            const {name, age, degree, city} = obj
            return (
              <>
                <div key={idx}>
                  <h1>{name}</h1>
                  <h1>{age}</h1>
                  <h1>{degree}</h1>
                  <h1>{city}</h1>
                </div>
              </>
            )
          })}
        <Child/>
      </div>


      <div>
        <button onClick={ () => {
          console.log("Modal2 is open.")
         setIsOpened(true)
        }}> Open The Modal </button>
      </div>

      <div>
        <Modal3
          title="openCloseModel"
          isOpened={isOpened}

          // can be created above as simple function and can pass here `
          //onClosed={function} → pass the function
          //does NOT execute setIsOpened(false) immediately.
          //It only defines and passes the function.    
          onClosed = {() => {
            setIsOpened(false)
          }}>
          <h2>bs itna hi kafi hai dil mera jur gaya tumse ye kafi haina</h2>
          <Profile/>
          <Story/>
        </Modal3>
      </div>

      {/* __________________________password _________________________ */}
        
      <div>
        <Password  
          isShow={isShow} 
          setIsShow = {setIsShow}
         />

      </div>



      <div>
        <Child 
          onLoad = {load}
          myLove = {multiply}  
        />
      </div>


      <div className='main_div'>
        {
          products.map( (product,idx) => (
            <Product 
              key={idx}
              idx={idx}
              data ={product}
            />
          ))
        }
      </div>
      
      <br /> <br />
      <h1>MODAL, CHILDREN CONCEPT</h1>
      
      <br /> <br />
      
      <Modal title="isLoggedIn">
        <h1>Have you logged In?</h1>
        <button>Yes</button>
        <button>No</button>
      </Modal>


      <Modal title="deleteButton">
        <h1>Are you sure you want to delete this permanently?</h1>
        <button>Yes</button>
        <button>No</button>
      </Modal>


      <br /> <br />
      <h1>MODAL OPEN CLOSE FUNCTIONG</h1>
      
      <br /> <br />
      
      <div>
        <button onClick = { ()=> {
          console.log("moddel is opened")
           setIsOpen (true) 
        }}> 
          Open Modal  </button>
      </div>

      <Modal2 
        isOpen = {isOpen}
        onClose = { () => {
          setIsOpen(false)}}
        title="profile"
      >
        <Profile/>
        <Story />
      </Modal2>
      
    </>
  )
}

export default App