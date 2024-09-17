import { Router } from "express"; // Importa el enrutador de Express para definir rutas
import { login, register, logout, profile, verifyToken, MostrarUsuarios } from "../controller/auth.controller.js"; // Importa los controladores para las rutas de autenticación
import { authRequire } from "../middlewares/validateToken.js"; // Importa el middleware para validar tokens de autenticación
import { validateSchema } from "../middlewares/validator.middleware.js"; // Importa el middleware para validar datos con esquemas
import { registerShema, loginShema } from "../schemas/auth.schema.js"; // Importa los esquemas de validación para el registro y el inicio de sesión

const router = Router(); // Crea una instancia del enrutador de Express

// Ruta para el registro de usuarios
// Usa el middleware `validateSchema` para validar los datos del registro antes de llamar al controlador `register`
router.post('/register', validateSchema(registerShema), register);

// Ruta para el inicio de sesión de usuarios
// Usa el middleware `validateSchema` para validar los datos de inicio de sesión antes de llamar al controlador `login`
router.post('/login', validateSchema(loginShema), login);

// Ruta para el cierre de sesión de usuarios
// Llama al controlador `logout` para manejar el cierre de sesión
router.post('/logout', logout);

// Ruta para verificar el token de autenticación
// Llama al controlador `verifyToken` para verificar el token en las cookies
router.get("/verify", verifyToken);

// Ruta para obtener el perfil del usuario
// Usa el middleware `authRequire` para asegurar que el usuario esté autenticado antes de llamar al controlador `profile`
router.get("/profile", authRequire, profile);

router.get("/users", MostrarUsuarios)
export default router; // Exporta el enrutador configurado para su uso en otras partes de la aplicación
