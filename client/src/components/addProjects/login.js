import React, { useState } from "react";
import { Card, Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import "../../App.css";
import FormProjects from "./FormProjects";

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

        axios.post("http://localhost:3001/api/login", formData)
            .then(response => {
                console.log(response.data);
                setError("");
                setLoggedIn(true);
            })
            .catch(error => {
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
                        <Card style={{
                            background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)", border: "8px solid white"
                        }}>
                            <Card.Body>
                                <Row>
                                    <Col md={6} className="border-right text-center text-white" >
                                        <h4>Iniciar sesión</h4>
                                        <p>Por favor, ingrese sus credenciales como alumno</p>
                                        <Image
                                            src={"https://www.monlau.com/wp-content/uploads/2019/02/Monlau-EstudiosPro-Castellano-ok.png"}
                                            className="img-fluid"
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Form onSubmit={handleSubmit} className="text-white">
                                            <Form.Group controlId="formBasicName">
                                                <Form.Label>Usuario</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Ingrese su usuario"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label className="text-white">Contraseña</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Ingrese su contraseña"
                                                    name="password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                            {error && <div className="text-white text-center" style={{ marginTop: "5%" }}>{error}</div>}

                                            <div className="text-center" style={{ marginTop: "5%" }}>
                                                <button className="button-85" type="submit" block>
                                                    Ingresar
                                                </button>
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
