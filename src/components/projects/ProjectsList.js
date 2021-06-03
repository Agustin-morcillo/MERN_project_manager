import React,{useContext,useEffect} from 'react'
import { CSSTransition, TransitionGroup} from "react-transition-group"
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
                <TransitionGroup>
                    {
                    projectsList.map(project => (
                        <CSSTransition
                            key={project._id}
                            timeout={200}
                            classNames="proyecto"
                        >
                             <Project 
                                project={project}
                            />
                        </CSSTransition>
                    )) }
                </TransitionGroup>
            </ul>
        </>
    )
}
