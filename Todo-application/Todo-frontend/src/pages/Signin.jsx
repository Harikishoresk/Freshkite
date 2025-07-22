/* import React from 'react'

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

export default signin */

import { useState } from "react";
import { useAuth } from "../contexts/Authcontext";
import { useError } from "../contexts/Error_context";

export default function SignIn() {
    const [cred, setCred] = useState({ username: "", password: "" });
    const { signin } = useAuth();
    const { handleError, clearError } = useError();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await signin(cred);
            clearError();
        } catch (err) {
            handleError(err);
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-center text-gray-800">
                    Sign In
                </h2>
                <p className="text-center text-gray-600 mb-8">
                    Welcome back! Please login to your account.
                </p>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            className="appearance-none rounded-lg relative block w-full px-4 py-2 border border-gray-300  placeholder-gray-500 text-gray-900 bg-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            placeholder="Enter your username"
                            onChange={(e) => { setCred({ ...cred, username: e.target.value }) }}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 "
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="appearance-none rounded-lg relative block w-full px-4 py-2 border border-gray-300  placeholder-gray-500 text-gray-900  bg-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            placeholder="Enter your password"
                            onChange={(e) => { setCred({ ...cred, password: e.target.value }) }}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 "
                    >
                        Sign In
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600 ">
                        Do not have an account?
                        <a
                            href="/register"
                            className="text-purple-500 font-medium hover:underline"
                        >
                            Sign up here
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}