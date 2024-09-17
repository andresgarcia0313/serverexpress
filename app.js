const express = require('express');
const path = require('path');
const app = express();

// Configura la carpeta 'public' para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

if (require.main === module) {// Si no esta en vercel ejecuta esto:
  // Solo escucha en el puerto 3000 si es el archivo principal ejecutado localmente sin vercel
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Serviendo en http://localhost:${PORT}`);
  });
}

module.exports = app;// se agrega esto para que vercel pueda ejecutar el servidor
