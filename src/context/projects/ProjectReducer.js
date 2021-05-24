import {
    NEW_PROJECT_FORM,
    PROJECT_LIST,
    ADD_PROJECT,
    PROJECT_FORM_ERROR,
    CURRENT_PROJECT,
    DELETE_PROJECT} from "../../types"

export default (state,action) => {
    switch(action.type) {
        case NEW_PROJECT_FORM:
            return {
                ...state, 
                newProjectForm:!state.newProjectForm
            }
        case PROJECT_LIST:
            return {
                ...state, 
                projectsList: action.payload
            }
        case ADD_PROJECT:
            return {
                ...state, 
                projectsList: [...state.projectsList, action.payload],
                newProjectForm: false,
                formError: false
            }
        case PROJECT_FORM_ERROR:
            return {
                ...state, 
                formError: true
            }
        case CURRENT_PROJECT:
            return {
                ...state, 
                projectSelected: state.projectsList.filter((project) => project.id === action.payload)
            }
        case DELETE_PROJECT:
            return {
                ...state, 
                projectsList: state.projectsList.filter((project) => project.id !== action.payload),   
                projectSelected: []
            }
        default:
            return state
    }
}

