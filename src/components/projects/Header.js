import React, {useContext, useEffect} from 'react'
import AuthContext from "../../context/auth/AuthContext"

export default function Header() {

    const authContext = useContext(AuthContext)
    const {getAuthUser, user, userLogout} = authContext

    useEffect(() => {
        getAuthUser()
    }, [])

    return (
        <header className="app-header">
            {
                user && <p className="nombre-usuario">Hola <span>{user.name}</span></p>
            }
            <div>
                <button 
                    className="btn btn-blank cerrar-sesion"
                    onClick={()=> userLogout()}
                ><i className="fas fa-sign-out-alt icon"></i>Cerrar Sesión</button>
            </div>
        </header>
    )
}
