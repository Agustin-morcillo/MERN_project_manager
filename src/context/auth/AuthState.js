import React, {useReducer} from 'react'
import AuthContext from "./AuthContext"
import AuthReducer from "./AuthReducer"
import axiosClient from "../../config/axios"
import authToken from "../../config/authToken"
import {
    REGISTRATION_SUCCESSFUL,
    REGISTRATION_ERROR,
    GET_USER,
    LOGIN_SUCCESSFUL,
    LOGIN_ERROR,
    LOGOUT
} from "../../types"


const AuthState = (props) => {
    
    const initialState = {
        token: localStorage.getItem("token"),
        auth: null,
        user: null,
        message: null,
        loading: true
    }

    const [state,dispatch] = useReducer(AuthReducer, initialState)

    const registerUser = async (data) => {
        try {
            const response = await axiosClient.post("/api/users/register", data)
            console.log(response)
            dispatch({
                type: REGISTRATION_SUCCESSFUL,
                payload: response.data.token
            })
            getAuthUser()
        } catch (error) {
            console.log(error.response.data.errors[0].msg)
            const alert = {
                msg: error.response.data.errors[0].msg,
                category: "alerta-error"
            }
            dispatch({
                type: REGISTRATION_ERROR,
                payload: alert
            })  
        }
    }

    const getAuthUser = async () => {
        const token = localStorage.getItem("token")
        if(token) {
            authToken(token)
        } 
        
        try {
            const response = await axiosClient.get("/api/users")
            console.log(response.data)
            dispatch({
                type:GET_USER,
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    const userLogin = async (data) => {
        try {
            const response = await axiosClient.post("/api/users/login", data)
            console.log(response)
            dispatch({
                type: LOGIN_SUCCESSFUL,
                payload: response.data.token
            })
            getAuthUser()
        } catch (error) {
            console.log(error.response.data.errors[0])
            const alert = {
                msg: error.response.data.errors[0].msg,
                category: "alerta-error"
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alert
            })  
        }
    }

    const userLogout = () => {
        dispatch({
            type: LOGOUT
        })
    }

    return (
        <AuthContext.Provider
            value = {{
                token: state.token,
                auth: state.auth,
                user: state.user,
                message: state.message,
                loading: state.loading,
                registerUser,
                userLogin,
                getAuthUser,
                userLogout
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthState



