const express = require("express");
const app = express();

const Alumnn = require('./src/models/alumn');
const fs = require('fs');

app.get("/", (req, res) => {
  res.send("HOLA pepe");
});

/* PARA SACAR LA INFO DE UN ALUMNO*/
app.get('/alumnos/:id', (req, res) => {
  // leer el archivo JSON
  fs.readFile('./ruta/alumnos.json', 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error al leer el archivo JSON');
    } else {
      // parsear el JSON a un objeto JavaScript
      const alumnos = JSON.parse(data);

      // buscar el objeto con la ID correspondiente
      const alumno = alumnos.find((a) => a.id === parseInt(req.params.id));

      if (alumno) {
        // crear un nuevo objeto Alumnn con los datos del alumno encontrado
        const alumnn = new Alumnn(alumno.id, alumno.nombre, alumno.descripcion, alumno.proyectos, alumno.contacto);

        // enviar el objeto Alumnn como respuesta
        res.json(alumnn);
      } else {
        res.status(404).send('No se encontró ningún alumno con la ID proporcionada');
      }
    }
  });
});

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});
