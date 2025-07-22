import { createContext, useContext, useEffect, useState } from "react";
import { settoken, gettoken, removetoken } from "../local storage/storage";
import { signin_, signup_ } from "../services/userauth.js";
import { useNavigate } from "react-router-dom";

const authContext = createContext();

export const useAuth = () => useContext(authContext);

export function AuthProvider ({children}) {
    const [user, setUser] = useState(0);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = gettoken();
        if (token) {
            setUser({token});
        }
        setLoading(false);
    }, [])

    function logout() {
        removetoken();
        setUser(null);
        navigate("/login");
    }

    async function signin(cred) {
        const data = await signin_(cred);
        settoken(data.token);
        setUser({token:data.token})
        navigate("/tasks")
    }

    async function signup(cred) {
        await signup_(cred);
        navigate("/login");
    }

    if (loading) {
        return (<div>Loading...</div>);
    }

    return (
        <authContext.Provider value={{user, logout, signin, signup}} >
            {children}
        </authContext.Provider>
    );
}