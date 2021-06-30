import React, { useContext, useEffect } from "react"

import SideBar from "../layout/SideBar"
import Header from "../projects/Header"
import TaskForm from "../tasks/TaskForm"
import TaskList from "../tasks/TasksList"

import AuthContext from "../../context/auth/AuthContext"

export default function Projects() {
  const authContext = useContext(AuthContext)
  const { getAuthUser } = authContext

  useEffect(() => {
    getAuthUser()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="app-container">
      <SideBar />
      <div className="main-section">
        <Header />
        <main>
          <TaskForm />
          <div className="tasks-container">
            <TaskList />
          </div>
        </main>
      </div>
    </div>
  )
}
