// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import {  
  BrowserRouter, 
  //Routes  
}   
from 'react-router-dom';  
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='p-4 m-4 min-h-screen'>
    <BrowserRouter>
    <Navbar />
    {/* <Routes>
    
    
    </Routes> */}

    <div className='flex justify-center items-center min-h-screen'>
    <div className='bg-slate-800 text-white '>Hello There.</div>
    </div> 
    <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App
