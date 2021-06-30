import React, { useContext } from "react"

import TaskContext from "../../context/tasks/TaskContext"
import ProyectContext from "../../context/projects/ProjectContext"

export default function Task({ task }) {
  const TasksContext = useContext(TaskContext)
  const { removeTask, getTasks, editTask, getCurrentTask } = TasksContext

  const ProjectsContext = useContext(ProyectContext)
  const { projectSelected } = ProjectsContext
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
    <li className="task shadow">
      <p>{task.name} </p>

      <div className="state">
        {task.state ? (
          <button className="complete" onClick={() => updateTaskState(task)}>
            Completo
          </button>
        ) : (
          <button className="incomplete" onClick={() => updateTaskState(task)}>
            Incompleto
          </button>
        )}
      </div>

      <div className="actions">
        <button className="btn btn-primary" onClick={() => getTask(task)}>
          Editar
        </button>

        <button className="btn btn-delete" onClick={() => deleteTask(task._id)}>
          <i className="fas fa-times icon delete-icon"></i>Eliminar
        </button>
      </div>
    </li>
  )
}
