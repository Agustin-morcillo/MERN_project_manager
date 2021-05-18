import {NEW_PROJECT_FORM,PROJECT_LIST} from "../../types"

export default (state,action) => {
    switch(action.type) {
        case NEW_PROJECT_FORM:
            return {...state, newProjectForm:!state.newProjectForm}
        case PROJECT_LIST:
            return {...state, exampleProjects: action.payload}
        default:
            return state
    }
}

