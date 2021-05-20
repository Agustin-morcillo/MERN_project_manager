import React,{useContext, useState,useEffect} from 'react'
import ProyectContext from "../../context/projects/ProjectContext"

export default function TaskForm() {

    const ProjectsContext = useContext(ProyectContext)
    const {projectSelected} = ProjectsContext

    if(projectSelected.length < 1) {
        return null
    }


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