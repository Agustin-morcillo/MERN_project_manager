import React,{useContext, useState} from 'react'
import ProjectContext from "../../context/projects/ProjectContext"

export default function NewProject() {

    const ProjectContext = useContext(ProjectContext)
    const {createProject} = ProjectContext

    const [newProject, setNewProject] = useState({
        name:"",
        id:""
    })
    const {name} = newProject

    const handleChange = (e) => {
        setNewProject({
            ...newProject,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <button
                className="btn btn-block btn-primary"
            >Nuevo Proyecto</button>

            {
                createProject
                &&
                <form
                className="formulario-nuevo-proyecto"
                >
                    <input 
                        type="text"
                        className="input-text"
                        value={name}
                        placeholder="Nombre Proyecto"
                        name="name"
                        onChange={handleChange}
                    />

                    <button
                        className="btn btn-block btn-primary"
                    >Agregar Proyecto</button>
                </form>

            }

          
        </>
        
    )
}
