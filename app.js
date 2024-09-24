const express = require("express"); // Importa el módulo 'express'
const path = require("path"); // Importa el módulo 'path' para manejar rutas
const app = express(); // Crea una instancia de Express
const connectDB = require("./database"); // Importa la función de conexión a MongoDB
const appPathWeb = "/app"; // Ruta base para la aplicación web a futuro se debe cambiar a api y app para la web
app.use(express.static(path.join(__dirname, "public"))); // Configura la carpeta 'public' para servir archivos estáticos
app.use(express.json()); // Habilita el uso de JSON que es lo que recibe el servidor desde el formulario

let db; // Variable para almacenar la conexión de la base de datos
const initDB = async () => {
  // Función para inicializar la conexión a la base de datos
  db = await connectDB(); // Establece y conecta a la base de datos
};
initDB(); // Inicializa la conexión a la base de datos

//Agregar contacto
app.post(appPathWeb + "/:email", async (req, res) => {
  try {
    const col = db.collection("contactos"); //Colección o tabla de contactos

    const user = col.findOne({ email: req.params.email }); //Busca si el usuario ya existe
    if (user) {
      //Si el contacto ya existe haga lo siguiente
      res.status(400).json({ mensaje: "El contacto ya existe" });
    } else {
      //Si no existe el contacto haga lo siguiente:
      await col.insertOne({
        email: req.params.email,
        names: req.body.names,
        surnames: req.body.surnames,
        group: req.body.group,
      });
      res.status(200).json({ mensaje: `Contacto Agregado` }); //Mensaje de confirmación
    }
  } catch (error) {
    //Mensaje de error en caso de que no se pueda agregar el contacto
    res.status(400).json({ mensaje: "Defecto al agregar contacto:" + error }); //Mensaje de error en caso de que no se pueda agregar el contacto
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
