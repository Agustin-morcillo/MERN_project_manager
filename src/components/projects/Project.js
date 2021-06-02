import React,{useContext} from 'react'
import ProyectContext from "../../context/projects/ProjectContext"
import TaskContext from "../../context/tasks/TaskContext"

export default function Project({project}) {

    const ProjectsContext = useContext(ProyectContext)
    const {currentProject} = ProjectsContext

    const TasksContext = useContext(TaskContext)
    const {getTasks} = TasksContext

    const handleClick = () => {
        currentProject(project._id)
        getTasks(project._id)
    }

    return (
        <>
            <li>
                <button
                    className="btn btn-blank"
                    onClick={handleClick}
                >{project.name}</button>
            </li>
        </>
    )
}
