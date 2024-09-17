import { date, z } from "zod"; // Importa `zod` para la validación de esquemas y `date` para validaciones relacionadas con fechas

// Define el esquema de validación para la creación de tareas
export const createTaskShema = z.object({
    title: z.string({ // El campo `title` debe ser una cadena de texto
        required_error: 'El titulo es requerido' // Mensaje de error si el campo está vacío
    }),
    description: z.string({ // El campo `description` debe ser una cadena de texto
        required_error: 'La descripcion es requerida' // Mensaje de error si el campo está vacío
    }),
    date: z.string() // El campo `date` debe ser una cadena de texto
        .datetime() // Valida que la cadena tenga un formato de fecha y hora válidos
        .optional(), // El campo es opcional; puede no estar presente
});
