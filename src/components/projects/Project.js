import React,{useContext} from 'react'
import ProyectContext from "../../context/projects/ProjectContext"


export default function Project({project}) {

    const ProjectsContext = useContext(ProyectContext)
    const {currentProject} = ProjectsContext

    return (
        <>
            <li>
                <button
                    className="btn btn-blank"
                    onClick={()=>currentProject(project)}
                >{project.name}</button>
            </li>
        </>
    )
}
