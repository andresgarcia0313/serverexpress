const express = require("express"); // Importa el módulo 'express'
const path = require("path"); // Importa el módulo 'path' para manejar rutas
const app = express(); // Crea una instancia de Express
const appPathWeb = "/app";
// Configura la carpeta 'public' para servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));
app.use(appPathWeb, express.static(path.join(__dirname, "app")));
//body parser
app.use(express.json());

//Agregar contacto
app.post(appPathWeb + "/:email", (req, res) => {
  try {
    const { email } = req.params; // Obtener los nombres del parámetro de la URL
    const { names, surnames, group } = req.body; // Obtener los datos del cuerpo de la solicitud
    data = {
      email: email,
      names: names,
      surnames: surnames,
      group: group,
    };
    console.log(data);
    // Respuesta exitosa
    res.status(200).json({
      mensaje: `Contacto de ${email} ${surnames} agregado exitosamente con el correo ${email} y grupo ${group}.`,
    });
  } catch (error) {
    res.status(400).json({
      mensaje: "Error al agregar:" + error,
    });
  }
});

// Inicia el servidor solo si este archivo es el principal
if (require.main === module) {
  // Establece el puerto, priorizando la variable de entorno PORT
  const PORT = process.env.PORT || 3000;
  // Escucha las peticiones en el puerto definido
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`); // Mensaje de confirmación
  });
}

// Exporta la aplicación para su uso en otros módulos
module.exports = app; // Permite que Vercel ejecute el servidor
