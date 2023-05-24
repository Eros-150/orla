import React, { useState } from "react";
import axios from "axios";
import {
  Card,
  Form,
  Button,
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "../../App.css";

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
        alert("Project updated correctly!");
        
        setFormData({
          ...formData,
          nameProject: "",
          description: "",
          url: ""
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <h1 className="title text-center">Bienvenido, {username}!</h1>
      <h3 className="title text-center">Formulario de Proyectos</h3>

      <Form onSubmit={handleSubmit} className="text-white m-auto w-50">
        <Form.Group controlId="nameProject" className="my-3">
          <Form.Label>Nombre del proyecto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre del proyecto"
            name="nameProject"
            value={formData.nameProject}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="description" className="my-3">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            placeholder="Descripción del proyecto"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="url" className="my-3">
          <Form.Label>URL</Form.Label>
          <Form.Control
            type="url"
            placeholder="GitHub del proyecto"
            name="url"
            value={formData.url}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <div className="text-center">
          <Button
            className="button-85"
            type="submit"
            style={{ marginTop: "3%" }}
          >
            Enviar
          </Button>
        </div>
      </Form>
    </>
  );
};

export default FormProjects;
