const mongoose = require("mongoose");

const alumnoSchema = new mongoose.Schema({
    id: Number,
    image: String,
    nombre: String,
    descripcion: String,
    proyectos: [{
        nombre: String,
        descripcion: String,
        url: String
    }],
    contacto: {
        email: String,
        linkedin: String
    }
});

const Alumno = mongoose.model("alumns", alumnoSchema);

module.exports = Alumno;