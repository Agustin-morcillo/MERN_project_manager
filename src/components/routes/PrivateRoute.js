import React, {useContext, useEffect} from 'react'
import {Route} from "react-router-dom"
import AuthContext from "../../context/auth/AuthContext"

export default function PrivateRoute({component: Component, ...props}) {

    const authContext = useContext(AuthContext)
    const {auth, getAuthUser} = authContext

    useEffect(() => {
        getAuthUser()
        // eslint-disable-next-line
    }, [])

    const token = localStorage.getItem("token")

    if(!auth && !token) {
        return (
            <Route component={() => {
                window.location.href = process.env.REACT_APP_LOCAL_URL || "https://mern-tasks-sigma.vercel.app/"
                return null
            }} 
            />
        )
    } else {
        return <Component {...props} />
    }
} 

   