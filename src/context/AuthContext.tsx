import { createContext, useContext, type PropsWithChildren } from "react";

interface AuthState {
    hola: string;
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({children}: PropsWithChildren) => {
    return (
        <AuthContext.Provider value={{hola: 'Mundo'}}>
            {children}
        </AuthContext.Provider>
    )
}