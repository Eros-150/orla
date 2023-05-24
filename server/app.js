const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
const Alumno = require("./src/models/alumns");
const Profesor = require("./src/models/teachers");
session = require('express-session');

app.use(
  cors({
    origin: ["http://localhost", "http://localhost:3000"], // CON ESTO DECIMOS DONDE ESTA EL CLIENTE
    methods: ["POST", "PUT", "GET", "DELETE", "OPTIONS", "HEAD"],
    credentials: true,
  })
);

mongoose.connect("mongodb+srv://eros:Joiser12@erosm6.x3lql.mongodb.net/orla", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));

db.once("open", () => {
  console.log("MongoDB OK");
});

const hashPassword = async (password) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

const comparePassword = async (password, hashedPassword) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};

app.put("/api/proyectos", async (req, res) => {
  const { name, nameProject, description, url } = req.body;

  console.log("DATOS RECIBIDOS " + req.body);

  try {
    const usuario = await db
      .collection("alumns")
      .findOneAndUpdate(
        { nombre: name },
        {
          $push: {
            proyectos: { nombre: nameProject, descripcion: description, url },
          },
        },
        { new: true }
      );

    res.json(usuario);
    console.log("REGISTRO ACTUALIZADO: " + name);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar usuario", error });
  }
});

app.get("/api/alumnos", async (req, res) => {
  try {
    const alumnos = await Alumno.find();
    res.json(alumnos);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error al obtener los estudiantes");
  }
});

app.get("/api/profes", async (req, res) => {
  try {
    const profesor = await Profesor.find();
    res.json(profesor);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error al obtener los profesores");
  }
});

app.post("/api/login", async (req, res) => {
  /* PWD: 1234 */
  const { name, password } = req.body;
  try {
    const user = await db
      .collection("alumns")
      .findOne({ nombre: name }, { pwd: 1 });
    if (user && user.nombre) {
      console.log(user.nombre);
      console.log("El usuario existe");
      const isMatch = await comparePassword(password, user.pwd);
      if (isMatch) {
        console.log("PWD OK");
        return res.status(200).json({ message: "Inicio de sesión exitoso" });
      } else {
        console.log("PWD NOT OK");
        return res.status(401).json({ error: "Credenciales incorrectas" });
      }
    } else {
      console.log("El usuario no existe");
      return res.status(401).json({ error: "El usuario no existe" });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Ha ocurrido un error al actualizar la contraseña" });
  }
  


});

app.listen(3001, () => {
  console.log("Servidor iniciado en el puerto 3001");
});

/* PARA UPDATEAR UN REGISTRO
    const updatedUser = await db.collection("alumns").findOneAndUpdate(
      { nombre: name },
      { $set: { pwd: hashedPassword } },
      { new: true }
    );

*/
