import React, { useState } from "react";
import "../../App.css"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Row, Col, Image, Modal, Accordion } from "react-bootstrap";
import { } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";


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
          <Modal.Title className="text-center">
              <h1 className="modalTitle">{persona.nombre}</h1>
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
                      <div className="proyecto-container">
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
                    <ul className="list-group">
                      {persona.licenciaturas.map((licenciatura) => (
                        <div>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            <FontAwesomeIcon icon={faUserGraduate} />{licenciatura.titulo}
                            <span className="badge bg-info rounded-pill text-light">{licenciatura.universidad}</span>
                          </li>
                        </div>
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
                  <div>
                    <a href="mailto:{persona.contacto.email}">
                      <FontAwesomeIcon icon={faEnvelope} fade size="2xl" /></a>
                    <a href="{persona.contacto.linkedin}"><FontAwesomeIcon icon={faLinkedinIn} fade size="2xl" /></a>
                  </div>
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
