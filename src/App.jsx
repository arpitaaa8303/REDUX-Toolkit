import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import {increment , decrement, multiply} from './redux/counter/counterSlice'



function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
     <Navbar/>
     <div>
      <div>
        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="image" width={200} height={200} />
      </div>
     <button onClick={() => dispatch(decrement())}>-</button>
     item in cart is : {count}
     <button onClick={() => dispatch(increment())}>+</button>
     <button onClick={() => dispatch(multiply())}>*</button>
     </div>
     

     
    </>
  )
}

export default App
