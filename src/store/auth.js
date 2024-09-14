import { createContext, useContext, useState } from "react";


export const AuthContext = createContext();

export const AuthProvider =({children})=>{

    const [token,setToken] = useState(localStorage.getItem("token"));


    const storeTokenInLS = (serverToken) => {
        return localStorage.setItem("token", serverToken)
    };

const isLoggedIn = !!token;
console.log("isLogged In", isLoggedIn);


// tacking the funcionality of logout

const LogoutUser = ()=>{
    setToken("");
    return localStorage.removeItem("token");

};



    return (
    
    <AuthContext.Provider value={{storeTokenInLS, LogoutUser, isLoggedIn }}>
        {children}
    </AuthContext.Provider>
    ); 
};

export const useAuth = () =>{
    const authContectValue = useContext(AuthContext);
    if (!authContectValue) {
        throw new Error("useAuth used outside of the provider");
    }

    return authContectValue;
};