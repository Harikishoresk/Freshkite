import React from 'react'
import Navbar from './Navbar.jsx'

const Homepage = () => {
  return (
    <>
    <Navbar />
        <div>
            <section>
                <h1> Welcome to Todo App</h1>
                <button>Get Started</button>
            </section>
            <section>
                <h2>About our App</h2>
                <p></p>
            </section>
        </div>
    </>
    
  )
}

export default Homepage