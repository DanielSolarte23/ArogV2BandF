import mongoose from "mongoose"; // Importa el módulo mongoose para trabajar con MongoDB

// Define el esquema para el modelo de tarea
const taskSchema = new mongoose.Schema({
    title: {
        type: String, // El campo `title` es de tipo String
        required: true // Es obligatorio que se proporcione un título
    },
    description: {
        type: String, // El campo `description` es de tipo String
        required: true // Es obligatorio que se proporcione una descripción
    },
    date: {
        type: Date, // El campo `date` es de tipo Date
        default: Date.now // Si no se proporciona una fecha, se usa la fecha actual por defecto
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, // El campo `user` es un ObjectId de MongoDB
        ref: 'User', // Referencia al modelo `User` (para poblaciones o joins en consultas)
        require: true // Es obligatorio que se proporcione un usuario
    }
}, {
    timestamps: true // Agrega campos `createdAt` y `updatedAt` automáticamente
});

// Exporta el modelo de Mongoose basado en el esquema definido
export default mongoose.model('Task', taskSchema);
