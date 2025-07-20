import React from 'react'
import Navbar from '../components/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
/* import Signin from '../pages/Signin.jsx'
import tasklist from '../pages/Tasklist.jsx' */
import Homepage from '../components/Homepage.jsx'
import Signup from '../pages/Signup.jsx'
import { ErrorProvider } from '../contexts/Error_context.jsx'


const Approutes = () => {
  return (
    <div>
        <Navbar/>
            <ErrorProvider>
                <Routes>
                    <Route path='/login'element={<Signin/>}/>
                    <Route path='/register' element={<Signup/>}/>
                    <Route path='/'element={<Homepage/>}/>
                    <Route path='/tasks' element={<tasklist/>}/>
                </Routes>
            </ErrorProvider>
    </div>
  )
}

export default Approutes