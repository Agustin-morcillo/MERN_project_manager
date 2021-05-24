import React, {useContext} from 'react'
import TaskContext from "../../context/tasks/TaskContext"
import ProyectContext from "../../context/projects/ProjectContext"

export default function Task({task}) {

    const TasksContext = useContext(TaskContext)
    const {removeTask, getTasks, changeTaskState,getCurrentTask} = TasksContext

    const ProjectsContext = useContext(ProyectContext)
    const {projectSelected} = ProjectsContext
    const [currentProject] = projectSelected

    const deleteTask = (id) => {
        removeTask(id)
        getTasks(currentProject.id)
    }

    const updateTaskState = (task) => {
        task.state = !task.state
        changeTaskState(task)
    }

    const getTask = (task) => {
        getCurrentTask(task)
    }

    return (
        <li className="tarea sombra">
            <p>{task.name} </p>

            <div className="estado">
                {
                    task.state
                    ?
                    <button
                        className="completo"
                        onClick={()=> updateTaskState(task)}
                    >Completo</button>
                    :
                    <button
                        className="incompleto"
                        onClick={()=> updateTaskState(task)}
                    >Incompleto</button>
                }
            </div>

            <div className="acciones">
                <button
                    className="btn btn-primario"
                    onClick={()=> getTask(task)}
                >Editar</button>

                <button
                    className="btn btn-scundario"
                    onClick={()=> deleteTask(task.id)}
                >Eliminar</button>
            </div>
        </li>
    )
}
