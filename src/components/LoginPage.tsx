import { useAuthContext } from "../context/AuthContext"

export const LoginPage = () => {

    const {isChecking} = useAuthContext();

    if(isChecking){
        return <h1>Verificando...</h1>
    }

    return (
        <>
            <h3>Login</h3>
        </>
    )
}
