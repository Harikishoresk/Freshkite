import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter } from 'react-router-dom'
import Approutes from './routes/Approutes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter/>
        <Approutes/>
        <div>
            <h1>Signup</h1>
            <h4>Create your account</h4>
        </div>
    </div>
  )
}

export default App
