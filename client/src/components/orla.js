import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Row, Col, Image, Modal, Accordion } from "react-bootstrap";
import {} from "react-bootstrap";
import ModalPersona from "./Modal/ModalPersona";

const Orla = ({ persons }) => {
  const [personaSeleccionada, setPersonaSeleccionada] = useState(null);

  const handleClick = (persona) => {
    setPersonaSeleccionada(persona);
  };

  const handleClose = () => {
    setPersonaSeleccionada(null);
  };

  return (
    <div className="row">
      {persons.map((persona) => (
        <div className="col-md-2" key={persona.id}>
          <div className="card" onClick={() => handleClick(persona)}>
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
            </div>
          </div>


          <ModalPersona
          persona={persona}
          personaSeleccionada={personaSeleccionada}
          handleClose={handleClose}/>


        </div>
      ))}
    </div>
  );
};

export default Orla;
