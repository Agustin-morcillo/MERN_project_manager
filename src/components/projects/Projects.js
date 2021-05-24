import React from 'react'
import SideBar from "../layout/SideBar"
import Header from "../projects/Header"
import TaskForm from "../tasks/TaskForm"
import TaskList from "../tasks/TasksList"

export default function Projects() {
    return (
        <div className="contenedor-app">
           <SideBar />
            <div className="seccion-principal">
                <Header />
                <main>
                    <TaskForm />
                    <div className="contenedor-tareas">
                        <TaskList />
                    </div>
                </main>
            </div>
        </div>
    )
}
