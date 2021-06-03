import React, {useContext} from 'react'
import TaskContext from "../../context/tasks/TaskContext"
import ProyectContext from "../../context/projects/ProjectContext"

export default function Task({task}) {

    const TasksContext = useContext(TaskContext)
    const {removeTask, getTasks, editTask,getCurrentTask} = TasksContext

    const ProjectsContext = useContext(ProyectContext)
    const {projectSelected} = ProjectsContext
    const [currentProject] = projectSelected

    const deleteTask = (id) => {
        removeTask(id, currentProject._id)
        getTasks(currentProject._id)
    }

    const updateTaskState = (task) => {
        task.state = !task.state
        editTask(task)
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
                    className="btn btn-eliminar"
                    onClick={()=> deleteTask(task._id)}
                ><i className="fas fa-times icon"></i>Eliminar</button>
            </div>
        </li>
    )
}
