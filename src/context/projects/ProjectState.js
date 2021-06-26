import React, { useReducer } from "react"
import ProjectContext from "./ProjectContext"
import ProjectReducer from "./ProjectReducer"
import axiosClient from "../../config/axios"
import authToken from "../../config/authToken"
import {
  NEW_PROJECT_FORM,
  PROJECT_LIST,
  ADD_PROJECT,
  PROJECT_FORM_ERROR,
  CURRENT_PROJECT,
  DELETE_PROJECT,
} from "../../types"

const ProjectState = (props) => {
  const initialState = {
    newProjectForm: false,
    projectsList: [],
    formError: false,
    projectSelected: [],
  }

  const [state, dispatch] = useReducer(ProjectReducer, initialState)

  const showForm = () => {
    dispatch({
      type: NEW_PROJECT_FORM,
    })
  }

  const getProjects = async () => {
    const token = localStorage.getItem("token")
    if (token) {
      authToken(token)
    }

    try {
      const response = await axiosClient.get("/api/projects")

      dispatch({
        type: PROJECT_LIST,
        payload: response.data.projectList,
      })
    } catch (error) {
      console.log(error)
    }
  }

  const addProject = async (project) => {
    try {
      const response = await axiosClient.post("/api/projects/create", project)

      dispatch({
        type: ADD_PROJECT,
        payload: response.data.details,
      })
    } catch (error) {
      console.log(error)
    }
  }

  const currentProject = (projectId) => {
    dispatch({
      type: CURRENT_PROJECT,
      payload: projectId,
    })
  }

  const showFormError = () => {
    dispatch({
      type: PROJECT_FORM_ERROR,
    })
  }

  const deleteProject = async (projectId) => {
    try {
      await axiosClient.delete(`/api/projects/delete/${projectId}`)

      dispatch({
        type: DELETE_PROJECT,
        payload: projectId,
      })
    } catch (error) {
      console.log(error)
    }
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
        showFormError,
        deleteProject,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  )
}
export default ProjectState
