import React, { useReducer } from "react"
import AlertReducer from "./AlertReducer"
import AlertContext from "./AlertContext"
import { SHOW_ALERT, HIDE_ALERT } from "../../types"

const AlertState = (props) => {
  const initialState = {
    alert: null,
  }

  const [state, dispatch] = useReducer(AlertReducer, initialState)

  const showAlert = (msg, category) => {
    dispatch({
      type: SHOW_ALERT,
      payload: {
        msg,
        category,
      },
    })
  }

  const hideAlert = () => {
    dispatch({
      type: HIDE_ALERT,
    })
  }

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        showAlert,
        hideAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState
