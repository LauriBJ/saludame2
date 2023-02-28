/* Nombre: Laura V. Buttner J.
Misión: al ingresar a http://localhost:3000/makers/juan la aplicación 
debe mostrar el texto Hola Juan! dentro de una etiqueta h1 */

const express = require('express');
const app = express();

app.get("/makers/:nombre", (req,res) => {
    let nombre = req.params.nombre
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1)
    res.send(`<h1>Hola ${nombre}! <\h1>`)
})

app.listen(3000,() => console.log("escuchando"))