const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('HOLA');
});

app.listen(3000, function() {
 console.log('Servidor iniciado en el puerto 3000');
});