import {
    PROJECT_TASKS,
    ADD_TASK,
    TASK_FORM_ERROR,
    DELETE_TASK,
    CURRENT_TASK,
    EDIT_TASK
} from "../../types"

const TaskReducer = (state,action) => {
    switch (action.type) {
        case PROJECT_TASKS:
            return {
                ...state, 
                projectTasks: action.payload
            }
        case ADD_TASK:
            return {
                ...state, 
                projectTasks: [...state.projectTasks, action.payload],
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
                projectTasks: state.projectTasks.filter(task => task._id !== action.payload)
            }
        case EDIT_TASK:
            return {
                ...state,
                projectTasks: state.projectTasks.map((task)=> task._id === action.payload._id ? action.payload : task),
                taskSelected: null
            }
        case CURRENT_TASK:
            return {
                ...state,
                taskSelected: action.payload
            }
        default:
            return state
    }
}
export default TaskReducer