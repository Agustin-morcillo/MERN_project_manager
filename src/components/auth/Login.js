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
        <div className="user-form">
            <div className="form-container dark-shadow">
                <h1>Iniciar Sesión</h1>

                <form>
                    <div className="input-container">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            name="email"
                            value={email}
                            id="email"
                            placeholder="Tu Email"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-container">
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

                    <div className="input-container">
                        <button
                            className="btn btn-primary btn-block"
                        >Iniciar Sesión</button>
                    </div>
                </form>

                <Link to={"/Register"} className="register-link">
                    ¿No tenes cuenta? Regístrate
                </Link>
            </div>
        </div>
    )
}


