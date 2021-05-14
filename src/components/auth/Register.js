import React,{useState} from 'react'
import {Link} from "react-router-dom"

export default function Register() {

    const [register,setRegister] = useState({
        name:"",
        email:"",
        password:"",
        repassword:"",
    })
    const {name, email,password, repassword} = register
    
    const handleChange = (e) => {
        setLogin({
            ...register,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="user-form">
            <div className="form-container dark-shadow">
                <h1>Obtener una cuenta</h1>

                <form>
                    <div className="input-container">
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

                    <div className="input-container">
                        <button
                            className="btn btn-primary btn-block"
                        >Registrarme</button>
                    </div>
                </form>

                <Link to={"/"} className="register-link">
                    Volver a inicio de sesión
                </Link>
            </div>
        </div>
    )
}


