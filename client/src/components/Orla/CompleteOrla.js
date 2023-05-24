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
    <div className="container border border-light mt-5" style={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLbqHsoIMMlQfnVWmbqZli_0DFSSgBYqGopYaiW85WNAmgHBJkehjIfwFXecCzq3lNgFM&usqp=CAU)",backgroundSize:"100% 100%",backgroundRepeat:"no-repeat" }}>
      <h1 className="text-center mt-5 text-white">PROFESORADO</h1>
      <Orla persons={profes} />
      <h1 h1 className="text-center mt-5 text-white">
        ALUMNOS
      </h1>
      <Orla persons={alumnos} />
    </div>
  );
};

export default CompleteOrla;
