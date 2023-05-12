const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost"],
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
  console.log("MongoDB database connection established successfully");
});

app.post("/api/proyectos", async (req, res) => {
  const { name, nameProject, description, url } = req.body;

  console.log(name + " " + nameProject + " " + description + " " + url);

  try {
    const usuario = await db
      .collection("alumns")
      .findOneAndUpdate(
        { nombre: name },
        { $push: { proyectos: { nameProject, description, url } } },
        { new: true }
      );

    res.json(usuario);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar usuario", error });
  }
});

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});
