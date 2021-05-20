import {NEW_PROJECT_FORM,PROJECT_LIST,ADD_PROJECT,SHOW_ERROR,CURRENT_PROJECT,DELETE_PROJECT} from "../../types"

export default (state,action) => {
    switch(action.type) {
        case NEW_PROJECT_FORM:
            return {...state, newProjectForm:!state.newProjectForm}
        case PROJECT_LIST:
            return {...state, projectsList: action.payload}
        case ADD_PROJECT:
            return {...state, projectsList: [...state.projectsList, action.payload],
                newProjectForm: false,
                formError: false
            }
        case SHOW_ERROR:
            return {...state, formError: true}
        case CURRENT_PROJECT:
            return {...state, projectSelected: state.projectsList.filter((project)=> {
                return project.id === action.payload.id
            })}
        case DELETE_PROJECT:
            return {...state, projectsList: state.projectsList.filter((project)=> {
                return project.id !== action.payload
            }),
            projectSelected: []
        }
        default:
            return state
    }
}

