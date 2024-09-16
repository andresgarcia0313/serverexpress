

# README

## Descripción

Este proyecto utiliza **Express** para crear un servidor web básico en **Node.js**. El servidor está configurado para servir archivos estáticos desde una carpeta específica y escuchar en el puerto 3000.

## Instalación

1. **Clona el repositorio**:
   ```bash
   git clone <URL-del-repositorio>
   ```

2. **Navega a la carpeta del proyecto**:
   ```bash
   cd <nombre-del-proyecto>
   ```

3. **Instala las dependencias**:
   Asegúrate de tener [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) instalados. Luego, ejecuta:
   ```bash
   npm install
   ```

## Uso

1. **Ejecuta el servidor**:
   ```bash
   node <nombre-del-archivo>.js
   ```

2. **Accede a la aplicación**:
   Abre tu navegador y visita `http://localhost:3000`.

## Código

### Archivo Principal

```javascript
const express = require('express'); // Usa el código de express que permite las funcionalidades de un servidor web
const app = express(); // Crea una nueva aplicación Express con las funcionalidades del servidor web

app.use(express.static('public')); // Sirve archivos desde la carpeta 'public' permitiendo la funcionalidad de un servidor web

app.listen(3000, () => { // Inicia el servidor en el puerto 3000
  console.log(`Servidor funcionando en http://localhost:3000`); // Muestra mensaje en consola
});
```

### Explicación del Código

- **Línea 1**: Importa la biblioteca Express para crear el servidor web.
- **Línea 2**: Crea una instancia de la aplicación Express.
- **Línea 3**: Configura Express para servir archivos estáticos desde la carpeta 'public'.
- **Línea 4**: Inicia el servidor y lo hace escuchar en el puerto 3000.
- **Línea 5**: Muestra un mensaje en la consola indicando que el servidor está funcionando.

## Contribuciones

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tus cambios.
3. Realiza un pull request con una descripción de tus modificaciones.

## Licencia

Este proyecto está bajo la [Licencia GNU](LICENSE).

