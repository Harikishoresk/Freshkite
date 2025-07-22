
import { BrowserRouter } from 'react-router-dom'
import Approutes from './routes/Approutes'
import { AuthProvider } from './contexts/Authcontext'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
            <Toaster position='top-right' />
            <Approutes />
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
