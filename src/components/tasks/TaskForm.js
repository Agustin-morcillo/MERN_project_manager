import React,{useContext, useState, useEffect} from 'react'
import ProyectContext from "../../context/projects/ProjectContext"
import TaskContext from "../../context/tasks/TaskContext"
import Task from './Task';

export default function TaskForm() {

    const ProjectsContext = useContext(ProyectContext)
    const {projectSelected} = ProjectsContext

    const TasksContext = useContext(TaskContext)
    const {addTask,formError,showFormError,getTasks,taskSelected,editTask} = TasksContext

    useEffect(() => {
        if(taskSelected) {
            setNewTask(taskSelected)
        }
    }, [taskSelected])

    const [newTask, setNewTask] = useState({
        name: "",
        id: null,
        projectId: null,
        state: false
    })
    const {name} = newTask

    if(projectSelected.length < 1) {
        return null
    }
    const [currentProject] = projectSelected

    const handleChange = (e) => {
        setNewTask({
            ...newTask,
            [e.target.name]: e.target.value,
            projectId: currentProject.id,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(!name.trim()) {
            return showFormError()
        }

        if(taskSelected) {
            editTask(newTask)
        } else {
            addTask(newTask)
        }
        
        getTasks(currentProject.id)

        setNewTask({
            ...newTask,
            name: "",
        })
    }

    return (
        <div className="formulario">
            <form
                onSubmit={handleSubmit}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre de la tarea"
                        name="name"
                        onChange={handleChange}
                        value={name}
                    />
                </div>

                <div className="contenedor-input">
                    <button
                        className="btn btn-primario btn-submit btn-block"
                    >{taskSelected ? "Editar Tarea" : "Agregar Tarea"}</button>
                </div>
                {formError && <p className="mensaje error">El nombre de la tarea es obligatorio</p>}
            </form>
            
        </div>
    )
}