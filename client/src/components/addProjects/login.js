import React, { useState } from "react";
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
import axios from "axios";
import "../../App.css";
import FormProjects from "./formProjects";
import logo from "../../assets/images/logo.png";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3001/api/login", formData)
      .then((response) => {
        console.log(response.data);
        setError("");
        setLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
        setError("Credenciales incorrectas");
      });
  };

  if (loggedIn) {
    return <FormProjects username={formData.name} />;
  }

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md={{ span: 12 }}>
            <Card
              style={{
                background:
                  "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                border: "8px solid white",
              }}
            >
              <Card.Body>
                <Row>
                  <Col md={6} className="border-right text-center text-white mt-5">
                    <h4>Iniciar sesión</h4>
                    <p>Por favor, ingrese sus credenciales como alumno</p>
                    <Image
                      src={logo}
                      className="img-fluid"
                      style={{ maxWidth: "35%" }}
                    />
                  </Col>
                  <Col md={6} className="mb-5">
                    <Form onSubmit={handleSubmit}>
                      <div className="formCool bg-dark text-white mt-5">
                        <div class="grupo">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                          <span class="barra"></span>
                          <label>Nombre</label>
                        </div>
                        <div class="grupo">
                          <input
                            type="password"
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                          />
                          <span class="barra"></span>
                          <label>Password</label>
                        </div>
                        {error && (
                        <div
                          className="text-danger text-center mt-5 fw-bold"
                        >
                          {error}
                        </div>
                      )}
                        <div className="text-center my-3">
                          <button className="button-85" type="submit" block>
                            Ingresar
                          </button>
                        </div>
                      </div>
                    </Form>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
