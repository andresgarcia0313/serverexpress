const express = require('express');
const app = express();

// Sirve archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Ruta principal
app.get("/", (req, res) => {
  res.send("Express en Vercel");
});

// Exporta la aplicación para el entorno sin servidor
if (require.main === module) {
  // Solo escucha en el puerto 3000 si es el archivo principal ejecutado localmente
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
  });
}

module.exports = app;
