import React, { useState } from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Row, Col, Image, Modal, Accordion } from "react-bootstrap";
import {} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";

const ModalPersona = ({ persona, personaSeleccionada, handleClose }) => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <>
      <Modal
        style={{
          backgroundImage:
            "url(https://www.10wallpaper.com/wallpaper/1920x1080/1511/line_light_background-Design_HD_Wallpaper_1920x1080.jpg)",
        }}
        className="text-center"
        show={personaSeleccionada === persona}
        onHide={handleClose}
      >
        <Modal.Header closeButton className="shadow-lg"></Modal.Header>
        <Modal.Body id="gradient" className="shadow-lg">
          <Modal.Title className="text-center">
            <h1 className="modalTitle fw-bold">{persona.nombre}</h1>
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
                        <a href={proyecto.url} target="_blank">
                          <h4>{proyecto.nombre}</h4>
                        </a>
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
                            <FontAwesomeIcon icon={faUserGraduate} />
                            {licenciatura.titulo}
                            <span className="badge bg-info rounded-pill text-light">
                              {licenciatura.universidad}
                            </span>
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
                  <div className="m-auto">
                    <a
                      href={"mailto:" + persona.contacto.email}
                      className="mx-3"
                    >
                      <FontAwesomeIcon icon={faEnvelope} fade size="2xl" />
                    </a>
                    <a
                      href={persona.contacto.linkedin}
                      className="mx-3"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} fade size="2xl" />
                    </a>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Modal.Body>

        <div className="justify-content-center shadow-lg">
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
