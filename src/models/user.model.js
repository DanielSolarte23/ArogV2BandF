import mongoose from "mongoose";

// Modelo de la base de datos donde establecemos la estructura y los tipos de datos
const userSchema = new mongoose.Schema({
  nombre: {
    type: String, // Tipo de dato String
    required: true, // Campo requerido
    trim: true, // Elimina espacios en blanco
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true, // Asegura que el email sea único
  },
  password: {
    type: String,
    required: true,
  },
  rol: {
    type: String,// Define los valores posibles para el rol
    default: 'ciudadano', // El valor por defecto es 'ciudadano'
  }
}, {
  timestamps: true // Guarda la fecha y la hora en la que se hace un registro
});

export default mongoose.model('User', userSchema); // Se exporta el modelo
