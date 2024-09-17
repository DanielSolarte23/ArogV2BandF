import { z } from 'zod'; // Importa la librería `zod` para la validación de esquemas

// Define el esquema de validación para el registro de usuarios
export const registerShema = z.object({
    nombre: z.string({ // El campo `nombre` debe ser una cadena de texto
        required_error: 'El nombre de usuario es requerido' // Mensaje de error si el campo está vacío
    }),
    email: z.string({ // El campo `email` debe ser una cadena de texto
        required_error: 'El correo es requerido' // Mensaje de error si el campo está vacío
    }).email({ // Valida que el campo tenga un formato de correo electrónico
        message: 'correo invalido' // Mensaje de error si el formato del correo es inválido
    }),
    password: z.string({ // El campo `password` debe ser una cadena de texto
        required_error: 'La contraseña es requerida' // Mensaje de error si el campo está vacío
    }).min(6, { // Valida que la contraseña tenga al menos 6 caracteres
        message: 'La contraseña debe tener mas de 6 caracteres' // Mensaje de error si la longitud es menor
    })
});

// Define el esquema de validación para el inicio de sesión de usuarios
export const loginShema = z.object({
    email: z.string({ // El campo `email` debe ser una cadena de texto
        required_error: 'El correo es requerido' // Mensaje de error si el campo está vacío
    }).email({ // Valida que el campo tenga un formato de correo electrónico
        message: 'Correo invalido' // Mensaje de error si el formato del correo es inválido
    }),
    password: z.string({ // El campo `password` debe ser una cadena de texto
        required_error: 'La contraseña es requerida' // Mensaje de error si el campo está vacío
    }).min(6, { // Valida que la contraseña tenga al menos 6 caracteres
        message: 'La contraseña debe tener mas de 6 caracteres' // Mensaje de error si la longitud es menor
    })
});
