import React from 'react'
import Navbar from '../components/Navbar.jsx'

const Signup = () => {
  return (
    <div>
        <Navbar/>
        <h1>Sign Up</h1>
            <h4>Create your account</h4>
            <br />
            <form >
                <label htmlFor="Username">Username</label>
                    <input type="text" name="username" id="user"/><br />
                <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"/><br />
                <label htmlFor="confirmation">Confirm Password</label>
                    <input type="confirmpw" name="confirmpw" id="passwordcheck"/><br />
            </form>
            <button type="submit">Sign Up</button>
    </div>
  )
}

export default Signup