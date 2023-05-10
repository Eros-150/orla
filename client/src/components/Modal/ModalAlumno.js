import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Row, Col, Image, Modal, Accordion } from "react-bootstrap";
import {} from "react-bootstrap";

const ModalAlumno = ({ persona, personaSeleccionada, handleClose }) => {
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
            {persona.nombre}
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

            {persona.proyectos?.map((proyecto) => (
              <Accordion defaultActiveKey={0}>
                <Accordion.Item eventKey={0}>
                  <Accordion.Header>PROYECTOS</Accordion.Header>
                  <Accordion.Body>
                    <h4>{proyecto.nombre}</h4>
                    <p>{proyecto.descripcion}</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            ))}

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

export default ModalAlumno;
