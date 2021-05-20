import React,{useContext, useState,useEffect} from 'react'
import Task from "./Task"
import ProyectContext from "../../context/projects/ProjectContext"

export default function TasksList() {

    const ProjectsContext = useContext(ProyectContext)
    const {projectSelected,deleteProject} = ProjectsContext

    if(projectSelected.length < 1) {
        return <h2>Selecciona un proyecto</h2>
    }

    const [currentProject] = projectSelected

    const tasks = [
        { name: "Elegir Plataforma", state: true},
        { name: "Elegir colores", state: false},
        { name: "Elegir Hosting", state: true},
    ]

    return (
        <>
            <h2>Proyecto: {currentProject.name}</h2>
            <ul className="tasks-list">
                {
                    tasks.length > 0 
                    ?
                    tasks.map((task)=>
                        <Task 
                            task={task}
                            key={task.name}
                        />     
                    )
                    :
                    <li className="tarea">No hay tareas</li>
                }
            </ul>

            <button
                className="btn btn-eliminar"
                onClick={()=> deleteProject(currentProject.id)}
            >Eliminar Proyecto &times;</button>
        </>
    )
}
