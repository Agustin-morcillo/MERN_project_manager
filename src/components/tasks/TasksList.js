import React,{useContext} from 'react'
import { CSSTransition, TransitionGroup} from "react-transition-group"
import Task from "./Task"
import ProyectContext from "../../context/projects/ProjectContext"
import TaskContext from "../../context/tasks/TaskContext"

export default function TasksList() {

    const ProjectsContext = useContext(ProyectContext)
    const {projectSelected,deleteProject} = ProjectsContext

    const TasksContext = useContext(TaskContext)
    const {projectTasks} = TasksContext

    if(projectSelected.length < 1) {
        return <h2>Selecciona un proyecto</h2>
    }

    const [currentProject] = projectSelected

    return (
        <>
            <h2>Proyecto: {currentProject.name}</h2>
            <ul className="listado-tareas">
                {
                    projectTasks.length > 0 
                    ?
                    <TransitionGroup>
                         { projectTasks.map((task) =>
                            <CSSTransition
                                key={task.id}
                                timeout={200}
                                classNames="tarea"
                            >
                                <Task 
                                    task={task}
                                /> 
                            </CSSTransition>
                        )}
                    </TransitionGroup>
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
