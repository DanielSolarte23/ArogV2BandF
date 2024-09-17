import app from "./app.js"; // Importa la aplicación Express desde el archivo `app.js`
import { conectDB } from "./config/bd.js"; // Importa la función para conectar a la base de datos desde el archivo `bd.js`

conectDB(); // Llama a la función para conectar a la base de datos

// Inicia el servidor Express en el puerto 3002
app.listen(3002, () => {
    // Muestra un mensaje en la consola cuando el servidor está en funcionamiento
    console.log("server on port", 3002);
});
