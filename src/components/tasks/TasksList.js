import React from 'react'
import Task from "./Task"

export default function TasksList() {

    const tasks = [
        { name: "Elegir Plataforma", state: true},
        { name: "Elegir colores", state: false},
        { name: "Elegir Hosting", state: true},
    ]

    return (
        <>
            <h2>Proyecto: Tienda Virtual</h2>

            <ul className="tasks-list">
                {
                    tasks.length > 0 
                    ?
                    tasks.map((task)=>
                        <Task 
                            task={task}
                        />     
                    )
                    :
                    <li className="tarea">No hay tareas</li>
                }
            </ul>

            <button
                className="btn btn-eliminar"
            >Eliminar Proyecto &times;</button>
        </>
    )
}
