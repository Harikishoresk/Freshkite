import Navbar from '../components/Navbar.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'
import Signin from '../pages/Signin.jsx'
import Tasklist from '../pages/Tasklist.jsx'
import Homepage from '../components/Homepage.jsx'
import Signup from '../pages/Signup.jsx'
import { ErrorProvider } from '../contexts/Error_context.jsx'
import { useAuth } from '../contexts/Authcontext.jsx'

const Approutes = () => {
  const auth = useAuth();
  const user = auth?.user;
  return (
    <div>
        <Navbar/>
            <ErrorProvider>
                <Routes>
                    <Route path='/login'element={!user ? <Signin/> : <Navigate to = "/tasks"/>}/>
                    <Route path='/register' element={!user ? <Signup/> : <Navigate to = "/tasks"/>}/>
                    <Route path='/'element={<Homepage/>}/>
                    <Route path='/tasks' element={<Tasklist/>}/>
                </Routes>
            </ErrorProvider>
    </div>
  )
}

export default Approutes