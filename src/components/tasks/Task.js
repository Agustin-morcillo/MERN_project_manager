import React, {useContext} from 'react'
import TaskContext from "../../context/tasks/TaskContext"
import ProyectContext from "../../context/projects/ProjectContext"

export default function Task({task}) {

    const TasksContext = useContext(TaskContext)
    const {removeTask, getTasks} = TasksContext

    const ProjectsContext = useContext(ProyectContext)
    const {projectSelected} = ProjectsContext
    const [currentProject] = projectSelected

    const deleteTask = (id) => {
        removeTask(id)
        getTasks(currentProject.id)
    }

    return (
        <li className="tarea shadow">
            <p>{task.name} </p>

            <div className="estado">
                {
                    task.state
                    ?
                    <button
                        className="completo"
                    >Completo</button>
                    :
                    <button
                        className="incompleto"
                    >Incompleto</button>
                }
            </div>

            <div className="acciones">
                <button
                    className="btn btn-primary"
                >Editar</button>

                <button
                    className="btn btn-scundario"
                    onClick={()=> deleteTask(task.id)}
                >Eliminar</button>
            </div>
        </li>
    )
}
