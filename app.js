const express = require('express'); // Usa el código de express que permite las funcionalidades de un servidor web
const app = express(); // Crea una nueva aplicación Express con las funcionalidades del servidor web

app.use(express.static('public')); // Sirve archivos desde la carpeta 'public' permitiendo la funcionalidad de un servidor web

app.listen(3000, () => { // Inicia el servidor en el puerto 3000
  console.log(`Servidor funcionando en http://localhost:3000`); // Muestra mensaje en consola
});
