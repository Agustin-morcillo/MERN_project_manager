import React,{useState, useContext, useEffect} from 'react'
import {Link} from "react-router-dom"
import AlertContext from "../../context/alerts/AlertContext"
import AuthContext from "../../context/auth/AuthContext"

export default function Register(props) {

    const alertContext = useContext(AlertContext)
    const {alert, showAlert, hideAlert} = alertContext

    const authContext = useContext(AuthContext)
    const {registerUser, message, auth} = authContext

    useEffect(() => {
        if(auth) {
            return props.history.push("/projects")
        }

        if(message) {
            return showAlert(message.msg, message.category)
        }
        // eslint-disable-next-line
    }, [message, auth, props.history])

    const [register,setRegister] = useState({
        name:"",
        email:"",
        password:"",
        repassword:"",
    })
    const {name, email,password, repassword} = register
    
    const handleChange = (e) => {
        setRegister({
            ...register,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if( !name.trim() ||
            !email.trim() ||
            !password.trim() ||
            !repassword.trim() ) {
                return showAlert("Debes completar todos los campos", "alerta-error")
            }
        
        if(password.length < 6) {
            return showAlert("El password debe tener al menos 6 caracteres", "alerta-error")
        }

        if(password !== repassword) {
            return showAlert("Los passwords no coinciden", "alerta-error")
        }
        hideAlert()
        
        registerUser({
            name,
            email,
            password
        })
    }

    return (
        <div className="user-form-container">
            {alert && <div className={`alerta ${alert.category}`}>{alert.msg}</div>}
            <div className="form-container shadow-dark">
                <h1>Obtener una cuenta</h1>

                <form
                    onSubmit={handleSubmit}
                >
                    <div className="form-input-container">
                        <label htmlFor="name">Nombre</label>
                        <input 
                            type="text" 
                            name="name"
                            value={name}
                            id="name"
                            placeholder="Tu Nombre"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-input-container">
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

                    <div className="form-input-container">
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

                    <div className="form-input-container">
                        <label htmlFor="repassword">Confirmar Password</label>
                        <input 
                            type="password" 
                            name="repassword" 
                            value={repassword}
                            id="repassword"
                            placeholder="Repite tu Password"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-input-container">
                        <button
                            className="btn btn-primary btn-block"
                        >Registrarme</button>
                    </div>
                </form>

                <Link to={"/"} className="login-register-link">
                    Volver a inicio de sesión
                </Link>
            </div>
        </div>
    )
}


