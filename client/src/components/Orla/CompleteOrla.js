import React, { useEffect, useState } from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {} from "react-bootstrap";
import Orla from "./OrlaEstructure";
import axios from "axios";

const CompleteOrla = ({}) => {
  const [alumnos, setAlumnos] = useState([]);
  const [profes, setProfes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/alumnos")
      .then((res) => setAlumnos(res.data))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:3001/api/profes")
      .then((res) => setProfes(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container my-5 neon-border crystal2">
        <h1 className="text-center text-white fw-bold mt-5">
          PROMOCIÓN DAW 2022-2023
        </h1>
        <h2 className="text-center mt-5 text-white fw-bold">PROFESORADO</h2>
        <Orla persons={profes} />
        <h2 className="text-center mt-5 text-white fw-bold">ALUMNOS</h2>
        <Orla persons={alumnos} />
      </div>
    </>
  );
};

export default CompleteOrla;
