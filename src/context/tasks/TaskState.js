import React, { useReducer } from "react"
import TaskContext from "./TaskContext"
import TaskReducer from "./TaskReducer"
import axiosClient from "../../config/axios"
import {
  PROJECT_TASKS,
  ADD_TASK,
  TASK_FORM_ERROR,
  DELETE_TASK,
  CURRENT_TASK,
  EDIT_TASK,
} from "../../types"

const TaskState = (props) => {
  const initialState = {
    projectTasks: [],
    formError: false,
    taskSelected: null,
  }

  const [state, dispatch] = useReducer(TaskReducer, initialState)

  const getTasks = async (projectId) => {
    try {
      const response = await axiosClient.get("/api/tasks", {
        params: { projectId },
      })

      dispatch({
        type: PROJECT_TASKS,
        payload: response.data.taskList,
      })
    } catch (error) {
      console.log(error)
    }
  }

  const addTask = async (task) => {
    try {
      const response = await axiosClient.post("/api/tasks/create", task)

      dispatch({
        type: ADD_TASK,
        payload: response.data.details,
      })
    } catch (error) {
      console.log(error)
    }
  }

  const showFormError = () => {
    dispatch({
      type: TASK_FORM_ERROR,
    })
  }

  const removeTask = async (taskId, projectId) => {
    try {
      await axiosClient.delete(`/api/tasks/delete/${taskId}`, {
        params: { projectId },
      })

      dispatch({
        type: DELETE_TASK,
        payload: taskId,
      })
    } catch (error) {
      console.log(error)
    }
  }

  const editTask = async (task) => {
    try {
      const response = await axiosClient.put(
        `/api/tasks/edit/${task._id}`,
        task
      )

      dispatch({
        type: EDIT_TASK,
        payload: response.data.details,
      })
    } catch (error) {
      console.log(error)
    }
  }

  const getCurrentTask = (task) => {
    dispatch({
      type: CURRENT_TASK,
      payload: task,
    })
  }

  return (
    <TaskContext.Provider
      value={{
        projectTasks: state.projectTasks,
        formError: state.formError,
        taskSelected: state.taskSelected,
        getTasks,
        addTask,
        showFormError,
        removeTask,
        getCurrentTask,
        editTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskState
