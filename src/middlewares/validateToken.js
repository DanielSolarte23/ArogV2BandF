import jwt from "jsonwebtoken"; // Importa el módulo jsonwebtoken para la verificación de tokens
import { TOKEN_SECRET } from "../config/config.js"; // Importa la clave secreta usada para verificar el token

// Middleware de autenticación que se asegura de que el usuario tenga un token válido
export const authRequire = (req, res, next) => {
    const { token } = req.cookies; // Extrae el token de las cookies de la solicitud

    // Si no hay token, responde con un error 401 (No autorizado)
    if (!token)
        return res.status(401).json({ mensaje: "No autorizacion de token" });

    // Verifica el token utilizando la clave secreta
    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        // Si el token es inválido o hay un error, responde con un error 403 (Prohibido)
        if (err) return res.status(403).json({ mensaje: "Token Invalido" });

        // Si el token es válido, asigna el usuario al objeto `req` para que esté disponible en el siguiente middleware o ruta
        req.user = user;

        // Llama a `next()` para continuar con el siguiente middleware o la ruta
        next();
    });
};
