import React,{useState, useContext, useEffect} from 'react'
import {Link} from "react-router-dom"
import AlertContext from "../../context/alerts/AlertContext"
import AuthContext from "../../context/auth/AuthContext"

export default function Login(props) {

    const alertContext = useContext(AlertContext)
    const {alert, showAlert, hideAlert} = alertContext

    const authContext = useContext(AuthContext)
    const {userLogin, message, auth} = authContext

    useEffect(() => {
        if(auth) {
            return props.history.push("/projects")
        }

        if(message) {
            return showAlert(message.msg, message.category)
        }
    }, [message, auth, props.history])

    const [login,setLogin] = useState({
        email:"",
        password:""
    })
    const {email,password} = login
    
    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!email.trim() || !password.trim()) {
            return showAlert("Debes completar todos los campos", "alerta-error")
        }
        hideAlert()

        userLogin({
            email,
            password
        })
    }

    return (
        <div className="form-usuario">
             {alert && <div className={`alerta ${alert.category}`}>{alert.msg}</div>}
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>

                <form
                    onSubmit={handleSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name="email"
                            value={email}
                            id="email"
                            placeholder="Tu Email"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            value={password}
                            id="password"
                            placeholder="Tu Password"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="campo-form">
                        <button
                            className="btn btn-primario btn-block"
                        >Iniciar Sesión</button>
                    </div>
                </form>

                <Link to={"/Register"} className="enlace-cuenta">
                    ¿No tenes cuenta? Regístrate
                </Link>
            </div>
        </div>
    )
}


