import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Row, Col, Image, Modal, Accordion } from "react-bootstrap";
import {} from "react-bootstrap";

const ModalPersona = ({ persona, personaSeleccionada, handleClose }) => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <>
      <Modal
        className="text-center"
        show={personaSeleccionada === persona}
        onHide={handleClose}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Modal.Title className="text-center" style={{ marginBottom: "5%" }}>
            <div style={{ textTransform: "uppercase" }}>{persona.nombre}</div>
          </Modal.Title>
          <div className="text-center">
            <Image
              src={persona.image}
              alt={persona.nombre}
              rounded
              className="img-fluid"
              thumbnail
              roundedCircle
            />
            <Accordion defaultActiveKey={0}>
              <Accordion.Item eventKey={0}>
                <Accordion.Header>DESCRIPCION</Accordion.Header>
                <Accordion.Body>{persona.descripcion}</Accordion.Body>
              </Accordion.Item>
            </Accordion>

            {persona.proyectos && (
              <Accordion defaultActiveKey={0}>
                <Accordion.Item eventKey={0}>
                  <Accordion.Header>PROYECTOS</Accordion.Header>
                  <Accordion.Body>
                    {persona.proyectos.map((proyecto) => (
                      <div key={proyecto.nombre}>
                        <a href={proyecto.url}><h4>{proyecto.nombre}</h4></a>
                        <p>{proyecto.descripcion}</p>
                      </div>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            )}

            {persona.licenciaturas && (
              <Accordion defaultActiveKey={0}>
                <Accordion.Item eventKey={0}>
                  <Accordion.Header>LICENCIATURAS</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                    {Object.keys(persona.licenciaturas).map((key) => (
                      <li className="text-center" key={key}>{persona.licenciaturas[key]}</li>
                    ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            )}

            <Accordion defaultActiveKey={0}>
              <Accordion.Item eventKey={0}>
                <Accordion.Header>CONTACTO</Accordion.Header>
                <Accordion.Body>
                  <p>Email: {persona.contacto.email}</p>
                  <p>Linkedin: {persona.contacto.linkedin}</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Modal.Body>

        <div className="justify-content-center" style={{ marginBottom: "5%" }}>
          <div>
            <p>Promoción 2022-23</p>
            <span>© MONLAU GROUP {year}</span>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalPersona;
