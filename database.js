const { MongoClient } = require("mongodb"); // Importa MongoClient de la librería nativa de MongoDB
let db; // Variable para almacenar la conexión de la base de datos
let url =
  "mongodb+srv://andresgarcia0313:iHunvQv0IzNCXwhh@mycluster.ldxus.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster";
async function connectDB() {
  try {
    if (db) return db; // Si ya estamos conectados, devuelve la conexión actual
    const client = await MongoClient.connect(url); // Conecta al servidor de MongoDB con la URL de conexión
    console.log("Conectado a la base de datos"); // Mensaje de confirmación
    db = client.db("contactosDB"); // Selecciona la base de datos
    return db;
  } catch (e) {
    console.error("Error conectando a la base de datos:", e);
    throw e;
  }
}
module.exports = connectDB; // Exporta la función de conexión para usarla en otros archivos
