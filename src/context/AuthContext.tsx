import { createContext, useContext, useEffect, useState, type PropsWithChildren } from "react";


// enum AuthStatus {
//     'checking',
//     'authenticated',
//     'unauthenticated'
// }

interface AuthState {
    status: 'checking' | 'authenticated' | 'unauthenticated';
    token?: string;
    user?: User;
    isChecking: boolean;
    isAuthenticated: boolean;
    loginWithEmailPassword: (email: string, password: string) => void;
    logout: () => void;
}

interface User {
    name: string;
    email: string;
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({children}: PropsWithChildren) => {

    const [status, setStatus] = useState('checking');
    const [user, setUser] = useState<User>();

    useEffect(() => {
        setTimeout(() => {
            setStatus('unauthenticated');
        }, 2000)
    }, [])

    const loginWithEmailPassword = (email: string, password: string) => {
        setUser({
            name: 'Jean Pool Gutierrez',
            email: email
        });
        setStatus('authenticated');
    }

    const logout = () => {
        setUser(undefined);
        setStatus('unauthenticated');
    }

    return (
        <AuthContext.Provider value={{
            status: 'checking',
            user: user,
            // Getter
            isChecking: status === 'checking',
            isAuthenticated: status === 'authenticated',
            // Method
            loginWithEmailPassword,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}