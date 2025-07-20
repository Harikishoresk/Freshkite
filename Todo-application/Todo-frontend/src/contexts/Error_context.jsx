import { createContext, useContext, useState } from "react";

const ErrorContext = createContext();

export const useError = () => useContext(ErrorContext);

export const ErrorProvider = ({children}) => {
    const [error, setError] = useState(null);

    const handleError = (message) => setError(message);

    const clearError = () => setError(null);

    return (
        <ErrorContext.Provider value={{error, handleError, clearError}}>
            {error && 
                <div className="text-center bg-red-500 text-white" role="alert">
                    {error}
                </div>}
                {children}
        </ErrorContext.Provider>
    )

}