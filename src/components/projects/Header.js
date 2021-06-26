import React, { useContext, useEffect } from "react"
import AuthContext from "../../context/auth/AuthContext"

export default function Header() {
  const authContext = useContext(AuthContext)
  const { getAuthUser, user, userLogout } = authContext

  useEffect(() => {
    getAuthUser()
    // eslint-disable-next-line
  }, [])

  return (
    <header className="app-header">
      {user && (
        <p className="user-name">
          Hola <span>{user.name}</span>
        </p>
      )}
      <div>
        <button className="btn btn-blank logout" onClick={() => userLogout()}>
          <i className="fas fa-sign-out-alt icon"></i>Logout
        </button>
      </div>
    </header>
  )
}
