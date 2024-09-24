import { createContext, useContext, useState, useEffect } from "react";
export const AuthContext = createContext();

export const AuthProvider =({children})=>{

    const [token,setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");

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


// JWT Authentication - to get currently logged in user data

const userAuthentication = async ()=>{
    try {
        const response  = await fetch("http://localhost:5000/api/users/user", {
			method:"GET",
			headers: {
				Authorization : `Bearer ${token}`,
			},
		
		});

        if (response.ok) {
            const data = await response.json();
            setUser(data.userData);
        }

    } catch (error) {
        console.log("Error fetching user data");
    }
}

useEffect(()=>{
    userAuthentication();
},[])



    return (
    
    <AuthContext.Provider value={{storeTokenInLS, LogoutUser, isLoggedIn, user }}>
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