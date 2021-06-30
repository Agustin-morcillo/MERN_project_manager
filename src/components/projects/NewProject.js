import React, { useContext, useState } from "react"
import ProyectContext from "../../context/projects/ProjectContext"

export default function NewProject() {
  const [newProject, setNewProject] = useState({
    name: "",
    id: "",
  })
  const { name } = newProject

  const ProjectsContext = useContext(ProyectContext)

  const { newProjectForm, showForm } = ProjectsContext
  const { addProject, formError, showFormError } = ProjectsContext

  const handleChange = (e) => {
    setNewProject({
      ...newProject,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name.trim()) {
      return showFormError()
    }

    addProject(newProject)

    setNewProject({
      name: "",
    })
  }

  return (
    <>
      <button className="btn btn-block btn-primary" onClick={() => showForm()}>
        Nuevo Proyecto
      </button>

      {newProjectForm && (
        <form className="new-project-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-text"
            value={name}
            placeholder="Nombre Proyecto"
            name="name"
            onChange={handleChange}
          />

          <button className="btn btn-add btn-block">
            <i className="fas fa-plus icon"></i>Agregar Proyecto
          </button>
        </form>
      )}
      {formError && <p className="message error">Debes ingresar un nombre</p>}
    </>
  )
}
