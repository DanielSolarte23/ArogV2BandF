import { z } from "zod";

// Definir el esquema de validación con Zod
const RutaSchema = z.object({
    nombreRuta: z.string().min(1, "El nombre de la ruta es requerido"),
    origen: z.enum(['Aida Lucia', 'Galeria la esmeralda', 'Galeria barrio bolivar', 'Galeria la 13'], {
        errorMap: () => ({ message: "El origen debe ser una opción válida" })
    }),
    destino: z.enum(['Planta de tratamiento', 'Relleno sanitario'], {
        errorMap: () => ({ message: "El destino debe ser una opción válida" })
    }),
    duracion: z.string().min(1, "La duración es requerida"),
    distancia: z.number().positive("La distancia debe ser un número positivo"),
    paradas: z.array(z.object({
        nombre: z.enum(['Calle 1', 'Calle 2', 'Calle 3', 'Galeria la esmeralda', 'Galeria barrio bolivar', 'Galeria la 13'], {
            errorMap: () => ({ message: "El nombre de la parada debe ser una opción válida" })
        })
    })).min(1, "Debe haber al menos una parada"),
    horarios: z.array(z.object({
        dia: z.string().min(1, "El día es requerido"),
        horaSalida: z.preprocess((arg) => (typeof arg === 'string' ? new Date(arg) : arg), z.date({
            required_error: "La hora de salida es requerida",
            invalid_type_error: "La hora de salida debe ser una fecha válida"
        })),
        horaLlegada: z.preprocess((arg) => (typeof arg === 'string' ? new Date(arg) : arg), z.date({
            required_error: "La hora de llegada es requerida",
            invalid_type_error: "La hora de llegada debe ser una fecha válida"
        }))
    })).min(1, "Debe haber al menos un horario"),
    funcionarioId: z.string().min(1, "El ID del puede ser requerido").optional() // Cambiado a opcional
});

export default RutaSchema;

