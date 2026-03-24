import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
    
    const login = (token) => {
        localStorage.setItem("token", token);//Guardamos el token en el localStorage para mantener la sesión
        setIsLoggedIn(true);
    };
    const logout = () => {
        localStorage.removeItem("token");//Eliminamos el token del localStorage para cerrar la sesión
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () =>{
const context=useContext(AuthContext);
if(!context){
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
} 
return context;
};