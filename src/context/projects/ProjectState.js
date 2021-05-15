import React, {useReducer} from 'react'
import ProjectContext from "./ProjectContext"
import ProjectReducer from "./ProjectReducer"

const ProjectState = (props) => {
    const initialState = {
        createProject: false,
    }

    const [state, dispatch] = useReducer(ProjectReducer, initialState)

    return (
         <ProjectContext.Provider
            value={{
                createProject: state.createProject
            }}
         >
             {props.children}
         </ProjectContext.Provider>
    )
}
export default ProjectState