import React from 'react'
import Project from "./Project"

export default function ProjectsList() {

    const exampleProjects = [
        {name: "Tienda Virtual"},
        {name: "Intranet"},
        {name: "Diseño de Sitio Web"},
    ]
    return (
        <>
            <ul className="listado-proyectos">
                {
                   exampleProjects.map(project => (
                        <Project 
                            key={project.name}
                            project={project}
                        />
                   )) 
                }
            </ul>
        </>
    )
}
