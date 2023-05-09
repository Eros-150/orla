import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Row, Col, Image, Modal, Accordion } from "react-bootstrap";
import {} from "react-bootstrap";
import AlumnModal from "./Modal/alumnModal";
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

          <AlumnModal
            alumno={alumno}
            alumnoSeleccionado={alumnoSeleccionado}
            handleClose={handleClose}
          />
        </div>
      ))}
    </div>
  );
};

export default Orla;
