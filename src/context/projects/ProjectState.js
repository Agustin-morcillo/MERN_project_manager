import React, {useReducer} from 'react'
import { v4 as uuidv4 } from 'uuid';
import ProjectContext from "./ProjectContext"
import ProjectReducer from "./ProjectReducer"
import {NEW_PROJECT_FORM,PROJECT_LIST,ADD_PROJECT,SHOW_ERROR,CURRENT_PROJECT,DELETE_PROJECT} from "../../types"

const ProjectState = (props) => {

    const initialState = {
        newProjectForm: false,
        projectsList: [],
        formError: false,
        projectSelected: []
    }

    const [state, dispatch] = useReducer(ProjectReducer, initialState)
    
    const projectsList = [
        {id:uuidv4(), name: "Tienda Virtual"},
        {id:uuidv4(), name: "Intranet"},
        {id:uuidv4(), name: "Diseño de Sitio Web"},
    ]

    const showForm = () => {
        dispatch({
            type: NEW_PROJECT_FORM
        })
    }

    const getProjects = () => {
        dispatch({
            type:PROJECT_LIST,
            payload: projectsList
        })
    }

    const addProject = (project) => {
        project.id = uuidv4();

        dispatch({
            type: ADD_PROJECT,
            payload: project
        })
    }

    const currentProject = (project) => {
        dispatch({
            type: CURRENT_PROJECT,
            payload: project
        })
    }

    const showError = () => {
        dispatch({
            type: SHOW_ERROR
        })
    }

    const deleteProject = (projectId) => {
        dispatch({
            type:DELETE_PROJECT,
            payload: projectId
        })
    }

    return (
         <ProjectContext.Provider
            value={{
                projectsList: state.projectsList,
                newProjectForm: state.newProjectForm,
                formError: state.formError,
                projectSelected: state.projectSelected,
                currentProject,
                showForm,
                getProjects,
                addProject,
                showError,
                deleteProject
            }}
         >
             {props.children}
         </ProjectContext.Provider>
    )
}
export default ProjectState