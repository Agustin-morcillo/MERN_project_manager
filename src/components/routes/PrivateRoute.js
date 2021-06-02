import React, {useContext, useEffect} from 'react'
import {Route, Redirect} from "react-router-dom"
import AuthContext from "../../context/auth/AuthContext"

export default function PrivateRoute({component: Component, ...props}) {

    const authContext = useContext(AuthContext)
    const {auth, getAuthUser,loading} = authContext

    useEffect(() => {
        getAuthUser()
    }, [])

    return (
       <>
        <Route {...props} render={props => !auth && !loading ? 
                <Redirect to="/" />
                :
                <Component {...props} />
            }>
        </Route>
       </>
    )
}

