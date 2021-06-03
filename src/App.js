import React from 'react'
import {BrowserRouter as Router, Switch} from "react-router-dom"
import Login from "./components/users/Login"
import Register from "./components/users/Register"
import Projects from "./components/projects/Projects"
import ProjectState from "./context/projects/ProjectState"
import TaskState from "./context/tasks/TaskState"
import AlertState from "./context/alerts/AlertState"
import AuthState from "./context/auth/AuthState"
import PrivateRoute from "./components/routes/PrivateRoute"
import PublicRoute from "./components/routes/PublicRoute"

function App() {
  return (
    <ProjectState>
      <TaskState>
        <AlertState>
          <AuthState>
            <Router>
              <Switch>
                <PublicRoute exact path="/" component={Login} />
                <PublicRoute exact path="/register" component={Register} />
                <PrivateRoute exact path="/projects" component={Projects} />
              </Switch>
            </Router>
          </AuthState>
        </AlertState>
      </TaskState>
    </ProjectState>
  );
}

export default App;
