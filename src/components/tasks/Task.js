import React from 'react'

export default function Task({task}) {
    return (
        <li className="tarea shadow">
            <p>{task.name} </p>

            <div className="estado">
                {
                    task.state
                    ?
                    <button
                        className="completo"
                    >Completo</button>
                    :
                    <button
                        className="incompleto"
                    >Incompleto</button>
                }
            </div>

            <div className="acciones">
                <button
                    className="btn btn-primary"
                >Editar</button>

                <button
                    className="btn btn-scundario"
                >Eliminar</button>
            </div>
        </li>
    )
}
