import React, {useReducer} from 'react'
import ProjectContext from "./ProjectContext"
import ProjectReducer from "./ProjectReducer"
import {NEW_PROJECT_FORM,PROJECT_LIST} from "../../types"

const ProjectState = (props) => {

    const initialState = {
        newProjectForm: false,
        exampleProjects: []
    }

    const [state, dispatch] = useReducer(ProjectReducer, initialState)
    
    const exampleProjects = [
        {name: "Tienda Virtual", id:1},
        {name: "Intranet", id:2},
        {name: "Diseño de Sitio Web", id:3},
    ]

    const showForm = () => {
        dispatch({
            type: NEW_PROJECT_FORM
        })
    }

    const getProjects = () => {
        dispatch({
            type:PROJECT_LIST,
            payload: exampleProjects
        })
    }

    return (
         <ProjectContext.Provider
            value={{
                exampleProjects: state.exampleProjects,
                newProjectForm: state.newProjectForm,
                showForm,
                getProjects
            }}
         >
             {props.children}
         </ProjectContext.Provider>
    )
}
export default ProjectState