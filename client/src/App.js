import React from 'react';
import './App.css';
import json from "./components/alumnos.json"
import Orla from './components/orla';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";


const App=()=>  {
  return (
    <div className='container'>
    <Orla alumns={json.alumns} />
    </div>
  );
}

export default App;
