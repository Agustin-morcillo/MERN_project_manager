import React, {useContext} from 'react'
import {Route} from "react-router-dom"
import AuthContext from "../../context/auth/AuthContext"

export default function PublicRoute({component: Component, ...props}) {

    const authContext = useContext(AuthContext)
    const {auth} = authContext

    const token = localStorage.getItem("token")

    if(!auth && !token) {
        return <Component {...props} />
    } else {
        return (
            <Route component={() => {
                window.location.href = `${process.env.REACT_APP_LOCAL_URL}projects` || "https://mern-tasks-sigma.vercel.app/projects"
                return null
            }} 
            />
        )
    }
} 

   