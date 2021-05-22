import {
    PROJECT_TASKS,
    ADD_TASK,
    TASK_FORM_ERROR,
    DELETE_TASK,
} from "../../types"

export default (state,action) => {
    switch (action.type) {
        case PROJECT_TASKS:
            return {
                ...state, 
                projectTasks: state.taskList.filter(task => task.projectId === action.payload)
            }
        case ADD_TASK:
            return {
                ...state, 
                taskList: [...state.taskList, action.payload],
                formError: false
            }
        case TASK_FORM_ERROR:
            return {
                ...state, 
                formError:true
            }
        case DELETE_TASK:
            return {
                ...state, 
                taskList: state.taskList.filter(task => task.id !== action.payload)
            }
        default:
            return state
    }
}