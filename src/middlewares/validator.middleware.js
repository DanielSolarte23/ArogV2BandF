// Función de validación de esquemas que recibe un esquema como argumento
export const validateSchema = (schema) => (req, res, next) => {
    try {
        // Intenta validar los datos enviados en el cuerpo de la solicitud (`req.body`) usando el esquema proporcionado
        schema.parse(req.body);
        
        // Si la validación es exitosa, se llama a `next()` para continuar con el siguiente middleware o ruta
        next();
    } catch (error) {
        // Si la validación falla, se captura el error y se devuelve una respuesta con estado 400 (solicitud incorrecta)
        // El mensaje de error se extrae y se envía como respuesta en formato JSON
        return res.status(400).json(error.errors.map(error => error.message));
    }
};
