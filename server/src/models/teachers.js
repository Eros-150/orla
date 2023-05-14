const mongoose = require("mongoose");

const profesorSchema = new mongoose.Schema({
    id: Number,
    image: String,
    nombre: String,
    descripcion: String,
    licenciaturas: [{
        titulo: String,
        universidad: String
    }],
    contacto: {
        email: String,
        linkedin: String
    }
});

const Profesor = mongoose.model("teachers", profesorSchema);

module.exports = Profesor;