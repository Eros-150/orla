import React from "react";
import "./App.css";
import jsonAlumnos from "./components/alumnos.json";
import jsonProfes from "./components/profes.json";

import Orla from "./components/orla";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import FormProjects from "./components/addProjects/formProjects";

const App = () => {
  return (
    <>
      <div className="container">
        {/*
        
                <h1 className="text-center">PROFESORADO</h1>
        <Orla persons={jsonProfes.profes} />

        <h1 h1 className="text-center">
          ALUMNOS
        </h1>
        <Orla persons={jsonAlumnos.alumns} />

        */}

        <FormProjects/>
    </div>
    </>
  );
};

export default App;
