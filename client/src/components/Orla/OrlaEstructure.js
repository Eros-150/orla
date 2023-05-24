import React, { useState } from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Row, Col, Image, Modal, Accordion } from "react-bootstrap";
import {} from "react-bootstrap";
import ModalPersona from "../Modal/ModalPersona";

const Orla = ({ persons }) => {
  const [personaSeleccionada, setPersonaSeleccionada] = useState(null);

  const handleClick = (persona) => {
    setPersonaSeleccionada(persona);
  };

  const handleClose = () => {
    setPersonaSeleccionada(null);
  };

  return (
    <div className="row crystal" style={{ marginTop: "5%" }}>
      {persons.map((persona) => (
        <div className="col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2">
          <div
            className="card"
            style={{
              background: "transparent",
              marginTop: "20%",
              border: "none",
            }}
            onClick={() => handleClick(persona)}
          >
            <Image
              src={persona.image}
              alt={persona.nombre}
              rounded
              className="img-fluid card-img-top"
              thumbnail
              roundedCircle
            />

            <div className="card-body">
              <h5 className="card-title text-center">{persona.nombre}</h5>
              {/* className="name" */}
            </div>
          </div>

          <ModalPersona
            persona={persona}
            personaSeleccionada={personaSeleccionada}
            handleClose={handleClose}
          />
        </div>
      ))}
    </div>
  );
};

export default Orla;
