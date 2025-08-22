import { useAuthContext } from "../context/AuthContext"

export const LoginPage = () => {

    const {isChecking, isAuthenticated, user, loginWithEmailPassword, logout} = useAuthContext();

    if(isChecking){
        return <h1>Verificando...</h1>
    }

    return (
        <>
            {
                isAuthenticated ? (
                    <>
                        <h3>Bienvenido</h3>
                        <span>{JSON.stringify(user)}</span>
                        <button onClick={logout} className="cursor-pointer bg-blue-500 p-2 text-white rounded-xl mt-2" >Salir</button>
                    </>
                ) : (
                    <>
                        <h3>Ingresar a la aplicación</h3>
                        <button onClick={() => loginWithEmailPassword("jeanpool@hotmail.com", "123456789")}  className="cursor-pointer bg-blue-500 p-2 text-white rounded-xl mt-2" >Ingresar</button>
                    </>
                )
            }
        </>
    )
}
