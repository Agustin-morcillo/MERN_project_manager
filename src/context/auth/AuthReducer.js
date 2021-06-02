import {
    REGISTRATION_SUCCESSFUL,
    REGISTRATION_ERROR,
    GET_USER,
    LOGIN_SUCCESSFUL,
    LOGIN_ERROR,
    LOGOUT
} from "../../types"

export default (state,action) => {
    switch (action.type) {
        case REGISTRATION_SUCCESSFUL:
        case LOGIN_SUCCESSFUL:
            localStorage.setItem("token", action.payload)
            return {
                ...state,
                auth: true,
                message: null,
                loading: false
            }
        case REGISTRATION_ERROR:
        case LOGIN_ERROR:
            localStorage.removeItem("token")
            return {
                token: null,
                auth: null,
                user: null,
                message: action.payload,
                loading: false
            }
        case GET_USER: 
            return {
                ...state,
                auth: true,
                user: action.payload,
                loading: false
            }
        case LOGOUT:
            localStorage.removeItem("token")
            return {
                token: null,
                auth: null,
                user: null,
                message: null,
                loading: false
            }
        default:
            return state
    }
}