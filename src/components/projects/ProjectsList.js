import React,{useContext, useState,useEffect} from 'react'
import Project from "./Project"
import ProyectContext from "../../context/projects/ProjectContext"

export default function ProjectsList() {

    const ProjectsContext = useContext(ProyectContext)
    const {projectsList, getProjects} = ProjectsContext

    useEffect(() => {
        getProjects()
    }, [])

    if(projectsList.length < 1) {
        return <p>No hay proyectos, comienza creando uno</p>
    }

    return (
        <>
            <ul className="listado-proyectos">
                {
                   projectsList.map(project => (
                        <Project 
                            key={project.id}
                            project={project}
                        />
                   )) 
                }
            </ul>
        </>
    )
}
