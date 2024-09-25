const { MongoClient } = require("mongodb"); // Importa MongoClient de la librería nativa de MongoDB
let db; // Variable para almacenar la conexión de la base de datos
let url = process.env.MONGODB_URL;
async function connectDB() {
  try {
    if (db) return db; // Si la conexión ya está establecida, retorna la conexión
    db = (await MongoClient.connect(url)).db("contactosDB"); // Conecta y selecciona la base de datos
    return db;
  } catch (e) {
    console.error("Error conectando a la base de datos:", e);
    throw e;
  }
}
module.exports = connectDB; // Exporta la función de conexión para usarla en otros archivos
