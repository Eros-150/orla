import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Row, Col, Image, Modal, Accordion } from "react-bootstrap";
import {} from "react-bootstrap";

const Orla = ({ alumns }) => {
  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState(null);

  const handleClick = (alumno) => {
    setAlumnoSeleccionado(alumno);
  };

  const handleClose = () => {
    setAlumnoSeleccionado(null);
  };

  return (
    <div className="row">
      {alumns.map((alumno) => (
        <div className="col-md-2" key={alumno.id}>
          <div className="card" onClick={() => handleClick(alumno)}>
            <Image
              src={alumno.image}
              alt={alumno.nombre}
              rounded
              className="img-fluid card-img-top"
              thumbnail
              roundedCircle
            />

            <div className="card-body">
              <h5 className="card-title text-center">{alumno.nombre}</h5>
            </div>
          </div>
          <Modal
            className="text-center"
            show={alumnoSeleccionado === alumno}
            onHide={handleClose}
          >
            <Modal.Header closeButton>
              <Modal.Title className="text-center">{alumno.nombre}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="text-center">
                <Image
                  src={alumno.image}
                  alt={alumno.nombre}
                  rounded
                  className="img-fluid"
                  thumbnail
                  roundedCircle
                />
                <Accordion defaultActiveKey={0}>
                  <Accordion.Item eventKey={0}>
                    <Accordion.Header>DESCRIPCION</Accordion.Header>
                    <Accordion.Body>{alumno.descripcion}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <Accordion defaultActiveKey={0}>
                  <Accordion.Item eventKey={0}>
                    <Accordion.Header>PROYECTOS</Accordion.Header>
                    <Accordion.Body>
                      {alumno.proyectos.map((proyecto) => (
                        <>
                          <h4>{proyecto.nombre}</h4>
                          <p>{proyecto.descripcion}</p>
                        </>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <Accordion defaultActiveKey={0}>
                  <Accordion.Item eventKey={0}>
                    <Accordion.Header>CONTACTO</Accordion.Header>
                    <Accordion.Body>
                      <p>Email: {alumno.contacto.email}</p>
                      <p>Linkedin: {alumno.contacto.linkedin}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      ))}
    </div>
  );
};

export default Orla;
