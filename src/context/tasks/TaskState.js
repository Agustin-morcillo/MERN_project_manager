import React,{useReducer} from 'react'
import TaskContext from "./TaskContext"
import TaskReducer from "./TaskReducer"
import {
    PROJECT_TASKS,
    ADD_TASK,
    TASK_FORM_ERROR,
    DELETE_TASK,
} from "../../types"


const TaskState = (props) => {
    
    const initialState = {
        taskList: [
            { id: 1, name: "Elegir Plataforma", state: true, projectId:1 },
            { id: 2, name: "Elegir colores", state: false, projectId:2 },
            { id: 3, name: "Elegir Hosting", state: true, projectId:3 },
            { id: 4, name: "Elegir Plataforma", state: true, projectId:2 },
            { id: 5, name: "Elegir colores", state: false, projectId:1 },
            { id: 6, name: "Elegir Hosting", state: true, projectId:3 },
            { id: 7, name: "Elegir Hosting", state: true, projectId:3 },
            { id: 8, name: "Elegir Plataforma", state: true, projectId:2 },
            { id: 9, name: "Elegir colores", state: false, projectId:1 },
            { id: 10, name: "Elegir Hosting", state: true, projectId:1 },
        ],
        projectTasks: [],
        formError: false
    }

    const [state, dispatch] = useReducer(TaskReducer,initialState)

    const getTasks = (projectId) => {
        dispatch({
            type: PROJECT_TASKS,
            payload: projectId
        })
    }

    const addTask = (task) => {
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }

    const showFormError = () => {
        dispatch({
            type: TASK_FORM_ERROR
        })
    }

    const removeTask = (taskId) => {
        dispatch({
            type: DELETE_TASK,
            payload: taskId
        })
    }

    return (
        <TaskContext.Provider
            value={{
                taskList: state.taskList,
                projectTasks: state.projectTasks,
                formError: state.formError,
                getTasks,
                addTask,
                showFormError,
                removeTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}
export default TaskState


