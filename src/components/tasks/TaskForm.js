import React,{useContext, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import ProyectContext from "../../context/projects/ProjectContext"
import TaskContext from "../../context/tasks/TaskContext"
import Task from './Task';

export default function TaskForm() {

    const ProjectsContext = useContext(ProyectContext)
    const {projectSelected} = ProjectsContext

    const TasksContext = useContext(TaskContext)
    const {addTask,formError,showFormError,getTasks} = TasksContext

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
            id: uuidv4(),
            projectId: currentProject.id,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(!name.trim()) {
            return showFormError()
        }
        
        addTask(newTask)

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
                <div className="input-container">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre de la tarea"
                        name="name"
                        onChange={handleChange}
                        value={name}
                    />
                </div>

                <div className="input-container">
                    <button
                        className="btn btn-primary btn-submit btn-block"
                    >Agregar tarea</button>
                </div>
                {formError && <p className="mensaje error">El nombre de la tarea es obligatorio</p>}
            </form>
            
        </div>
    )
}