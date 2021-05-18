import React,{useContext, useState,useEffect} from 'react'
import Project from "./Project"
import ProyectContext from "../../context/projects/ProjectContext"

export default function ProjectsList() {

    const ProjectsContext = useContext(ProyectContext)
    const {exampleProjects, getProjects} = ProjectsContext

    useEffect(() => {
        getProjects()
    }, [])

    if(exampleProjects.length < 1) {
        return null
    }

    return (
        <>
            <ul className="listado-proyectos">
                {
                   exampleProjects.map(project => (
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
