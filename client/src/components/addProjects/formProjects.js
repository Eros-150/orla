import React, { useState } from "react";
import axios from "axios";
import "../../App.css"

const FormProjects = ({ username }) => {
  const URL = "http://localhost:3001/api/proyectos";
  const [formData, setFormData] = useState({
    name: username,
    nameProject: "",
    description: "",
    url: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(URL, formData)
      .then(function (response) {
        console.log(response);
        // Agregar algún tipo de feedback para el usuario
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <h1 className="title text-center">Bienvenido, {username}!</h1>
      <h3 className="title text-center">Formulario de Proyectos</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nameProject" className="form-label text-white">
            Nombre del proyecto
          </label>
          <input
            type="text"
            className="form-control"
            id="nameProject"
            name="nameProject"
            value={formData.nameProject}
            onChange={handleChange}
            placeholder="Nombre del proyecto"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label text-white">
            Descripción
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Descripción del proyecto"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="url" className="form-label text-white">
            URL
          </label>
          <input
            type="url"
            className="form-control"
            id="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
            placeholder="GitHub del proyecto"
            required
          />
        </div>
        <div className="text-center">
          <button className="button-85" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </>
  );
}

export default FormProjects;
