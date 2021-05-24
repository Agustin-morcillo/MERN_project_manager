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
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una cuenta</h1>

                <form>
                    <div className="campo-form">
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

                    <div className="campo-form">
                        <button
                            className="btn btn-primario btn-block"
                        >Registrarme</button>
                    </div>
                </form>

                <Link to={"/"} className="enlace-cuenta">
                    Volver a inicio de sesión
                </Link>
            </div>
        </div>
    )
}


