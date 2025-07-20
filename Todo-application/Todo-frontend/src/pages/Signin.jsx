import React from 'react'

const signin = () => {
  return (
    <div>
        <div>
            <h1>Sign In</h1>
            <h4>Login to your account</h4>
            <br />
            <form >
                <label htmlFor="Username">Username</label>
                    <input type="text" name="username" id="user"/><br />
                <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"/><br />
            </form>
            <button type="submit">Log In</button>
        </div>
    </div>
  )
}

export default signin