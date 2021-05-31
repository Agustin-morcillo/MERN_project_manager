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
            localStorage.setItem("token", action.payload)
            return {
                ...state,
                auth: true,
                message: null
            }
        case REGISTRATION_ERROR:
        case LOGIN_ERROR:
            localStorage.removeItem("token")
            return {
                ...state,
                token: null,
                message: action.payload
            }
        case GET_USER: 
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}