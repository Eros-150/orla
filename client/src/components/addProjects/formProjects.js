import React, { useState } from "react";
import axios from "axios";

const FormProjects = () => {
  const URL = "http://localhost:3000/api/proyectos";

  const [formData, setFormData] = useState({
    name: "",
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
      .post(URL, formData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Alumno:
          <input
            type="text"
            value={formData.name}
            name="name"
            onChange={handleChange}
          />
                    {/* CON EL INPUT FUNCIONA

          <select name="name" value={formData.name} onChange={handleChange} required>
            <option value="Eros Ruiz Ramirez">Eros Ruiz Ramirez</option>
            <option value="Joan Angel Diaz Pernias">Joan Angel Diaz Pernias</option>
            <option value="Sergi Perez Mari">Sergi Perez Mari</option>
          </select>
                    */}

        </label>
      </div>
      <div>
        <label>
          Proyecto:
          <input
            type="text"
            value={formData.nameProject}
            name="nameProject"
            onChange={handleChange}
            required          />
        </label>
      </div>
      <div>
        <label>
          Descripcion:
          <input
            type="text"
            value={formData.description}
            name="description"
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          URL:
          <input
            type="url"
            value={formData.url}
            name="url"
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <input type="submit" value="Enviar" />
    </form>
  );
};

export default FormProjects;
