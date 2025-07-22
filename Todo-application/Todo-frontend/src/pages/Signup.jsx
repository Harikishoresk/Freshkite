/* import React from 'react'
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

export default Signup */

import { useState } from "react";
import { useAuth } from "../contexts/Authcontext";
import { useError } from "../contexts/Error_context";


export default function SignUp() {
    const {handleError, clearError} = useError();
    const [cred, setCred] = useState({
        username: "",
        password: "",
        confirmPassword: "",
     });
    const {signup} = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();
        if (cred.password != cred.confirmPassword) {
            alert("Passwords doesn't match");
            return;
        }
        try {
            await signup(cred);
            clearError();
        } catch (err) {
            handleError(err);
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600 dark:from-gray-800 dark:to-gray-900">
            <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100">
                    Sign Up
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
                    Create your account
                </p>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            className="appearance-none rounded-lg relative block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            placeholder="Enter your username"
                            onChange={(e) => { setCred({ ...cred, username: e.target.value }) }}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="appearance-none rounded-lg relative block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            placeholder="Enter your password"
                            onChange={(e) => { setCred({ ...cred, password: e.target.value }) }}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="cfmpassword"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Confirm Password
                        </label>
                        <input
                            id="cfmpassword"
                            type="password"
                            className="appearance-none rounded-lg relative block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            placeholder="Enter your password"
                            onChange={(e) => { setCred({ ...cred, confirmPassword: e.target.value }) }}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Already have an account? 
                        <a
                            href="/login"
                            className="text-purple-500 font-medium hover:underline dark:text-purple-400"
                        >
                            Sign in here
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}