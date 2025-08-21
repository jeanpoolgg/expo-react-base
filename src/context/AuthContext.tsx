import { createContext, useContext, useEffect, useState, type PropsWithChildren } from "react";


// enum AuthStatus {
//     'checking',
//     'authenticated',
//     'unauthenticated'
// }

interface AuthState {
    status: 'checking' | 'authenticated' | 'unauthenticated';
    token?: string;
    user?: User,
    isChecking: boolean
}

interface User {
    name: string;
    email: string;
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({children}: PropsWithChildren) => {

    const [status, setStatus] = useState('checking');

    useEffect(() => {
        setTimeout(() => {
            setStatus('unauthenticated');
        }, 2000)
    }, [])

    return (
        <AuthContext.Provider value={{
            status: 'checking',
            isChecking: status === 'checking'
        }}>
            {children}
        </AuthContext.Provider>
    )
}