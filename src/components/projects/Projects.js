import React from 'react'
import SideBar from "../layout/SideBar"
import Header from "../projects/Header"
import TaskForm from "../tasks/TaskForm"
import TaskList from "../tasks/TasksList"

export default function Projects() {
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
