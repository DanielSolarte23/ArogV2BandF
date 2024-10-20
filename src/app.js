import express from "express"; // Importa Express para crear el servidor web
import morgan from "morgan"; // Importa Morgan para el registro de solicitudes HTTP
import cookieParser from "cookie-parser"; // Importa Cookie-Parser para analizar cookies
import cors from "cors"; // Importa CORS para permitir solicitudes entre diferentes dominios

import authRoutes from './routes/auth.routes.js'; // Importa las rutas de autenticación
import taskRoutes from "./routes/task.routes.js"; // Importa las rutas de tareas
import routeRoutes from "./routes/ruta.routes.js"

const app = express(); // Crea una instancia de la aplicación Express

// Configura CORS para permitir solicitudes desde un origen específico y con credenciales
app.use(cors({
    origin: 'http://localhost:5173', // Permite solicitudes desde este origen
    credentials: true // Permite el envío de credenciales (como cookies) con solicitudes
}));

// Configura Morgan para registrar las solicitudes HTTP en el entorno de desarrollo
app.use(morgan('dev'));

// Configura Express para analizar cuerpos de solicitud JSON
app.use(express.json());

// Configura Cookie-Parser para analizar cookies en las solicitudes
app.use(cookieParser());

// Configura las rutas de autenticación para que se manejen bajo el prefijo "/api"
app.use("/api", authRoutes);  

// Configura las rutas de tareas para que se manejen bajo el prefijo "/api"
app.use("/api", taskRoutes);

app.use("/api", routeRoutes);

export default app; // Exporta la aplicación Express para su uso en otras partes de la aplicación
