import React from 'react'
import SideBar from "../layout/SideBar"
import Header from "../projects/Header"

export default function Projects() {
    return (
        <div className="app-container">
           <SideBar />
            <div className="main-section">
                <Header />
                <main>
                    <div className="tasks-container">

                    </div>
                </main>
            </div>
        </div>
    )
}
