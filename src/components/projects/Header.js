import React from 'react'

export default function Header() {
    return (
        <header className="app-header">
            <p className="nombre-usuario">Hola <span>Juan Pablo</span></p>
            <nav className="nav-principal">
                <button 
                    className="btn btn-blank cerrar-sesion"
                >Cerrar Sesión</button>
            </nav>
        </header>
    )
}
