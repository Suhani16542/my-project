import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Props from './Components/Props';
import Signup from './Components/Singup';
import LandingPage from './Components/LandingPage';
import Task from './Components/Task';


function App() {
  return (
    <>
    {/* <BrowserRouter>
    <Routes>
       
    
      <Route path='/' element={<Nav/>} >
      <Route index element={<LandingPage/>}/>
     <Route path='/login' element={<Props/>} />
       <Route path='/Singup' element={<Signup/>} />
     </Route>



    </Routes>
     </BrowserRouter> */}

     <Task/>

    </>
  )
}

export default App