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
    <div className="container">
      <h1 className="text-center text-white mt-5">PROFESORADO</h1>
      <Orla persons={profes} />
      <h1 h1 className="text-center text-white mt-5">
        ALUMNOS
      </h1>
      <Orla persons={alumnos} />
    </div>
  );
};

export default CompleteOrla;
