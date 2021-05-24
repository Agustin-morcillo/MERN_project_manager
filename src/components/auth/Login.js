import React,{useState} from 'react'
import {Link} from "react-router-dom"

export default function Login() {

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

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>

                <form>
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


