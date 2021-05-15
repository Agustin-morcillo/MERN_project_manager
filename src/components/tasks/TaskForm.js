import React from 'react'

export default function TaskForm() {
    return (
        <div className="formulario">
            <form>
                <div className="input-container">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre de la tarea"
                        name="name"
                    />
                </div>

                <div className="input-container">
                    <button
                        className="btn btn-primary btn-submit btn-block"
                    >Agregar tarea</button>
                </div>
            </form>
        </div>
    )
}